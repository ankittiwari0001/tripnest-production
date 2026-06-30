"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Heart,
  User,
  Settings,
  CalendarDays,
  Hotel,
  UtensilsCrossed,
  Bot,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Hotels",
    href: "/hotels",
    icon: Hotel,
  },
  {
    title: "Restaurants",
    href: "/restaurants",
    icon: UtensilsCrossed,
  },
  {
    title: "Saved Places",
    href: "/saved",
    icon: Heart,
  },
  {
    title: "My Bookings",
    href: "/dashboard/bookings",
    icon: CalendarDays,
  },
  {
    title: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Navigation
        </p>
        <h2 className="mt-2 text-2xl font-black text-slate-900">TripNest</h2>
      </div>

      <nav className="space-y-2">
        {menuItems.map(({ title, href, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon size={18} />
              <span>{title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}