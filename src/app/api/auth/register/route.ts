import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";

import User from "@/models/User";

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const {
      name,
      email,
      password,
    } = await req.json();

    if (
      !name ||
      !email ||
      !password
    ) {
      return NextResponse.json(
        {
          message:
            "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await User.findOne({
        email: email.toLowerCase(),
      });

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "User already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    await User.create({
      name,
      email:
        email.toLowerCase(),
      password:
        hashedPassword,
      role: "USER",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Account created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "REGISTER ERROR:",
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