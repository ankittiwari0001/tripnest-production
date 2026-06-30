"use client";

import {
  Search,
  X,
} from "lucide-react";

interface Props {

  value: string;

  onChange: (
    value: string
  ) => void;

  resultsCount: number;
}

export default function MapSearch({

  value,

  onChange,

  resultsCount,
}: Props) {

  return (

    <div
      className="
        absolute
        top-6
        left-1/2
        -translate-x-1/2
        z-[999]
        w-full
        px-4
        sm:px-6
      "
    >

      <div
        className="
          max-w-[700px]
          mx-auto
        "
      >

        {/* SEARCH BAR */}

        <div
          className="
            bg-white/95
            backdrop-blur-xl
            rounded-[24px]
            sm:rounded-[32px]
            shadow-2xl
            border
            border-white/20
            px-4
            sm:px-6
            h-[72px]
            flex
            items-center
            gap-3
            sm:gap-4
            transition-all
            duration-300
            focus-within:shadow-3xl
            focus-within:scale-[1.01]
          "
        >

          {/* SEARCH ICON */}

          <div
            className="
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <Search size={20} />

          </div>

          {/* INPUT */}

          <input

            type="text"

            placeholder="Search hotels, cafes, attractions..."

            value={value}

            onChange={(event) =>
              onChange(
                event.target.value
              )
            }

            className="
              w-full
              bg-transparent
              outline-none
              text-base
              sm:text-lg
              placeholder:text-gray-400
              font-medium
            "
          />

          {/* CLEAR BUTTON */}

          {value.trim() && (

            <button

              onClick={() =>
                onChange("")
              }

              className="
                w-10
                h-10
                rounded-full
                bg-zinc-100
                hover:bg-zinc-200
                transition-all
                duration-300
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <X size={18} />

            </button>

          )}

        </div>

        {/* RESULT COUNT */}

        <p
          className="
            text-center
            text-xs
            sm:text-sm
            text-gray-500
            mt-3
            font-medium
          "
        >

          {resultsCount}
          {" "}
          place
          {resultsCount !== 1
            ? "s"
            : ""}
          {" "}
          found

        </p>

      </div>

    </div>
  );
}