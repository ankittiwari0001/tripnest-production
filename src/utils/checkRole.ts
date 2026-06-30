import { JwtPayload } from "@/lib/auth";

export function isAdmin(
  user: JwtPayload
) {

  return (
    user.role === "ADMIN" ||
    user.role ===
      "SUPER_ADMIN"
  );
}