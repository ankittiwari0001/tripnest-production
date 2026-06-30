import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/db";

import User from "@/models/User";

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const {
      email,
      password,
    } = await req.json();

    const user =
      await User.findOne({
        email:
          email.toLowerCase(),
      });

    if (!user) {
      return NextResponse.json(
        {
          message:
            "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (
      !isPasswordValid
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token =
      jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET!,
        {
          expiresIn: "7d",
        }
      );

    return NextResponse.json(
      {
        success: true,

        token,

        user: {
          id: user._id,

          name: user.name,

          email: user.email,

          role: user.role,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "LOGIN ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}