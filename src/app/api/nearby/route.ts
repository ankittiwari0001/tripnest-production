import { NextResponse }
from "next/server";

import type {
  Place,
} from "@/types/place";

/* EXTENDED PLACE */

interface ExtendedPlace
  extends Place {

  image?: string;

  rating?: number;

  budget?: string;

  vibe?: string;

  summary?: string;
}

/* OVERPASS RESPONSE */

interface OverpassResponse {

  elements?: ExtendedPlace[];
}

/* CACHE */

let cachedData:
  ExtendedPlace[] | null =
  null;

let lastFetch = 0;

/* FALLBACK DATA */

function generateFallbackPlaces(
  lat: number,
  lng: number
): ExtendedPlace[] {

  return [

    /* HOTEL */

    {
      id: 1,

      lat: lat + 0.020,

      lon: lng + 0.015,

      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",

      rating: 4.8,

      budget: "Luxury",

      vibe:
        "Luxury • City View",

      summary:
        "Popular luxury hotel near your location.",

      tags: {

        name:
          "Royal Stay Hotel",

        tourism:
          "hotel",
      },
    },

    /* RESTAURANT */

    {
      id: 2,

      lat: lat - 0.018,

      lon: lng + 0.022,

      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

      rating: 4.5,

      budget: "₹₹",

      vibe:
        "Food • Local Taste",

      summary:
        "Famous restaurant loved by locals.",

      tags: {

        name:
          "City Food Corner",

        amenity:
          "restaurant",
      },
    },

    /* CAFE */

    {
      id: 3,

      lat: lat + 0.015,

      lon: lng - 0.020,

      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",

      rating: 4.6,

      budget: "₹",

      vibe:
        "Coffee • Chill",

      summary:
        "Best cafe for coffee lovers.",

      tags: {

        name:
          "Coffee Hub",

        amenity:
          "cafe",
      },
    },

    /* ATTRACTION */

    {
      id: 4,

      lat: lat - 0.025,

      lon: lng - 0.015,

      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

      rating: 4.9,

      budget: "Free",

      vibe:
        "Nature • Photography",

      summary:
        "Beautiful attraction near your area.",

      tags: {

        name:
          "Sunset Point",

        tourism:
          "attraction",
      },
    },
  ];
}

/* IMAGE GENERATOR */

function getPlaceImage(
  placeName: string
) {

  const images = [

    "https://images.unsplash.com/photo-1566073771259-6a8506099945",

    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",

    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];

  return images[
    Math.floor(
      Math.random() *
      images.length
    )
  ];
}

/* SUMMARY GENERATOR */

function generateSummary(
  placeName: string,
  type: string
) {

  return `${placeName} is a popular ${type} destination loved by tourists for its atmosphere, local experiences, and memorable travel vibe.`;
}

/* FETCH OVERPASS */

async function fetchOverpass(
  query: string,
  lat: number,
  lng: number
): Promise<OverpassResponse> {

  try {

    const controller =
      new AbortController();

    const timeout =
      setTimeout(

        () =>
          controller.abort(),

        5000
      );

    const url =
      `https://overpass.private.coffee/api/interpreter?data=${encodeURIComponent(
        query
      )}`;

    const response =
      await fetch(

        url,

        {
          method: "GET",

          signal:
            controller.signal,

          cache:
            "no-store",
        }
      );

    clearTimeout(
      timeout
    );

    /* RATE LIMIT */

    if (
      response.status ===
      429
    ) {

      return {

        elements:
          generateFallbackPlaces(
            lat,
            lng
          ),
      };
    }

    /* SUCCESS */

    if (
      response.ok
    ) {

      const data =
        (await response.json()) as OverpassResponse;

      return data;
    }

    return {

      elements:
        generateFallbackPlaces(
          lat,
          lng
        ),
    };

  } catch {

    return {

      elements:
        generateFallbackPlaces(
          lat,
          lng
        ),
    };
  }
}

/* API ROUTE */

export async function GET(
  request: Request
) {

  try {

    /* CACHE */

    const now =
      Date.now();

    const {
      searchParams,
    } = new URL(
      request.url
    );

    const latParam =
      searchParams.get(
        "lat"
      );

    const lngParam =
      searchParams.get(
        "lng"
      );

    const lat =
      Number(latParam);

    const lng =
      Number(lngParam);

    const type =
      searchParams.get(
        "type"
      );

    /* VALIDATION */

    if (
      latParam === null ||
      lngParam === null ||
      Number.isNaN(lat) ||
      Number.isNaN(lng)
    ) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Latitude and longitude required",
        },

        {
          status: 400,
        }
      );
    }

    /* USE CACHE */

    if (

      cachedData &&

      now - lastFetch <
        1000 * 60 * 5

    ) {

      return NextResponse.json({

        success: true,

        elements:
          cachedData,
      });
    }

    /* QUERY */

    const query = `
[out:json][timeout:5];

(

  node["tourism"="hotel"](around:1200,${lat},${lng});

  node["tourism"="hostel"](around:1200,${lat},${lng});

  node["tourism"="resort"](around:1200,${lat},${lng});

  node["amenity"="restaurant"](around:1200,${lat},${lng});

  node["amenity"="cafe"](around:1200,${lat},${lng});

  node["amenity"="fast_food"](around:1200,${lat},${lng});

  node["tourism"="attraction"](around:1200,${lat},${lng});

);

out body 100;
`;

    /* FETCH */

    const data =
      await fetchOverpass(
        query,
        lat,
        lng
      );

    /* FILTER + ENHANCE */

    let places:
      ExtendedPlace[] =

      (
        data.elements ||
        []
      )

        .filter(

          (
            place:
              ExtendedPlace
          ) =>

            place.tags &&
            place.tags.name
        )

        .map((place) => ({

          ...place,

          image:
            getPlaceImage(
              place.tags?.name ||
                "travel"
            ),

          rating:
            Number(
              (
                4 +
                Math.random()
              ).toFixed(1)
            ),

          budget:
            [
              "₹",
              "₹₹",
              "Luxury",
            ][
              Math.floor(
                Math.random() * 3
              )
            ],

          vibe:
            [
              "Culture",
              "Food",
              "Nature",
              "Luxury",
              "Adventure",
            ][
              Math.floor(
                Math.random() * 5
              )
            ],

          summary:
            generateSummary(

              place.tags?.name ||
                "Place",

              place.tags?.tourism ||

                place.tags?.amenity ||

                "tourism"
            ),
        }));

    /* TYPE FILTER */

    if (
      type &&
      type !== "all"
    ) {

      places =
        places.filter(
          (place) => {

            const tourism =

              place.tags
                .tourism ||

              place.tags
                .amenity ||

              "";

            if (
              type ===
              "hotel"
            ) {

              return [

                "hotel",

                "hostel",

                "guest_house",

                "resort",
              ].includes(
                tourism
              );
            }

            if (
              type ===
              "restaurant"
            ) {

              return [

                "restaurant",

                "cafe",

                "fast_food",
              ].includes(
                tourism
              );
            }

            if (
              type ===
              "attraction"
            ) {

              return (
                tourism ===
                "attraction"
              );
            }

            return true;
          }
        );
    }

    /* SAVE CACHE */

    cachedData =
      places;

    lastFetch =
      Date.now();

    /* RESPONSE */

    return NextResponse.json({

      success: true,

      elements:
        places,
    });

  } catch (error) {

    console.log(
      "OSM ERROR:",
      error
    );

    return NextResponse.json({

      success: false,

      elements:
        generateFallbackPlaces(
          15.2993,
          74.1240
        ),
    });
  }
}