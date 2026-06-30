"use client";

import {
  MapPinned,
  Heart,
  SlidersHorizontal,
} from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.3em]">
            Why TripNest
          </p>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Built For Modern
            Travelers
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Discover places faster, save destinations
            you love and explore cities through a
            modern tourism experience.
          </p>
        </div>

        {/* MAIN FEATURE */}

        <div
          className="
            bg-slate-950
            rounded-[40px]
            p-10
            md:p-14
            text-white
            mb-8
            overflow-hidden
            relative
          "
        >
          <div className="max-w-3xl">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-blue-500/20
                flex
                items-center
                justify-center
                mb-8
              "
            >
              <MapPinned
                size={30}
                className="text-blue-400"
              />
            </div>

            <h3 className="text-4xl font-black">
              Live Interactive Map
            </h3>

            <p
              className="
                mt-6
                text-slate-300
                text-lg
                leading-relaxed
              "
            >
              Explore nearby hotels,
              restaurants and attractions
              through a real-time tourism map
              designed for modern travel.
            </p>

          </div>

          {/* DECORATION */}

          <div
            className="
              absolute
              right-0
              top-0
              w-[300px]
              h-[300px]
              bg-blue-500/10
              rounded-full
              blur-[100px]
            "
          />
        </div>

        {/* SECOND ROW */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* FILTERS */}

          <div
            className="
              border
              border-slate-200
              rounded-[36px]
              p-10
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <SlidersHorizontal
                size={26}
                className="text-blue-600"
              />
            </div>

            <h3 className="text-3xl font-black text-slate-900">
              Smart Filters
            </h3>

            <p
              className="
                mt-4
                text-slate-600
                leading-relaxed
              "
            >
              Instantly switch between
              Hotels, Restaurants and
              Attractions with a single tap.
            </p>
          </div>

          {/* SAVED PLACES */}

          <div
            className="
              border
              border-slate-200
              rounded-[36px]
              p-10
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-red-50
                flex
                items-center
                justify-center
                mb-6
              "
            >
              <Heart
                size={26}
                className="text-red-500"
              />
            </div>

            <h3 className="text-3xl font-black text-slate-900">
              Save Places
            </h3>

            <p
              className="
                mt-4
                text-slate-600
                leading-relaxed
              "
            >
              Build your own travel collection
              and revisit favorite destinations
              anytime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}