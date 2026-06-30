"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import { toast } from "sonner";

import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();

  const { login } =
    useAuthStore();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        toast.error(
          data.message ||
            "Login failed"
        );

        return;
      }

      login(
        data.user,
        data.token
      );

      toast.success(
        "Login successful 🚀"
      );

      router.push(
        "/dashboard"
      );
    } catch {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-950
        via-slate-900
        to-blue-950
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white/95
          backdrop-blur-xl
          rounded-[32px]
          shadow-2xl
          border
          border-white/20
          p-10
        "
      >
        {/* HEADER */}

        <div className="text-center">
          <h1
            className="
              text-4xl
              font-black
              text-slate-900
            "
          >
            Welcome Back 👋
          </h1>

          <p
            className="
              mt-3
              text-slate-500
            "
          >
            Continue your journey
            with TripNest
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="
            mt-8
            space-y-5
          "
        >
          {/* EMAIL */}

          <div>
            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Email
            </label>

            <div
              className="
                flex
                items-center
                gap-3
                border
                border-slate-300
                rounded-2xl
                px-4
                py-4
                focus-within:border-blue-500
              "
            >
              <Mail
                size={18}
                className="text-slate-400"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Enter email"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>

          {/* PASSWORD */}

          <div>
            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Password
            </label>

            <div
              className="
                flex
                items-center
                gap-3
                border
                border-slate-300
                rounded-2xl
                px-4
                py-4
                focus-within:border-blue-500
              "
            >
              <Lock
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Enter password"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>

            <div
              className="
                flex
                justify-end
                mt-3
              "
            >
              <button
                type="button"
                className="
                  text-sm
                  text-blue-600
                  hover:underline
                "
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              text-white
              py-4
              rounded-2xl
              font-semibold
              hover:bg-blue-700
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {loading
              ? "Logging in..."
              : "Login"}

            {!loading && (
              <ArrowRight
                size={18}
              />
            )}
          </button>
        </form>

        {/* DIVIDER */}

        <div
          className="
            flex
            items-center
            gap-4
            my-8
          "
        >
          <div className="h-px bg-slate-200 flex-1" />

          <span
            className="
              text-sm
              text-slate-400
            "
          >
            OR
          </span>

          <div className="h-px bg-slate-200 flex-1" />
        </div>

        {/* GOOGLE */}

        <button
          className="
            w-full
            border
            border-slate-300
            py-4
            rounded-2xl
            font-semibold
            hover:bg-slate-50
            transition-all
          "
        >
          Continue with Google
        </button>

        {/* REGISTER */}

        <p
          className="
            mt-8
            text-center
            text-slate-500
          "
        >
          Don&apos;t have an
          account?{" "}
   <Link
  href="/register"
  className="
    text-blue-600
    font-semibold
    hover:underline
  "
>
  Create Account
</Link>
        </p>

      </div>
    </main>
  );
}