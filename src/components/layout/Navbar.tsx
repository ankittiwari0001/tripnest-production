"use client";

import Link from "next/link";

import { useEffect } from "react";

import { useAuthStore } from "@/store/authStore";

export default function Navbar() {

  const {
    user,
    logout,
    login,
  } = useAuthStore();

  /* LOAD USER FROM LOCALSTORAGE */

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    const savedUser =
      localStorage.getItem(
        "user"
      );

    if (
      token &&
      savedUser
    ) {

      login(
        JSON.parse(savedUser),
        token
      );
    }

  }, [login]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-black text-blue-600"
        >

          TRIPNEST

        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link
            href="/hotels"
            className="hover:text-blue-600 transition"
          >
            Hotels
          </Link>

          <Link
            href="/restaurants"
            className="hover:text-blue-600 transition"
          >
            Restaurants
          </Link>

          <Link
            href="/explore"
            className="hover:text-blue-600 transition"
          >
            Explore
          </Link>

          <Link
            href="/map"
            className="hover:text-blue-600 transition"
          >
            Map
          </Link>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {!user ? (

            <>
              <Link
                href="/login"
                className="px-5 py-2 rounded-xl hover:bg-gray-100 transition"
              >

                Login

              </Link>

              <Link
                href="/register"
                className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition"
              >

                Register

              </Link>
            </>

          ) : (

            <div className="flex items-center gap-4">

              {/* USER NAME */}
              <div className="hidden md:block text-right">

                <p className="font-semibold text-gray-900">
                  {user.name}
                </p>

                <p className="text-sm text-gray-500">
                  {user.role}
                </p>

              </div>

              {/* ADMIN LINK */}
              {(user.role === "ADMIN" ||
                user.role ===
                  "SUPER_ADMIN") && (

                <Link
                  href="/admin"
                  className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
                >

                  Admin

                </Link>
              )}

              {/* DASHBOARD */}
              <Link
                href="/dashboard"
                className="bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
              >

                Dashboard

              </Link>

              {/* LOGOUT */}
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
              >

                Logout

              </button>

            </div>

          )}

        </div>

      </nav>

    </header>
  );
}