"use client";

import {
  useEffect,
  useState,
} from "react";

interface Booking {

  _id: string;

  totalPrice: number;

  bookingStatus: string;

  hotelId: {
    name: string;

    image: string;

    location: string;
  };
}

export default function BookingsPage() {

  const [
    bookings,
    setBookings,
  ] = useState<
    Booking[]
  >([]);

useEffect(() => {
  async function fetchBookings() {

    const token =
      localStorage.getItem("token");

    console.log(
      "TOKEN:",
      token
    );

    const res =
      await fetch(
        "/api/bookings",
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    console.log(
      "STATUS:",
      res.status
    );

    const data =
      await res.json();

    console.log(
      "BOOKINGS RESPONSE:",
      data
    );

    setBookings(
      data.bookings || []
    );
  }

  fetchBookings();
}, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-black mb-12">

        My Bookings 📅

      </h1>

      <div className="space-y-8">

        {bookings.map(
          (booking) => (

            <div
              key={booking._id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm flex flex-col md:flex-row"
            >

              <img
                src={
                  booking.hotelId
                    .image
                }
                alt={
                  booking.hotelId
                    .name
                }
                className="h-72 md:w-80 object-cover"
              />

              <div className="p-8 flex-1">

                <h2 className="text-4xl font-black mb-4">

                  {
                    booking.hotelId
                      .name
                  }

                </h2>

                <p className="text-gray-500 mb-5">

                  📍{" "}
                  {
                    booking.hotelId
                      .location
                  }

                </p>

                <div className="flex flex-wrap gap-4">

                  <span className="bg-blue-100 text-blue-600 px-5 py-3 rounded-full font-semibold">

                    ₹
                    {
                      booking.totalPrice
                    }

                  </span>

                  <span className="bg-green-100 text-green-600 px-5 py-3 rounded-full font-semibold">

                    {
                      booking.bookingStatus
                    }

                  </span>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </main>
  );
}