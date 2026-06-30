"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function DashboardHeader() {
  const { user } = useAuthStore();

  return (
    <div
      className="
        rounded-[40px]
        overflow-hidden
        bg-gradient-to-r
        from-slate-950
        via-slate-900
        to-blue-950
        text-white
        p-10
        md:p-14
        relative
      "
    >
      <div
        className="
          absolute
          top-0
          right-0
          w-[300px]
          h-[300px]
          bg-blue-500/20
          blur-[120px]
        "
      />

      <div className="relative z-10">
        <p className="text-blue-400 font-medium">
          Welcome Back 👋
        </p>

        <h1
          className="
            text-4xl
            md:text-6xl
            font-black
            mt-3
          "
        >
          {user?.name || "Traveler"}
        </h1>

        <p
          className="
            mt-4
            text-slate-300
            text-lg
            max-w-2xl
          "
        >
          Manage your saved places,
          explore destinations and
          continue your journey with
          TripNest.
        </p>

        <Link
          href="/map"
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            bg-blue-600
            hover:bg-blue-700
            px-6
            py-4
            rounded-2xl
            font-semibold
            transition-all
          "
        >
          Explore Map

          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}