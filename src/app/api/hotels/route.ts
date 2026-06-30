import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Hotel from "@/models/Hotel";

import { verifyToken } from "@/lib/auth";

export async function POST(
  req: NextRequest
) {

  try {

    await connectDB();

    /* TOKEN */

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

    /* BODY */

    const body =
      await req.json();

    const hotel =
      await Hotel.create({
        ...body,

        createdBy:
          decoded.id,
      });

    return NextResponse.json(
      {
        success: true,

        message:
          "Hotel added successfully",

        hotel,
      },

      {
        status: 201,
      }
    );

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to add hotel",
      },

      {
        status: 500,
      }
    );

  }
}

/* GET ALL HOTELS */

export async function GET() {

  try {

    await connectDB();

    const hotels =
      await Hotel.find()
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      {
        success: true,

        hotels,
      }
    );

  } catch (error) {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch hotels",
      },

      {
        status: 500,
      }
    );

  }
}