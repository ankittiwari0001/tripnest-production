"use client";

import Link from "next/link";
import {
  MapPin,
  Mail,
} from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.33.6.11.82-.26.82-.58 0-.29-.01-1.04-.016-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.083-.734.083-.734 1.205.085 1.84 1.24 1.84 1.24 1.07 1.83 2.807 1.3 3.492.995.108-.774.418-1.3.76-1.6-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.116-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.476 5.92.43.37.815 1.102.815 2.222 0 1.606-.014 2.9-.014 3.293 0 .32.216.694.825.576C20.565 22.246 24 17.78 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.79v2.05h.07c.67-1.27 2.31-2.6 4.75-2.6 5.08 0 6.02 3.34 6.02 7.68V24h-5V16.5c0-1.79-.03-4.09-2.49-4.09-2.49 0-2.87 1.94-2.87 3.96V24h-5V8.98z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="
        bg-black
        text-white
        border-t
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="
            grid
            md:grid-cols-4
            gap-12
          "
        >
          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                "
              >
                <MapPin size={24} />
              </div>

              <h2 className="text-3xl font-black">
                TripNest
              </h2>
            </div>

            <p
              className="
                text-gray-400
                max-w-md
                leading-relaxed
              "
            >
              AI-powered tourism platform helping travelers discover
              hotels, restaurants, attractions and hidden gems
              around the world.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3
              className="
                font-bold
                text-lg
                mb-5
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/map"
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >
                  Explore Map
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="
                    text-gray-400
                    hover:text-white
                    transition
                  "
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                font-bold
                text-lg
                mb-5
              "
            >
              Connect
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>contact@tripnest.ai</span>
              </div>

              <a
                href="https://github.com/ankittiwari0001"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  hover:text-white
                  transition
                "
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  hover:text-white
                  transition
                "
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-gray-500 text-sm">
            © 2026 TripNest. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-6
              text-sm
              text-gray-500
            "
          >
            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}