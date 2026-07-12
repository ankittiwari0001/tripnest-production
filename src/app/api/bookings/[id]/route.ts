import {
  NextRequest,
  NextResponse,
} from "next/server";

import mongoose from "mongoose";

import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { bookingService } from "@/services/bookings/booking.service";

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
    const { id } = await params;
    /* -----------------------------
       Database
    ----------------------------- */

    await connectDB();

    /* -----------------------------
       Authorization
    ----------------------------- */

    const token = req.headers
      .get("authorization")
      ?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        {
          status: 401,
        }
      );
    }

    /* -----------------------------
       Booking Id Validation
    ----------------------------- */

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid booking id",
        },
        {
          status: 400,
        }
      );
    }

    /* -----------------------------
       Get Booking
    ----------------------------- */

    const booking = await bookingService.getBookingById(
      id,
      decoded.id
    );

    /* -----------------------------
       Success
    ----------------------------- */

    return NextResponse.json(
      {
        success: true,
        message:
          "Booking fetched successfully",
        booking,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to fetch booking",
      },
      {
        status: 500,
      }
    );
  }
}