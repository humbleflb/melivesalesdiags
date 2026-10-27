import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_COOKIE, GATE_TOKEN } from "./app/lib/gate-token";

function isPublicAsset(pathname: string) {
  return /\.(?:png|svg|ico|jpg|jpeg|webp|gif|txt|xml|webmanifest)$/i.test(
    pathname,
  );
}

function isOpenPath(pathname: string) {
  return (
    pathname === "/acesso" ||
    pathname === "/api/acesso" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/assets") ||
    isPublicAsset(pathname)
  );
}

function seal(response: NextResponse) {
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex");
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isOpenPath(pathname)) return NextResponse.next();

  const token = request.cookies.get(GATE_COOKIE)?.value;
  if (token === GATE_TOKEN) return seal(NextResponse.next());

  const url = request.nextUrl.clone();
  url.pathname = "/acesso";
  url.search = "";
  return seal(NextResponse.rewrite(url));
}
