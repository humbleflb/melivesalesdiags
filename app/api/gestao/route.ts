import { NextResponse } from "next/server";
import { clients } from "../../clients";
import { GATE_COOKIE, GATE_TOKEN } from "../../lib/gate-token";
import { listChecks, seedChecks, setCheck } from "../../lib/gestao-db";
import { parseGestaoProject, parseSeed, parseTaskId } from "../../lib/gestao";

const allowedProjects = clients.flatMap((client) => (client.gestaoHref ? [client.slug] : []));

function readCookie(request: Request, name: string) {
  const header = request.headers.get("cookie") ?? "";
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return "";
}

function denied(request: Request) {
  if (readCookie(request, GATE_COOKIE) === GATE_TOKEN) return null;
  return NextResponse.json({ error: "unauthorized" }, { status: 401 });
}

function projectFrom(value: unknown) {
  return parseGestaoProject(value, allowedProjects);
}

function json(body: unknown, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "cache-control": "private, no-store" },
  });
}

function failure(error: unknown) {
  const missing = error instanceof Error && error.message === "gestao-config";
  return json({ error: missing ? "config" : "sync" }, missing ? 503 : 502);
}

export async function GET(request: Request) {
  const blocked = denied(request);
  if (blocked) return blocked;
  const project = projectFrom(new URL(request.url).searchParams.get("project"));
  if (!project) return json({ error: "project" }, 404);
  try {
    return json({ checked: await listChecks(project) });
  } catch (error) {
    return failure(error);
  }
}

export async function POST(request: Request) {
  const blocked = denied(request);
  if (blocked) return blocked;
  let body: { project?: unknown; taskId?: unknown; checked?: unknown; seed?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return json({ error: "body" }, 400);
  }
  const project = projectFrom(body.project);
  if (!project) return json({ error: "project" }, 404);
  try {
    if (body.seed !== undefined) {
      const seed = parseSeed(body.seed);
      if (!seed) return json({ error: "seed" }, 400);
      await seedChecks(project, seed);
      return json({ checked: await listChecks(project) });
    }
    const taskId = parseTaskId(body.taskId);
    if (!taskId || typeof body.checked !== "boolean") return json({ error: "task" }, 400);
    await setCheck(project, taskId, body.checked);
    return json({ checked: await listChecks(project) });
  } catch (error) {
    return failure(error);
  }
}
