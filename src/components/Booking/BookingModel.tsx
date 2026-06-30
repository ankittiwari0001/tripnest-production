"use client";

import {
  useState,
} from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

interface Props {

  hotelId: string;

  onClose: () => void;
}

export default function BookingModal({
  hotelId,
  onClose,
}: Props) {

  const [
    checkIn,
    setCheckIn,
  ] = useState("");

  const [
    checkOut,
    setCheckOut,
  ] = useState("");

  const [guests, setGuests] =
    useState(1);

  const [loading, setLoading] =
    useState(false);
  const router = useRouter();

  async function handleBooking() {

    try {

      setLoading(true);

      if (
        !checkIn ||
        !checkOut
      ) {
        toast.error(
          "Select dates first"
        );

        return;
      }

      const token =
        localStorage.getItem(
          "token"
        );

      if (!token) {

        toast.error(
          "Please login first"
        );

        return;
      }

      const res =
        await fetch(
          "/api/bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({
              hotelId,
              checkIn,
              checkOut,
              guests,
            }),
          }
        );

      const data =
        await res.json();

      if (!res.ok) {

        toast.error(
          data.message
        );

        return;
      }

      toast.success(
        "Booking confirmed 🚀"
      );

      onClose();

      router.push("/dashboard/bookings");

    } catch (error) {

      toast.error(
        "Booking failed"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-6">

      <div className="bg-white w-full max-w-lg rounded-[32px] p-10">

        <h2 className="text-4xl font-black mb-8">

          Book Hotel 🏨

        </h2>

        <div className="space-y-6">

          <input
            type="date"
            value={checkIn}
            onChange={(e) =>
              setCheckIn(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <input
            type="date"
            value={checkOut}
            onChange={(e) =>
              setCheckOut(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <input
            type="number"
            value={guests}
            min={1}
            onChange={(e) =>
              setGuests(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <div className="flex gap-4">

            <button
              onClick={
                handleBooking
              }
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-semibold"
            >

              {loading
                ? "Booking..."
                : "Confirm"}

            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 py-4 rounded-2xl"
            >

              Cancel

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}