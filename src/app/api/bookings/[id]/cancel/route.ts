import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { bookingService } from "@/services/bookings/booking.service";
import mongoose from "mongoose";

export async function PATCH(
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

 const body = await req.json();

const reason =
  body.reason?.trim() ||
  "Cancelled by user";

const booking =
      await bookingService.cancelBooking(
        id,
        decoded.id,
        reason
      );
    return NextResponse.json(
      {
        success: true,
        message:
          "Booking cancelled successfully",
        booking,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : "Cancellation failed";

    const status =
      message === "Booking is already cancelled" ||
      message === "Completed booking cannot be cancelled"
        ? 409
        : 500;

    return NextResponse.json(
      {
        success: false,
        message,
      },
      {
        status,
      }
    );
  }
}