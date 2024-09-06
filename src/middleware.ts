import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const features = request.nextUrl.searchParams.get("features");
  const response = NextResponse.next();
  if (features) {
    response.cookies.set("features", features);
    response.cookies.set("auth", "jsonwebtoken");
  }
  return response;
}
