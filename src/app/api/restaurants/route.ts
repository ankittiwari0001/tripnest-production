import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Restaurant from "@/models/Restaurant";

import { verifyToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {

  try {

    await connectDB();

    const token =
      req.headers
        .get("authorization")
        ?.replace(
          "Bearer ",
          ""
        );

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

    const body =
      await req.json();

    const restaurant =
      await Restaurant.create({
        ...body,

        createdBy:
          decoded.id,
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Restaurant added",

        restaurant,
      },

      {
        status: 201,
      }
    );

  } catch {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to add restaurant",
      },

      {
        status: 500,
      }
    );

  }
}

/* GET ALL */

export async function GET() {

  try {

    await connectDB();

    const restaurants =
      await Restaurant.find()
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      {
        success: true,

        restaurants,
      }
    );

  } catch {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch restaurants",
      },

      {
        status: 500,
      }
    );

  }
}