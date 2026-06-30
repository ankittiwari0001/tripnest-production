"use client";

import {
  MapPin,
  Building2,
  Sparkles,
  Heart,
} from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "50K+",
    label: "Places Discovered",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Cities Covered",
  },
  {
    icon: Sparkles,
    value: "24/7",
    label: "AI Discovery",
  },
  {
    icon: Heart,
    value: "10K+",
    label: "Saved Collections",
  },
];

export default function Stats() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-[0.3em] uppercase mb-4">
            Statistics
          </p>

          <h2 className="text-5xl font-black text-slate-900 mb-6">
            Trusted By Modern Travelers
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-slate-500">
            Thousands of travelers use TripNest to discover
            new destinations, save favorites and explore
            smarter.
          </p>
        </div>

        {/* STATS GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-[32px]
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* ICON */}

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition-all
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                {/* VALUE */}

                <h3
                  className="
                    text-5xl
                    font-black
                    text-slate-900
                    mb-3
                  "
                >
                  {item.value}
                </h3>

                {/* LABEL */}

                <p
                  className="
                    text-slate-500
                    font-medium
                    text-lg
                  "
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}