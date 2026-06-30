"use client";

import { useMemo, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SavedPlacesGrid from "@/components/dashboard/SavedPlacesGrid";

import useSavedPlaces from "@/hooks/useSavedPlaces";

export default function SavedPage() {
  const {
    savedPlaces,
    hydrated,
  } = useSavedPlaces();

  const [search, setSearch] =
    useState("");

  const filteredPlaces =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      if (!query) {
        return savedPlaces;
      }

      return savedPlaces.filter(
        (place) => {
          const text = `
            ${place.tags?.name ?? ""}
            ${place.summary ?? ""}
            ${place.vibe ?? ""}
          `
            .toLowerCase()
            .trim();

          return text.includes(
            query
          );
        }
      );
    }, [
      savedPlaces,
      search,
    ]);

  if (!hydrated) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>   
    );
  }

 return (
  <DashboardLayout>
    {/* HEADER */}

    <div
      className="
        bg-white
        rounded-[40px]
        p-10
        shadow-lg
        border
        border-slate-200
      "
    >
      <h1
        className="
          text-4xl
          font-black
        "
      >
        Saved Places ❤️
      </h1>

      <p
        className="
          mt-3
          text-slate-500
        "
      >
        Manage all your favorite
        destinations in one place.
      </p>

      <div
        className="
          mt-6
          inline-flex
          items-center
          bg-blue-50
          text-blue-700
          px-4
          py-2
          rounded-full
          font-medium
        "
      >
        Total Saved: {savedPlaces.length}
      </div>
    </div>

    {/* SEARCH */}

    <div
      className="
        bg-white
        rounded-[32px]
        p-6
        shadow-lg
        border
        border-slate-200
      "
    >
      <input
        type="text"
        placeholder="Search saved places..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          border
          border-slate-300
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:border-blue-500
        "
      />
    </div>

    {/* GRID */}

    <SavedPlacesGrid
      places={filteredPlaces}
    />
  </DashboardLayout>
);
}