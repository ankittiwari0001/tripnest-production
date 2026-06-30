"use client";

import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {
  places: ExtendedPlace[];
}

export default function SavedPlacesGrid({
  places,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-[40px]
        p-10
        shadow-lg
        border
        border-slate-200
        mt-10
      "
    >
      <h2
        className="
          text-3xl
          font-black
          mb-8
        "
      >
        Saved Places ❤️
      </h2>

      {places.length === 0 && (
        <div
          className="
            text-center
            py-12
            text-slate-500
          "
        >
          No saved places yet.
        </div>
      )}

      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="
              border
              border-slate-200
              rounded-[28px]
              overflow-hidden
              bg-white
              hover:shadow-xl
              transition-all
            "
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={place.image}
              alt={place.tags.name}
              className="
                w-full
                h-48
                object-cover
              "
            />

            <div className="p-5">
              <h3
                className="
                  font-bold
                  text-lg
                "
              >
                {place.tags.name}
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                  capitalize
                "
              >
                {place.tags.tourism ||
                  place.tags.amenity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}