"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBooking } from "@/hooks/useBooking";
import {
  ArrowLeft,
  CalendarDays,
  Users,
  IndianRupee,
  MapPin,
  FileText,
  Phone,
  Ban
} from "lucide-react";

import { useBookingById } from "@/hooks/useBookingById";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

 const getTripCountdown = (checkIn: string) => {
  const today = new Date();

  const tripDate = new Date(checkIn);

  const diffTime =
    tripDate.getTime() - today.getTime();

  const days = Math.ceil(
    diffTime / (1000 * 60 * 60 * 24)
  );

  if (days <= 0) {
    return "Trip Started";
  }

  if (days === 1) {
    return "Trip starts tomorrow";
  }

  return `Trip starts in ${days} days`;
}; 

export default function BookingDetailsPage({
  params,
}: Props) {
  const { id } = use(params);

  const {
    data: booking,
    isLoading,
    error,
  } = useBookingById(id);

  const {
  cancelBooking,
} = useBooking();

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        Loading booking...
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="flex justify-center py-20">
        Booking not found.
      </div>
    );
  }

  const handleCancelBooking =
    async () => {
      if (booking.bookingStatus === "Cancelled") {
        alert("This booking is already cancelled.");
        return;
      }

      const confirmed =
        window.confirm(
          "Are you sure you want to cancel this booking?"
        );

      if (!confirmed) return;

      try {
        await cancelBooking.mutateAsync({
          bookingId: booking._id,
          reason: "Cancelled by user",
        });

        alert("Booking cancelled successfully.");
      } catch (error) {
        console.error(error);

        const message =
          error instanceof Error && error.message
            ? error.message
            : "Failed to cancel booking.";

        if (message.includes("already cancelled")) {
          alert("This booking is already cancelled.");
        } else {
          alert(message);
        }
      }
    };

  const canCancelBooking =
    booking.bookingStatus !== "Cancelled";

  const timeline = {
    booked: true,
    confirmed: booking.bookingStatus === "Confirmed",
    cancelled: booking.bookingStatus === "Cancelled",
    completed: false,
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">

      {/* Back */}

      <Link
        href="/dashboard/bookings"
        className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Bookings
      </Link>

      {/* Card */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <div className="overflow-hidden rounded-3xl">

  <div className="relative h-80 w-full">

    <Image
      src={booking.hotelId.image}
      alt={booking.hotelId.name}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute bottom-0 left-0 w-full p-8 text-white">

      <div className="mb-3 flex flex-wrap gap-3">

        <span className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
          ⭐ {booking.hotelId.rating}
        </span>

        <span className="rounded-full bg-blue-600 px-4 py-1 text-sm">
          {booking.hotelId.category}
        </span>

      </div>

      <h1 className="text-4xl font-bold">
        {booking.hotelId.name}
      </h1>

      <div className="mt-3 flex items-center gap-2">

        <MapPin size={18} />

        <span>
          {booking.hotelId.location}
        </span>

      </div>

      <p className="mt-4 max-w-2xl text-white/90">
        {booking.hotelId.description}
      </p>

    </div>

  </div>

  <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-6">

    <div>

      <p className="text-sm text-slate-500">
        Booking #
      </p>

      <p className="font-semibold">
        {booking.bookingNumber}
      </p>

    </div>

    <div>

      <p className="text-sm text-slate-500">
        Countdown
      </p>

      <p className="font-bold text-blue-600">
        {getTripCountdown(
          booking.checkIn
        )}
      </p>

    </div>

    <div className="flex gap-3">

      <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
        {booking.bookingStatus}
      </span>

      <span className="rounded-full bg-yellow-100 px-4 py-2 font-semibold text-yellow-700">
        {booking.paymentStatus}
      </span>

    </div>

  </div>

</div>

        {/* Details */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <CalendarDays className="text-blue-600" />
            </div>

            <p className="text-sm text-slate-500">Check In</p>

            <p className="mt-2 text-lg font-bold">
              {formatDate(booking.checkIn)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <CalendarDays className="text-blue-600" />
            </div>

            <p className="text-sm text-slate-500">Check Out</p>

            <p className="mt-2 text-lg font-bold">
              {formatDate(booking.checkOut)}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <Users className="text-green-600" />
            </div>

            <p className="text-sm text-slate-500">Guests</p>

            <p className="mt-2 text-lg font-bold">
              {booking.guests}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
              <IndianRupee className="text-yellow-700" />
            </div>

            <p className="text-sm text-slate-500">Total Price</p>

            <p className="mt-2 text-lg font-bold text-blue-600">
              ₹{booking.totalPrice.toLocaleString()}
            </p>
          </div>
        </div>

     <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
     <div className="mb-6">
         <h2 className="text-2xl font-bold">
             Trip Progress
         </h2>

       <p className="text-slate-500">
          Track your booking journey
        </p>
     </div>

    <div className="grid gap-8 md:grid-cols-4">
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute left-1/2 top-7 hidden h-1 w-full bg-slate-200 md:block" />
        <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${timeline.booked ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
          <span className="text-2xl">✓</span>
        </div>

        <h3 className="mt-4 font-semibold">Booked</h3>

        <p className="mt-1 text-sm text-slate-500">
          {formatDate(booking.createdAt)}
        </p>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="absolute left-1/2 top-7 hidden h-1 w-full bg-slate-200 md:block" />
        <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${timeline.confirmed ? "bg-green-100 text-green-700" : timeline.cancelled ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500"}`}>
          <span className="text-2xl">✓</span>
        </div>

        <h3 className="mt-4 font-semibold">Confirmed</h3>

        <p className="mt-1 text-sm text-slate-500">Booking confirmed</p>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="absolute left-1/2 top-7 hidden h-1 w-full bg-slate-200 md:block" />
        <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${timeline.confirmed && !timeline.cancelled ? "bg-blue-100 text-blue-600" : timeline.cancelled ? "bg-red-100 text-red-600" : "bg-slate-100 text-slate-500"}`}>
          <span className="text-2xl">⏳</span>
        </div>

        <h3 className="mt-4 font-semibold">
          {booking.bookingStatus === "Cancelled"
            ? "Cancelled"
            : "Upcoming Stay"}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {formatDate(booking.checkIn)}
        </p>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${timeline.completed ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-500"}`}>
          <span className="text-2xl">🏁</span>
        </div>

        <h3 className="mt-4 font-semibold">Completed</h3>

        <p className="mt-1 text-sm text-slate-500">After checkout</p>
      </div>
    </div>
     </section>


    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

    <div className="mb-8">
        <h2 className="text-2xl font-bold">
         Hotel Highlights
        </h2>

        <p className="text-slate-500">
         Premium facilities available during your stay.
       </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {booking.hotelId.amenities.map((item) => (
    <div
          key={item}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
        >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
          ✓
    </div>

        <span className="font-medium">
          {item}
        </span>
    </div>
    ))}

    </div>

    </section>
  
    <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <div className="mb-8">
    <h2 className="text-2xl font-bold">
      Quick Actions
    </h2>

    <p className="text-slate-500">
      Manage your booking quickly.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

    {/* Open Maps */}

    <button
  onClick={() =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${booking.hotelId.name}, ${booking.hotelId.location}`
)}`,
      "_blank"
    )
  }
  className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50"
>
  <MapPin
    size={34}
    className="mx-auto text-blue-600 transition group-hover:scale-110"
  />

  <h3 className="mt-4 text-lg font-semibold">
    Open Maps
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    View hotel location
  </p>
    </button>

    {/* Invoice */}

    <button
      onClick={() =>
        alert("Invoice download will be available soon.")
      }
      className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-green-500 hover:bg-green-50"
    >
      <FileText
        size={34}
        className="mx-auto text-green-600 transition group-hover:scale-110"
      />

      <h3 className="mt-4 text-lg font-semibold">
        Download Invoice
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Get booking invoice
      </p>
    </button>

    {/* Contact */}

    <button
      onClick={() =>
        alert("Hotel contact information will be available soon.")
      }
      className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-50"
    >
      <Phone
        size={34}
        className="mx-auto text-purple-600 transition group-hover:scale-110"
      />

      <h3 className="mt-4 text-lg font-semibold">
        Contact Hotel
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Need assistance?
      </p>
    </button>

    {/* Cancel */}

   <button
  onClick={handleCancelBooking}
  disabled={
    cancelBooking.isPending || !canCancelBooking
  }
  className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-red-500 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
>
  <Ban
    size={34}
    className="mx-auto text-red-600"
  />

  <h3 className="mt-4 text-lg font-semibold text-red-600">
    {cancelBooking.isPending
      ? "Cancelling..."
      : canCancelBooking
        ? "Cancel Booking"
        : "Cancelled"}
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    {canCancelBooking
      ? "Cancel this reservation"
      : "This booking can no longer be cancelled"}
  </p>
   </button>

  </div>

    </section>




      </div>

    </main>
  );
}