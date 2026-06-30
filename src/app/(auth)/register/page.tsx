"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";

import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleRegister(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      password !==
      confirmPassword
    ) {
      toast.error(
        "Passwords do not match"
      );
      return;
    }

    if (
      password.length < 6
    ) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name,
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
            "Registration failed"
        );

        return;
      }

      toast.success(
        "Account created successfully 🚀"
      );

      router.push(
        "/login"
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
            Create Account 🚀
          </h1>

          <p
            className="
              mt-3
              text-slate-500
            "
          >
            Start your journey
            with TripNest
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleRegister
          }
          className="
            mt-8
            space-y-5
          "
        >
          {/* NAME */}

          <div>
            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Full Name
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
              <User
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                required
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Enter your name"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>

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
          </div>

          {/* CONFIRM PASSWORD */}

          <div>
            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
              "
            >
              Confirm Password
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
                value={
                  confirmPassword
                }
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                placeholder="Confirm password"
                className="
                  w-full
                  outline-none
                  bg-transparent
                "
              />
            </div>
          </div>

          {/* SUBMIT */}

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
              ? "Creating..."
              : "Create Account"}

            {!loading && (
              <ArrowRight
                size={18}
              />
            )}
          </button>
        </form>

        {/* LOGIN LINK */}

        <p
          className="
            mt-8
            text-center
            text-slate-500
          "
        >
          Already have an
          account?{" "}
          <Link
            href="/login"
            className="
              text-blue-600
              font-semibold
              hover:underline
            "
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}