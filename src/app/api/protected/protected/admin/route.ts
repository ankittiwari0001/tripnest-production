import {
  NextRequest,
  NextResponse,
} from "next/server";

import { verifyToken } from "@/lib/auth";

import { isAdmin } from "@/utils/checkRole";

export async function GET(
  req: NextRequest
) {

  const token =
    req.headers
      .get("authorization")
      ?.replace("Bearer ", "");

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

  /* CHECK ADMIN */

  if (!isAdmin(decoded)) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Admin access required",
      },

      {
        status: 403,
      }
    );
  }

  return NextResponse.json({

    success: true,

    message:
      "Welcome Admin 🚀",
  });
}