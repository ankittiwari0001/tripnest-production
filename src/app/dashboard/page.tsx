"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import DashboardHero from "@/components/dashboard/v2/DashboardHero";
import QuickActions from "@/components/dashboard/v2/QuickActions";
import ContinueJourney from "@/components/dashboard/v2/ContinueJourney";
import DashboardStats from "@/components/dashboard/DashboardStats";
import SavedPlacesGrid from "@/components/dashboard/SavedPlacesGrid";

import useSavedPlaces from "@/hooks/useSavedPlaces";
import { useAuthStore } from "@/store/authStore";

export default function DashboardPage() {
  const router = useRouter();

  const { savedPlaces, hydrated } = useSavedPlaces();

  const { user, token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
    }
  }, [token, router]);

  if (!user || !hydrated) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">

      {/* Hero */}
      <DashboardHero />

      {/* Quick Actions */}
      <QuickActions />

      {/* Continue Journey */}
      <ContinueJourney />

      {/* Dashboard Stats */}
      <DashboardStats />

      {/* Saved Places */}
      <SavedPlacesGrid places={savedPlaces} />

      {/* Account Information */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-3xl font-black">
          Account Information
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">
              Name
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              {user.name}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Email
            </p>

            <h3 className="mt-2 text-xl font-semibold break-all">
              {user.email}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Role
            </p>

            <span className="mt-2 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {user.role}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}