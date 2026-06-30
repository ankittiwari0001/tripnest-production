"use client";

import {
  Heart,
  MapPinned,
  Route,
} from "lucide-react";

import useSavedPlaces from "@/hooks/useSavedPlaces";

export default function DashboardStats() {
  const {
    savedPlaces,
    hydrated,
  } = useSavedPlaces();

  const totalPlaces =
    hydrated
      ? savedPlaces.length
      : 0;

  return (
    <div
      className="
        grid
        md:grid-cols-3
        gap-6
      "
    >
      {/* SAVED */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-8
          shadow-lg
          border
          border-slate-200
        "
      >
        <Heart
          className="
            text-red-500
            mb-4
          "
          size={32}
        />

        <h3
          className="
            text-4xl
            font-black
          "
        >
          {totalPlaces}
        </h3>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Saved Places
        </p>
      </div>

      {/* CITIES */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-8
          shadow-lg
          border
          border-slate-200
        "
      >
        <MapPinned
          className="
            text-blue-600
            mb-4
          "
          size={32}
        />

        <h3
          className="
            text-4xl
            font-black
          "
        >
          {totalPlaces}
        </h3>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Cities Explored
        </p>
      </div>

      {/* TRIPS */}

      <div
        className="
          bg-white
          rounded-[32px]
          p-8
          shadow-lg
          border
          border-slate-200
        "
      >
        <Route
          className="
            text-green-600
            mb-4
          "
          size={32}
        />

        <h3
          className="
            text-4xl
            font-black
          "
        >
          {totalPlaces}
        </h3>

        <p
          className="
            text-slate-500
            mt-2
          "
        >
          Trips Planned
        </p>
      </div>
    </div>
  );
}