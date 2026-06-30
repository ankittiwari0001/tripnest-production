import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Hotel from "@/models/Hotel";
import { verifyToken } from "@/lib/auth";

export async function GET(
  req: NextRequest,

  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    await connectDB();

    const { id } = await params;

    const hotel =
      await Hotel.findById(
        id
      );

    if (!hotel) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Hotel not found",
        },

        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,

        hotel,
      }
    );

  } catch (error) {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch hotel",
      },

      {
        status: 500,
      }
    );

  }
}

export async function DELETE(
  req: NextRequest,

  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    await connectDB();

    const { id } = await params;

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

    await Hotel.findByIdAndDelete(
      id
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Hotel deleted successfully",
      }
    );

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        message:
          "Delete failed",
      },

      {
        status: 500,
      }
    );

  }
}

