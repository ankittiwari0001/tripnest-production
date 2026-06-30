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
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-white">
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <p className="text-blue-300 font-medium">
            {greeting}
          </p>

          <h1 className="mt-3 text-5xl font-black leading-tight">
            Welcome back,
            <br />
            {user?.name ?? "Traveler"}
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            Plan your next adventure with AI recommendations,
            smart maps and premium hotel experiences.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-lg">
              <Search size={18} />

              <input
                placeholder="Search hotels, restaurants, cities..."
                className="w-64 bg-transparent outline-none"
              />
            </div>

            <Link
              href="/map"
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              <MapPinned size={18} />
              Explore Map
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex">
          <div className="flex h-60 w-60 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <span className="text-7xl">🌍</span>
          </div>
        </div>
      </div>
    </section>
  );
}