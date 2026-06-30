"use client";

import {
  useEffect,
  useState,
} from "react";

import type { CatalogPlace } from "@/types/place";

/* TYPES */

interface Festival {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface Culture {
  food?: string[];
  music?: string[];
  traditions?: string[];
}

interface ExploreData {
  location: {
    city: string;
    state: string;
  };

  places: CatalogPlace[];

  festivals: Festival[];

  culture?: Culture;
}

export default function SmartExplore() {

  const [data, setData] =
    useState<ExploreData | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadExplore() {

      try {

        /* DEMO LOCATION */

        const city = "Goa";

        const state = "Goa";

        const res =
          await fetch(
            `/api/explore?city=${city}&state=${state}`
          );

        const result: ExploreData =
          await res.json();

        setData(result);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    }

    loadExplore();

  }, []);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Smart Recommendations...

      </div>
    );
  }

  if (!data) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        No data found

      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">

      {/* LOCATION */}
      <div className="bg-white rounded-[32px] p-10 shadow-sm">

        <h2 className="text-5xl font-black mb-4">

          📍 You are in{" "}
          {data.location.city}

        </h2>

        <p className="text-gray-500 text-lg">

          Smart recommendations based on your location.

        </p>

      </div>

      {/* TOURIST PLACES */}
      <div>

        <h2 className="text-4xl font-black mb-10">

          🔥 Nearby Attractions

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.places.map(
            (place: CatalogPlace) => (

              <div
                key={place._id}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-3xl font-black mb-3">

                    {place.name}

                  </h3>

                  <p className="text-gray-500">

                    {place.description}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

      {/* HOTELS */}
      <div>

        <h2 className="text-4xl font-black mb-10">

          🏨 Nearby Hotels

        </h2>

      </div>

      {/* RESTAURANTS */}
      <div>

        <h2 className="text-4xl font-black mb-10">

          🍽 Famous Restaurants

        </h2>

      </div>

      {/* CULTURE */}
      <div className="bg-white rounded-[32px] p-10 shadow-sm">

        <h2 className="text-4xl font-black mb-8">

          🎭 Local Culture

        </h2>

        <div className="space-y-5 text-lg">

          <p>

            <strong>
              Famous Food:
            </strong>{" "}

            {data.culture?.food?.join(
              ", "
            ) || "N/A"}

          </p>

          <p>

            <strong>
              Music:
            </strong>{" "}

            {data.culture?.music?.join(
              ", "
            ) || "N/A"}

          </p>

          <p>

            <strong>
              Traditions:
            </strong>{" "}

            {data.culture?.traditions?.join(
              ", "
            ) || "N/A"}

          </p>

        </div>

      </div>

      {/* FESTIVALS */}
      <div>

        <h2 className="text-4xl font-black mb-10">

          🎉 Festivals

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.festivals.map(
            (festival: Festival) => (

              <div
                key={festival._id}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm"
              >

                <img
                  src={festival.image}
                  alt={festival.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-3xl font-black mb-3">

                    {festival.name}

                  </h3>

                  <p className="text-gray-500">

                    {festival.description}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}