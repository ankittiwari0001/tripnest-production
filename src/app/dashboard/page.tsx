"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";



import SavedPlacesGrid from "@/components/dashboard/SavedPlacesGrid";
import { useAuthStore } from "@/store/authStore";
import useSavedPlaces
from "@/hooks/useSavedPlaces";
import DashboardHero from "@/components/dashboard/v2/DashboardHero";
import DashboardStats from "@/components/dashboard/DashboardStats";

export default function DashboardPage() {
  const router = useRouter();

  const {
  savedPlaces,
  hydrated,
} = useSavedPlaces();

  const {
    user,
    token,
  } = useAuthStore();

  useEffect(() => {
    if (!token) {
      router.replace(
        "/auth/login"
      );
    }
  }, [token, router]);

 if (!user || !hydrated) {
  return null;
}

  return (
    
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >
      <DashboardHero/>


       <DashboardStats/>

       

       



      <SavedPlacesGrid
        places={savedPlaces}
       />
        {/* USER INFO */}

        <div
          className="
            bg-white
            rounded-[40px]
            p-10
            shadow-lg
            border
            border-slate-200
          "
        >
          <h2
            className="
              text-3xl
              font-black
              mb-6
            "
          >
            Account Information
          </h2>

          <div className="space-y-4">
            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Name
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.name}
              </p>
            </div>

            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Email
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.email}
              </p>
            </div>

            <div>
              <span
                className="
                  text-slate-500
                "
              >
                Role
              </span>

              <p
                className="
                  text-xl
                  font-semibold
                "
              >
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}