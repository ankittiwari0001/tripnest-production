"use client";

import Link from "next/link";
import {
  Hotel,
  UtensilsCrossed,
  MapPinned,
  Bot,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Hotels",
    description: "Find luxury stays",
    stats: "120+ Hotels",
    href: "/hotels",
    icon: Hotel,
    color: "bg-blue-500",
  },
  {
    title: "Restaurants",
    description: "Discover local food",
    stats: "350+ Restaurants",
    href: "/restaurants",
    icon: UtensilsCrossed,
    color: "bg-orange-500",
  },
  {
    title: "Explore Map",
    description: "Nearby attractions",
    stats: "50+ Cities",
    href: "/map",
    icon: MapPinned,
    color: "bg-green-500",
  },
  {
    title: "AI Assistant",
    description: "Plan smarter trips",
    stats: "24/7 Available",
    href: "/assistant",
    icon: Bot,
    color: "bg-violet-500",
  },
];

export default function QuickActions() {
  return (
    <section className="space-y-6">

      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            ⚡ Quick Actions
          </h2>

          <p className="mt-2 text-slate-500">
            Jump into your favorite travel tools.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div
                className={`
                  ${item.color}
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  text-white
                `}
              >
                <Icon
                  size={26}
                  strokeWidth={2.2}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              {/* Stats */}
              <p className="mt-5 text-sm font-semibold text-slate-700">
                {item.stats}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                Explore Now

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}