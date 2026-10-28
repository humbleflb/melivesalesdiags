import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const TABLE = "melive_gestao_checks";

function loadLocalEnv() {
  if (process.env.SUPABASE_URL && process.env.SUPABASE_PUBLISHABLE_KEY && process.env.MELIVE_GESTAO_GATE) {
    return;
  }
  const path = resolve(process.cwd(), ".env");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function config() {
  loadLocalEnv();
  const url = process.env.SUPABASE_URL ?? "";
  const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? "";
  const gate = process.env.MELIVE_GESTAO_GATE ?? "";
  if (!url || !key || !gate) {
    throw new Error("gestao-config");
  }
  return { url: url.replace(/\/$/, ""), key, gate };
}

async function rest(path: string, init: RequestInit = {}) {
  const { url, key, gate } = config();
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("authorization", `Bearer ${key}`);
  headers.set("x-melive-gate", gate);
  if (init.body && !headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers,
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("gestao-db");
  }
  return response;
}

export async function listChecks(project: string) {
  const response = await rest(
    `${TABLE}?select=task_id&project_slug=eq.${encodeURIComponent(project)}&order=task_id.asc`,
  );
  const rows = (await response.json()) as { task_id?: unknown }[];
  return rows.flatMap((row) => (typeof row.task_id === "string" ? [row.task_id] : []));
}

export async function setCheck(project: string, taskId: string, checked: boolean) {
  if (checked) {
    await rest(`${TABLE}?on_conflict=project_slug,task_id`, {
      method: "POST",
      headers: { prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ project_slug: project, task_id: taskId }),
    });
    return;
  }
  await rest(
    `${TABLE}?project_slug=eq.${encodeURIComponent(project)}&task_id=eq.${encodeURIComponent(taskId)}`,
    {
      method: "DELETE",
      headers: { prefer: "return=minimal" },
    },
  );
}

export async function seedChecks(project: string, taskIds: string[]) {
  if (taskIds.length === 0) return;
  await rest(`${TABLE}?on_conflict=project_slug,task_id`, {
    method: "POST",
    headers: { prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(taskIds.map((taskId) => ({ project_slug: project, task_id: taskId }))),
  });
}
