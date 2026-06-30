"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-950
        text-white
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-blue-500/20
          blur-[180px]
          rounded-full
          pointer-events-none
        "
      />

      {/* GRID GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          py-24
          lg:py-32
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                rounded-full
                px-4
                py-2
                mb-8
              "
            >
              <Sparkles size={16} />

              <span className="text-sm font-medium">
                AI Powered Tourism Platform
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                leading-[1.05]
                tracking-tight
              "
            >
              Discover Hidden
              <br />

              <span className="text-blue-400">
                Places
              </span>

              <br />

              With AI Powered
              <br />
              Travel
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-lg
                md:text-xl
                text-slate-300
                leading-relaxed
                max-w-xl
              "
            >
              Explore cities through an intelligent tourism map,
              discover hidden gems, save favorite places and
              travel with AI-powered recommendations built for
              modern explorers.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              <Link
                href="/map"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-7
                  py-4
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Explore Map

                <ArrowRight size={18} />
              </Link>

              <Link
                href="#showcase"
                className="
                  inline-flex
                  items-center
                  px-7
                  py-4
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/10
                  backdrop-blur-xl
                  font-semibold
                  hover:bg-white/15
                  transition-all
                "
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            {/* MAIN CARD */}
            <div
              className="
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                shadow-[0_30px_100px_rgba(37,99,235,0.25)]
              "
            >
              <Image
                src="/MapPreview.png"
                alt="TripNest Tourism Map"
                width={1400}
                height={900}
                priority
                className="
                  w-full
                  h-auto
                  object-cover
                "
              />
            </div>

            {/* TOP BADGE */}
            <div
              className="
                absolute
                top-5
                right-5
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-xl
                font-medium
                shadow-xl
              "
            >
              Live Tourism Map
            </div>

            {/* BOTTOM CARD */}
            <div
              className="
                absolute
                -bottom-6
                left-6
                bg-white
                text-black
                px-5
                py-4
                rounded-2xl
                shadow-2xl
                min-w-[220px]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPin
                    size={20}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Powered By
                  </p>

                  <p className="font-bold">
                    AI Discovery Engine
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING GLOW */}
            <div
              className="
                absolute
                -z-10
                inset-0
                bg-blue-500/20
                blur-[120px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}