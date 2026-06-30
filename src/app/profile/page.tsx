"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { useAuthStore } from "@/store/authStore";

import {
  User,
  Mail,
  Shield,
} from "lucide-react";

export default function ProfilePage() {
  const { user } =
    useAuthStore();

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
              My Profile 👤
            </h1>

            <p
              className="
                mt-3
                text-slate-500
              "
            >
              Manage your account
              information and personal
              details.
            </p>
          </div>

          {/* PROFILE CARD */}

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
            {/* AVATAR */}

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                mb-8
              "
            >
              <User
                size={40}
                className="text-blue-600"
              />
            </div>

            <div className="space-y-8">
              {/* NAME */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <User
                  className="
                    text-slate-400
                    mt-1
                  "
                />

                <div>
                  <p
                    className="
                      text-slate-500
                    "
                  >
                    Full Name
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {user?.name ||
                      "Guest User"}
                  </h3>
                </div>
              </div>

              {/* EMAIL */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <Mail
                  className="
                    text-slate-400
                    mt-1
                  "
                />

                <div>
                  <p
                    className="
                      text-slate-500
                    "
                  >
                    Email Address
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {user?.email ||
                      "Not Available"}
                  </h3>
                </div>
              </div>

              {/* ROLE */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <Shield
                  className="
                    text-slate-400
                    mt-1
                  "
                />

                <div>
                  <p
                    className="
                      text-slate-500
                    "
                  >
                    Account Role
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {user?.role ||
                      "Guest"}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* FUTURE SECTION */}

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
              Edit Profile,
              Change Password,
              Avatar Upload and
              Social Login Settings.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}