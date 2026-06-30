import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET!;

export interface JwtPayload {

  id: string;

  role: string;
}

export function generateToken(
  id: string,
  role: string
) {

  return jwt.sign(
    {
      id,
      role,
    },

    JWT_SECRET,

    {
      expiresIn: "7d",
    }
  );
}

export function verifyToken(
  token: string
): JwtPayload | null {

  try {

    return jwt.verify(
      token,
      JWT_SECRET
    ) as JwtPayload;

  } catch {

    return null;

  }
}