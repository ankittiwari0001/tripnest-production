"use client";

import {
  MapPin,
  Hotel,
  UtensilsCrossed,
  Trees,
} from "lucide-react";

interface Props {
  selectedType: string;

  onChange: (
    type: string
  ) => void;
}

const filters = [
  {
    id: "all",
    label: "All",
    icon: MapPin,
  },
  {
    id: "hotel",
    label: "Hotels",
    icon: Hotel,
  },
  {
    id: "restaurant",
    label: "Food",
    icon: UtensilsCrossed,
  },
  {
    id: "attraction",
    label: "Places",
    icon: Trees,
  },
];

export default function MapFilters({
  selectedType,
  onChange,
}: Props) {

  return (

    <div
      className="
        absolute
        top-28
        left-1/2
        -translate-x-1/2
        z-[999]
        w-full
        px-4
      "
    >

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          overflow-x-auto
          scrollbar-hide
        "
      >

        {filters.map(
          (filter) => {

            const Icon =
              filter.icon;

            const active =
              selectedType ===
              filter.id;

            return (

              <button
                key={
                  filter.id
                }

                onClick={() =>
                  onChange(
                    filter.id
                  )
                }

                className={`
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  backdrop-blur-xl
                  border
                  transition-all
                  duration-300
                  whitespace-nowrap

                  ${
                    active
                      ? "bg-black text-white border-black shadow-xl"
                      : "bg-white/95 text-gray-700 border-white/20 hover:scale-105"
                  }
                `}
              >

                <Icon
                  size={18}
                />

                <span
                  className="
                    text-sm
                    font-semibold
                  "
                >

                  {
                    filter.label
                  }

                </span>

              </button>

            );
          }
        )}

      </div>

    </div>
  );
}