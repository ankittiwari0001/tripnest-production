"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import BookingModal from "@/components/Booking/BookingModel";

import HotelHero from "@/components/hotels/HotelHero";
import HotelAmenities from "@/components/hotels/HotelAmenities";
import HotelBookingCard from "@/components/hotels/HotelBookingCard";
import HotelReviews from "@/components/hotels/HotelReviews";
import HotelSimilarHotels from "@/components/hotels/HotelSimilarHotels";

interface Hotel {
  _id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  amenities: string[];
}

export default function HotelDetailsPage() {
  const params = useParams();

  const hotelId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [hotel, setHotel] =
    useState<Hotel | null>(null);

  const [similarHotels, setSimilarHotels] =
    useState<Hotel[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [bookingOpen, setBookingOpen] =
    useState(false);

  useEffect(() => {
    async function fetchHotel() {
      try {
        setLoading(true);

        /* HOTEL DETAILS */

        const hotelRes = await fetch(
          `/api/hotels/${hotelId}`
        );

        const hotelData =
          await hotelRes.json();

        if (!hotelData.success) {
          setError(
            hotelData.message ||
              "Hotel not found"
          );

          return;
        }

        setHotel(
          hotelData.hotel
        );

        /* SIMILAR HOTELS */

        const hotelsRes =
          await fetch(
            "/api/hotels"
          );

        const hotelsData =
          await hotelsRes.json();

        if (
          hotelsData.success &&
          Array.isArray(
            hotelsData.hotels
          )
        ) {
          const filteredHotels =
            hotelsData.hotels
              .filter(
                (h: Hotel) =>
                  h._id !==
                  hotelId
              )
              .slice(0, 3);

          setSimilarHotels(
            filteredHotels
          );
        }
      } catch (error) {
        console.error(
          "HOTEL FETCH ERROR:",
          error
        );

        setError(
          "Failed to load hotel"
        );
      } finally {
        setLoading(false);
      }
    }

    if (hotelId) {
      fetchHotel();
    }
  }, [hotelId]);

  /* LOADING */

  if (loading) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-3xl
          font-black
        "
      >
        Loading Hotel...
      </div>
    );
  }

  /* ERROR */

  if (error) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-red-500
          text-2xl
          font-bold
        "
      >
        {error}
      </div>
    );
  }

  if (!hotel) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-2xl
          font-bold
        "
      >
        Hotel not found
      </div>
    );
  }

  return (
    <>
      <main
        className="
          min-h-screen
          bg-slate-50
        "
      >
        {/* HERO */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            pt-8
          "
        >
          <HotelHero
            image={hotel.image}
            name={hotel.name}
            location={
              hotel.location
            }
            rating={
              hotel.rating
            }
            category={
              hotel.category
            }
          />
        </div>

        {/* CONTENT */}

        <section
          className="
            max-w-7xl
            mx-auto
            px-6
            py-12
          "
        >
          <div
            className="
              grid
              lg:grid-cols-3
              gap-10
            "
          >
            {/* LEFT */}

            <div
              className="
                lg:col-span-2
                space-y-8
              "
            >
              {/* ABOUT */}

              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-sm
                "
              >
                <h2
                  className="
                    text-3xl
                    font-black
                    mb-6
                  "
                >
                  About Hotel
                </h2>

                <p
                  className="
                    text-slate-600
                    leading-8
                  "
                >
                  {
                    hotel.description
                  }
                </p>
              </div>

              {/* AMENITIES */}

              <HotelAmenities
                amenities={
                  hotel.amenities
                }
              />

              {/* REVIEWS */}

              <HotelReviews />
            </div>

            {/* RIGHT */}

            <div>
              <HotelBookingCard
                price={
                  hotel.price
                }
                onBook={() =>
                  setBookingOpen(
                    true
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* SIMILAR HOTELS */}

        {similarHotels.length >
          0 && (
          <section
            className="
              max-w-7xl
              mx-auto
              px-6
              pb-20
            "
          >
            <HotelSimilarHotels
              hotels={
                similarHotels
              }
            />
          </section>
        )}
      </main>

      {/* BOOKING MODAL */}

      {bookingOpen && (
        <BookingModal
          hotelId={
            hotel._id
          }
          onClose={() =>
            setBookingOpen(
              false
            )
          }
        />
      )}
    </>
  );
}