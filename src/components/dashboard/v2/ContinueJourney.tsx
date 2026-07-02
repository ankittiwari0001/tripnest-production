"use client";

import Link from "next/link";
import {
  Hotel,
  UtensilsCrossed,
  ArrowRight,
  MapPin,
} from "lucide-react";

const recentItems = [
  {
    id: 1,
    title: "Taj Lake Palace",
    category: "HOTEL",
    location: "Udaipur",
    lastViewed: "2 hours ago",
    href: "/hotels",
    icon: Hotel,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    id: 2,
    title: "Indian Accent",
    category: "RESTAURANT",
    location: "New Delhi",
    lastViewed: "Yesterday",
    href: "/restaurants",
    icon: UtensilsCrossed,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
];

export default function ContinueJourney() {
  if (recentItems.length === 0) {
    return (
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Continue Your Journey
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-slate-500">
            No recent activity yet. Start exploring TripNest 🚀
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Continue Your Journey
        </h2>

        <p className="mt-2 text-slate-500">
          Pick up where you left off.
        </p>
      </div>

      <div className="grid gap-5">
        {recentItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="
                group
                flex
                items-center
                justify-between
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
                >
                  <Icon
                    className={item.iconColor}
                    size={26}
                  />
                </div>

                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    {item.category}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={14} />
                    {item.location}
                  </div>

                  <p className="mt-2 text-sm text-slate-400">
                    Viewed {item.lastViewed}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-semibold text-blue-600">
                Continue

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