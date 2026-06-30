import {
  NextRequest,
  NextResponse,
} from "next/server";

import Hotel
from "@/models/Hotel";

import {
  connectDB,
} from "@/lib/db";

export async function GET(
  req: NextRequest
) {

  try {

    await connectDB();

    const {
      searchParams,
    } = new URL(req.url);

    const lat =
      Number(
        searchParams.get("lat")
      );

    const lng =
      Number(
        searchParams.get("lng")
      );

    const hotels =
      await Hotel.find({

        coordinates: {

          $near: {

            $geometry: {

              type: "Point",

              coordinates: [
                lng,
                lat,
              ],
            },

            $maxDistance:
              10000,
          },
        },
      });

    return NextResponse.json({

      success: true,

      hotels,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch nearby hotels",
      },

      {
        status: 500,
      }
    );
  }
}