import {
  NextRequest,
  NextResponse,
} from "next/server";

import { connectDB } from "@/lib/db";

import Hotel from "@/models/Hotel";

import Restaurant from "@/models/Restaurant";

import TouristPlace from "@/models/TouristPlace";

import Festival from "@/models/Festival";

import Culture from "@/models/Culture";

export async function GET(
  req: NextRequest
) {

  try {

    await connectDB();

    const {
      searchParams,
    } = new URL(req.url);

    const city =
      searchParams.get(
        "city"
      );

    const state =
      searchParams.get(
        "state"
      );

    /* FETCH DATA */

    const hotels =
      await Hotel.find({
        city,
      }).limit(5);

    const restaurants =
      await Restaurant.find({
        city,
      }).limit(5);

    const places =
      await TouristPlace.find({
        city,
      }).limit(5);

    const festivals =
      await Festival.find({
        state,
      }).limit(5);

    const culture =
      await Culture.findOne({
        state,
      });

    return NextResponse.json({

      success: true,

      location: {
        city,
        state,
      },

      hotels,

      restaurants,

      places,

      festivals,

      culture,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,

        message:
          "Failed to fetch recommendations",
      },

      {
        status: 500,
      }
    );

  }
}