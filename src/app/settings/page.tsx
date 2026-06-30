"use client";

import Sidebar from "@/components/dashboard/Sidebar";

import {
  Bell,
  Globe,
  MapPin,
  Shield,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-50
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          gap-8
        "
      >
        {/* SIDEBAR */}

        <Sidebar />

        {/* CONTENT */}

        <div
          className="
            flex-1
            space-y-8
          "
        >
          {/* HEADER */}

          <div
            className="
              bg-white
              rounded-[40px]
              p-10
              border
              border-slate-200
              shadow-lg
            "
          >
            <h1
              className="
                text-4xl
                font-black
              "
            >
              Settings ⚙️
            </h1>

            <p
              className="
                mt-3
                text-slate-500
              "
            >
              Customize your TripNest
              experience.
            </p>
          </div>

          {/* SETTINGS CARDS */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >
            {/* Notifications */}

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                border
                border-slate-200
                shadow-lg
              "
            >
              <Bell
                className="
                  text-blue-600
                  mb-4
                "
                size={30}
              />

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Notifications
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                "
              >
                Manage travel alerts,
                updates and reminders.
              </p>
            </div>

            {/* Language */}

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                border
                border-slate-200
                shadow-lg
              "
            >
              <Globe
                className="
                  text-green-600
                  mb-4
                "
                size={30}
              />

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Language
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                "
              >
                Choose your preferred
                application language.
              </p>
            </div>

            {/* Location */}

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                border
                border-slate-200
                shadow-lg
              "
            >
              <MapPin
                className="
                  text-red-500
                  mb-4
                "
                size={30}
              />

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Location Access
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                "
              >
                Control GPS and
                location permissions.
              </p>
            </div>

            {/* Security */}

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                border
                border-slate-200
                shadow-lg
              "
            >
              <Shield
                className="
                  text-purple-600
                  mb-4
                "
                size={30}
              />

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Security
              </h3>

              <p
                className="
                  text-slate-500
                  mt-2
                "
              >
                Password, sessions
                and account protection.
              </p>
            </div>
          </div>

          {/* FUTURE */}

          <div
            className="
              bg-blue-50
              border
              border-blue-100
              rounded-[32px]
              p-8
            "
          >
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              Coming Soon 🚀
            </h3>

            <p
              className="
                text-slate-600
                mt-3
              "
            >
              Dark Mode, Notification
              Preferences, Language
              Selection and Advanced
              Account Security.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}