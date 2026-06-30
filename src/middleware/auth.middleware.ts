import {
  NextRequest,
  NextResponse,
} from "next/server";

import { verifyToken } from "@/lib/auth";

export function middleware(
  req: NextRequest
) {

  const token =
    req.headers
      .get("authorization")
      ?.replace("Bearer ", "");

  /* CHECK TOKEN */

  if (!token) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Unauthorized",
      },

      {
        status: 401,
      }
    );
  }

  /* VERIFY TOKEN */

  const decoded =
    verifyToken(token);

  if (!decoded) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Invalid token",
      },

      {
        status: 401,
      }
    );
  }

  return NextResponse.next();
}

/* 🔥 PROTECTED ROUTES */

export const config = {

  matcher: [
    "/api/protected/:path*",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};