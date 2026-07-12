"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Eye,
  IndianRupee,
  Users,
  XCircle,
} from "lucide-react";

import { useBooking } from "@/hooks/useBooking";

const getStatusClasses = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-green-100 text-green-700";

    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Cancelled":
      return "bg-red-100 text-red-700";

    case "Completed":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const RecentBookings = () => {
  const {
    bookings,
    isLoading,
    cancelBooking,
    isCancellingBooking,
  } = useBooking();

  const [selectedBooking, setSelectedBooking] =
    useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const handleCancelBooking = async () => {
    if (!selectedBooking) return;

    try {
      await cancelBooking.mutateAsync({
        bookingId: selectedBooking,
        reason: "Cancelled by user",
      });

      setIsModalOpen(false);
      setSelectedBooking(null);

      alert("Booking cancelled successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to cancel booking.");
    }
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      {/* Header */}

      <div className="mb-8 flex items-center gap-3">
        <CalendarDays
          size={30}
          className="text-blue-600"
        />

        <div>
          <h2 className="text-3xl font-bold">
            Recent Bookings
          </h2>

          <p className="text-slate-500">
            Your latest hotel reservations
          </p>
        </div>
      </div>

      {/* Loading */}

      {isLoading ? (
        <div className="flex justify-center py-16">
          <p className="text-slate-500">
            Loading your bookings...
          </p>
        </div>
      ) : bookings.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center py-16 text-center">
          <CalendarDays
            size={60}
            className="mb-4 text-slate-300"
          />

          <h3 className="text-2xl font-bold">
            No Recent Bookings
          </h3>

          <p className="mt-2 max-w-md text-slate-500">
           You haven&apos;t booked any hotels yet.
            Start exploring destinations and
            reserve your first stay.
          </p>

          <Link
            href="/hotels"
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Explore Hotels
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="rounded-3xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top */}

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {booking.hotelId.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Booking #
                    {booking.bookingNumber}
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusClasses(
                    booking.bookingStatus
                  )}`}
                >
                  {booking.bookingStatus}
                </span>
              </div>

              {/* Details */}

              <div className="mt-8 grid gap-6 md:grid-cols-4">
                <div>
                  <p className="text-sm text-slate-500">
                    Check In
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatDate(
                      booking.checkIn
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Check Out
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatDate(
                      booking.checkOut
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Guests
                  </p>

                  <p className="mt-2 flex items-center gap-2 font-semibold">
                    <Users size={16} />
                    {booking.guests}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Total Price
                  </p>

                  <p className="mt-2 flex items-center gap-1 font-bold text-blue-600">
                    <IndianRupee size={16} />
                    {booking.totalPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Actions */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/dashboard/bookings/${booking._id}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2 text-sm font-semibold transition hover:bg-slate-100"
                >
                  <Eye size={18} />
                  View Details
                </Link>

                {booking.bookingStatus ===
                  "Confirmed" && (
                 <button
  onClick={() => {
    setSelectedBooking(
      booking._id
    );

    setIsModalOpen(true);
  }}
  className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
>
  <XCircle size={18} />
  Cancel Booking
</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-800">
              Cancel booking?
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              This will cancel the selected reservation.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedBooking(null);
                }}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Keep Booking
              </button>

              <button
                onClick={handleCancelBooking}
                disabled={isCancellingBooking}
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isCancellingBooking
                  ? "Cancelling..."
                  : "Confirm Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
      <h2 className="text-xl font-bold">
        Cancel Booking
      </h2>

      <p className="mt-3 text-slate-500">
        Are you sure you want to cancel
        this booking?
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={() =>
            setIsModalOpen(false)
          }
          className="rounded-xl border px-4 py-2"
        >
          No
        </button>

        <button
          onClick={
            handleCancelBooking
          }
          disabled={
            isCancellingBooking
          }
          className="rounded-xl bg-red-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isCancellingBooking
            ? "Cancelling..."
            : "Yes, Cancel"}
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default RecentBookings;