import { NextResponse } from "next/server";
import { GATE_COOKIE, GATE_TOKEN } from "../../lib/gate-token";
import { gateTokenMatchesPassword, passwordMatches } from "../../lib/gate";

export async function POST(request: Request) {
  if (!gateTokenMatchesPassword()) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(GATE_COOKIE, GATE_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
