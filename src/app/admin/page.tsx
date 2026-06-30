"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/authStore";

export default function AdminPage() {

  const router =
    useRouter();

  const { user } =
    useAuthStore();

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (!token) {

      router.push("/login");

      return;
    }

    if (
      user?.role !==
        "ADMIN" &&
      user?.role !==
        "SUPER_ADMIN"
    ) {

      router.push("/");
    }

  }, [
    router,
    user,
  ]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-10">

        Admin Dashboard ⚡

      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-[32px] shadow-sm">

          <h2 className="text-2xl font-bold mb-3">
            Hotels
          </h2>

          <p className="text-gray-500">
            Manage hotels
          </p>

        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-sm">

          <h2 className="text-2xl font-bold mb-3">
            Restaurants
          </h2>

          <p className="text-gray-500">
            Manage restaurants
          </p>

        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-sm">

          <h2 className="text-2xl font-bold mb-3">
            Users
          </h2>

          <p className="text-gray-500">
            Manage users
          </p>

        </div>

      </div>

    </main>
  );
}