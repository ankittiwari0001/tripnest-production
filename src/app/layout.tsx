import "./globals.css";

import "leaflet/dist/leaflet.css";
import Navbar from "@/components/layout/Navbar";
import {
  Toaster,
} from "sonner";
import AuthProvider
from "@/components/auth/AuthProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

     <body className="bg-gray-50">

  <AuthProvider>

    <Navbar />

    {children}

    <Toaster
      position="top-right"
      richColors
      expand
      closeButton
      toastOptions={{
        style: {
          zIndex: 999999,
          marginTop: "90px",
        },
      }}
    />

  </AuthProvider>

</body>

    </html>
  );
}