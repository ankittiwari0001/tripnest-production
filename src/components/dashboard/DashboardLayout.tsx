// src/components/dashboard/DashboardLayout.tsx

"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
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
        <Sidebar />

        <div
          className="
            flex-1
            space-y-8
          "
        >
          {children}
        </div>
      </div>
    </main>
  );
}