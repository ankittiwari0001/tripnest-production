"use client";

import Image from "next/image";

export default function Showcase() {
  return (
    <section className="bg-slate-950 text-white py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-24">

          <p className="text-blue-400 font-semibold uppercase tracking-[0.3em]">
            Product Showcase
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Experience TripNest
            <br />
            In Action
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">
            Explore destinations, discover hidden gems,
            and build your travel collection through a
            modern tourism experience.
          </p>

        </div>

        {/* SECTION 1 */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
            mb-32
          "
        >

          {/* IMAGE */}

          <div
            className="
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
              shadow-2xl
            "
          >

            <Image
              src="/map1.png"
              alt="TripNest Map Experience"
              width={1200}
              height={700}
              className="w-full h-auto"
            />

          </div>

          {/* CONTENT */}

          <div>

            <span
              className="
                bg-blue-500/10
                text-blue-400
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              Interactive Discovery
            </span>

            <h3
              className="
                mt-6
                text-4xl
                font-black
              "
            >
              Discover Places
              In Real Time
            </h3>

            <p
              className="
                mt-6
                text-slate-400
                text-lg
                leading-relaxed
              "
            >
              Explore nearby hotels,
              restaurants and attractions
              through an immersive map
              experience designed for
              modern travelers.
            </p>

          </div>

        </div>

        {/* SECTION 2 */}

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* CONTENT */}

          <div>

            <span
              className="
                bg-pink-500/10
                text-pink-400
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
              "
            >
              Save Favorites
            </span>

            <h3
              className="
                mt-6
                text-4xl
                font-black
              "
            >
              Build Your Personal
              Travel Collection
            </h3>

            <p
              className="
                mt-6
                text-slate-400
                text-lg
                leading-relaxed
              "
            >
              Save destinations you love,
              revisit them anytime and
              organize your future journeys
              effortlessly.
            </p>

          </div>

          {/* IMAGE */}

          <div
            className="
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
              shadow-2xl
            "
          >

            <Image
              src="/map2.png"
              alt="Saved Places"
              width={1200}
              height={700}
              className="w-full h-auto"
            />

          </div>

        </div>

      </div>

    </section>
  );
}