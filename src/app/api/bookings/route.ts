import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Booking from "@/models/Booking";
import { bookingService } from "@/services/bookings/booking.service";
import Hotel from "@/models/Hotel";

import { verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const token = req.headers
      .get("authorization")
      ?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        { status: 401 }
      );
    }

    const body = await req.json();

    const booking =
      await bookingService.createBooking({
        userId: decoded.id,
        ...body,
      });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        booking,
      },
      {
        status: 201,
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
            : "Booking failed",
      },
      {
        status: 500,
      }
    );
  }
}

/* GET USER BOOKINGS */

export async function GET(
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

    const bookings =
      await Booking.find({
        userId:
          decoded.id,
      })
        .populate("hotelId")
        .sort({
          createdAt: -1,
        });

    return NextResponse.json(
      {
        success: true,

        message:
          "Bookings fetched successfully",

        bookings,
      },
      {
        status: 200,
      }
    );

  } catch {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch bookings",
      },

      {
        status: 500,
      }
    );

  }
}