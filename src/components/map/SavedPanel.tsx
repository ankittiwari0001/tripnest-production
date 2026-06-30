"use client";

import Image from "next/image";
import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {
  open: boolean;

  onClose: () => void;

  savedPlaces: ExtendedPlace[];

  onRemove: (
    place: ExtendedPlace
  ) => void;
}

export default function SavedPlacesPanel({

  open,

  onClose,

  savedPlaces,

  onRemove,

}: Props) {

  if (!open) {
    return null;
  }

  return (

    <>

      {/* BACKDROP */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-[9998]
        "
      />

      {/* DRAWER */}

      <div
        className="
          fixed
          right-0
          top-0
          h-full
          w-full
          sm:w-[420px]
          bg-white
          z-[9999]
          shadow-2xl
          overflow-y-auto
          p-5
        "
      >

        {/* HEADER */}

        <div className="flex items-center justify-between mb-5">

          <h3 className="font-black text-xl">

            Saved Places

          </h3>

          <div className="flex items-center gap-3">

            <div
              className="
                bg-red-500
                text-white
                text-xs
                font-bold
                px-3
                py-1
                rounded-full
              "
            >

              {savedPlaces.length}

            </div>

            <button
              onClick={onClose}
              className="
                w-10
                h-10
                rounded-full
                bg-gray-100
                hover:bg-gray-200
                transition-all
              "
            >

              ✕

            </button>

          </div>

        </div>

        {/* EMPTY */}

        {savedPlaces.length === 0 && (

          <div className="text-center py-10">

            <p className="text-gray-400 text-sm">

              No saved places yet

            </p>

          </div>

        )}

        {/* LIST */}

        <div className="space-y-4">

          {savedPlaces.map(
            (place) => (

              <div

                key={place.id}

                className="
                  bg-gray-100
                  hover:bg-gray-200
                  transition-all
                  duration-300
                  rounded-3xl
                  p-3
                  flex
                  items-center
                  gap-4
                "
              >

                {/* IMAGE */}

                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={
                      place.image || "/fallback-place.jpg"
                    }
                    alt={
                      place.tags.name || "Saved place"
                    }
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* INFO */}

                <div className="flex-1 min-w-0">

                  <p className="font-bold truncate">

                    {place.tags.name}

                  </p>

                  <p className="text-xs text-gray-500 capitalize mt-1">

                    {
                      place.tags
                        .tourism ||

                      place.tags
                        .amenity
                    }

                  </p>

                </div>

                {/* REMOVE */}

                <button

                  onClick={() =>
                    onRemove(
                      place
                    )
                  }

                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-red-500
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >

                  ❤️

                </button>

              </div>
            )
          )}

        </div>

      </div>

    </>

  );
}