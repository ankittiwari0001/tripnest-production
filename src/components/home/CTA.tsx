"use client";

import Link from "next/link";
import {
  ArrowRight,
  Map,
} from "lucide-react";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-32
        bg-gradient-to-br
        from-blue-600
        via-indigo-700
        to-slate-900
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
          w-[600px]
          h-[600px]
          bg-white/10
          rounded-full
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-6
          text-center
        "
      >
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
            px-5
            py-2
            mb-8
          "
        >
          <Map size={16} />

          <span className="text-sm font-medium">
            Start Your Journey Today
          </span>
        </div>

        {/* TITLE */}

        <h2
          className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
          "
        >
          Ready To Explore
          <br />
          Smarter?
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mt-8
            text-xl
            text-white/80
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Discover hotels, restaurants,
          attractions and hidden gems with
          TripNest&apos;s AI-powered tourism
          experience.
        </p>

        {/* BUTTONS */}

        <div
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
          "
        >
          <Link
            href="/map"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-white
              text-slate-900
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore Map

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:bg-white/20
              transition-all
              duration-300
            "
          >
            Learn More
          </Link>
        </div>

        {/* SMALL STATS */}

        <div
          className="
            mt-16
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
        >
          <div>
            <h3 className="text-3xl font-black">
              50K+
            </h3>

            <p className="text-white/70">
              Places
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              100+
            </h3>

            <p className="text-white/70">
              Cities
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              24/7
            </h3>

            <p className="text-white/70">
              Discovery
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black">
              10K+
            </h3>

            <p className="text-white/70">
              Saved Places
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}