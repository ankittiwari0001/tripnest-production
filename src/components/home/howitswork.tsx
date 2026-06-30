"use client";

import {
  Map,
  Search,
  Heart,
  Route,
} from "lucide-react";

const steps = [
  {
    icon: Map,
    step: "01",
    title: "Open The Interactive Map",
    description:
      "Launch the tourism map and instantly explore nearby destinations, restaurants and attractions.",
  },
  {
    icon: Search,
    step: "02",
    title: "Discover Hidden Gems",
    description:
      "Use smart filters and AI-powered recommendations to find places worth visiting.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Save Your Favorites",
    description:
      "Build your personal collection of destinations and access them anytime.",
  },
  {
    icon: Route,
    step: "04",
    title: "Plan Your Journey",
    description:
      "Organize your favorite places and create a smarter travel experience.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        py-32
        bg-slate-950
        text-white
        relative
        overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-blue-500/10
          blur-[180px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-blue-400
              font-semibold
            "
          >
            How It Works
          </p>

          <h2
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              leading-tight
            "
          >
            Travel Smarter In
            <span className="text-blue-400">
              {" "}4 Simple Steps
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-400
              leading-relaxed
            "
          >
            Discover places, save favorites and
            explore cities through a modern
            AI-powered tourism experience.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-24 relative">
          {/* Line */}

          <div
            className="
              hidden
              lg:block
              absolute
              top-20
              left-0
              right-0
              h-[2px]
              bg-gradient-to-r
              from-blue-500/0
              via-blue-500/50
              to-blue-500/0
            "
          />

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="
                    relative
                    group
                  "
                >
                  {/* Step Number */}

                  <div
                    className="
                      absolute
                      -top-4
                      right-4
                      text-6xl
                      font-black
                      text-white/5
                      select-none
                    "
                  >
                    {step.step}
                  </div>

                  <div
                    className="
                      h-full
                      rounded-[32px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-8
                      hover:border-blue-500/40
                      hover:bg-white/[0.07]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                    "
                  >
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-blue-500/15
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >
                      <Icon
                        size={30}
                        className="text-blue-400"
                      />
                    </div>

                    <h3
                      className="
                        text-2xl
                        font-bold
                        mb-4
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        text-slate-400
                        leading-relaxed
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}