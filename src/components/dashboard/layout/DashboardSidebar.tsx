"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Hotel,
  UtensilsCrossed,
  Heart,
  CalendarDays,
  Bot,
  User,
  Settings,
  Map,
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
    title: "Explore Map",
    href: "/map",
    icon: Map,
  },
  {
    title: "Saved Places",
    href: "/saved",
    icon: Heart,
  },
  {
    title: "Bookings",
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

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-black">
          TripNest
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Travel Hub
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}