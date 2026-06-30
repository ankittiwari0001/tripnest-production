import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

import { connectDB } from "@/lib/db";
import SavedPlace from "@/models/SavedPlace";


// ====================
// GET SAVED PLACES
// ====================

export async function GET(
  req: NextRequest
) {
  try {
    await connectDB();

    const { searchParams } =
      req.nextUrl;

    const userId =
      searchParams.get(
        "userId"
      );

    if (!userId) {
      return NextResponse.json(
        {
          message:
            "User ID required",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidObjectId(userId)) {
      return NextResponse.json(
        {
          message:
            "Invalid User ID format",
        },
        {
          status: 400,
        }
      );
    }

    const savedPlaces =
      await SavedPlace.find({
        userId,
      }).sort({
        createdAt: -1,
      });

    return NextResponse.json(
      {
        success: true,

        savedPlaces: savedPlaces.map((item) => item.placeData),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "GET SAVED ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}


// ====================
// SAVE PLACE
// ====================

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const {
      userId,
      placeId,
      placeData,
    } = await req.json();

    if (
      !userId ||
      placeId == null ||
      placeData == null
    ) {
      return NextResponse.json(
        {
          message:
            "Missing data",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidObjectId(userId)) {
      return NextResponse.json(
        {
          message:
            "Invalid User ID format",
        },
        {
          status: 400,
        }
      );
    }

    const existing =
      await SavedPlace.findOne({
        userId,
        placeId,
      });

    if (existing) {
      return NextResponse.json(
        {
          message:
            "Already saved",
        },
        {
          status: 400,
        }
      );
    }

    const savedPlace =
      await SavedPlace.create({
        userId,
        placeId,
        placeData,
      });

    return NextResponse.json(
      {
        success: true,
        savedPlace,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "SAVE PLACE ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}


// ====================
// DELETE PLACE
// ====================

export async function DELETE(
  req: Request
) {
  try {
    await connectDB();

    const {
      userId,
      placeId,
    } = await req.json();

    if (
      !userId ||
      placeId == null
    ) {
      return NextResponse.json(
        {
          message:
            "Missing data",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidObjectId(userId)) {
      return NextResponse.json(
        {
          message:
            "Invalid User ID format",
        },
        {
          status: 400,
        }
      );
    }

    await SavedPlace.findOneAndDelete({
      userId,
      placeId,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Place removed",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "DELETE PLACE ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}