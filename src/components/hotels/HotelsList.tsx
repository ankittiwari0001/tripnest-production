"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BookingModal from "@/components/Booking/BookingModel";
import Link from "next/link";

interface Hotel {
  _id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  category: string;
  rating: number;
}

interface HotelsApiResponse {
  success: boolean;
  hotels?: Hotel[];
  message?: string;
}

export default function HotelsList() {

  const [hotels, setHotels] =
    useState<Hotel[]>([]);

  const [selectedHotel, setSelectedHotel] =
    useState<string | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchHotels() {

      try {

        const res =
          await fetch(
            "/api/hotels"
          );

        const data =
          (await res.json()) as HotelsApiResponse;

        if (!res.ok) {
          toast.error(
            data.message ||
              "Failed to fetch hotels"
          );

          setHotels([]);
          return;
        }

        setHotels(
          Array.isArray(data.hotels)
            ? data.hotels
            : []
        );

      } catch (error) {

        console.error(error);

        setHotels([]);

      } finally {

        setLoading(false);

      }
    }

    fetchHotels();

  }, []);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading Hotels...

      </div>
    );
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {hotels.map((hotel) => (

            <Link
              key={hotel._id}
              href={`/hotels/${hotel._id}`}
            >

              <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-lg px-4 py-2 rounded-full">

                    ⭐ {hotel.rating}

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">

                    {hotel.category}

                  </span>

                  <h2 className="text-3xl font-black mt-5 mb-3">

                    {hotel.name}

                  </h2>

                  <p className="text-gray-500 mb-6">

                    📍 {hotel.location}

                  </p>

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-4xl font-black text-blue-600">

                        ₹{hotel.price}

                      </p>

                      <span className="text-gray-400 text-sm">

                        per night

                      </span>

                    </div>

                    <button
                      onClick={(e) => {

                        e.preventDefault();
                        e.stopPropagation();

                        setSelectedHotel(
                          hotel._id
                        );
                      }}
                      className="bg-blue-600 text-white px-5 py-3 rounded-2xl hover:bg-blue-700 transition"
                    >

                      Book

                    </button>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* BOOKING MODAL */}
      {selectedHotel && (

        <BookingModal
          hotelId={selectedHotel}
          onClose={() =>
            setSelectedHotel(null)
          }
        />

      )}
    </>
  );
}