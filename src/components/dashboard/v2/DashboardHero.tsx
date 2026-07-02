"use client";

import Link from "next/link";
import { Search, MapPinned } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function DashboardHero() {
  const { user } = useAuthStore();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-10 py-8 text-white">
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            {greeting}
          </p>

          <h1 className="mt-3 text-4xl font-black leading-tight lg:text-5xl">
            Welcome back,
            <br />
            {user?.name ?? "Traveler"}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Plan your next adventure with AI recommendations, smart maps and
            premium hotel experiences.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-14 items-center gap-3 rounded-2xl bg-white px-5 text-slate-700 shadow-lg">
              <Search size={18} />

              <input
                placeholder="Search hotels, restaurants, cities..."
                className="w-full sm:w-80 bg-transparent outline-none"
              />
            </div>

            <Link
              href="/map"
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500"
            >
              <MapPinned size={18} />
              Explore Map
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Explore{" "}
            <span className="font-semibold text-white">500+</span> Hotels •{" "}
            <span className="font-semibold text-white">300+</span> Restaurants •{" "}
            <span className="font-semibold text-white">50+</span> Cities
          </p>
        </div>

        {/* Right */}
        <div className="hidden lg:flex">
          <div className="flex h-52 w-52 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-6xl">🌍</span>
          </div>
        </div>
      </div>
    </section>
  );
}