"use client";

import Link from "next/link";

interface Hotel {
  _id: string;
  name: string;
  image: string;
  price: number;
}

interface Props {
  hotels: Hotel[];
}

export default function HotelSimilarHotels({
  hotels,
}: Props) {
  return (
    <div className="mt-16">

      <h2
        className="
          text-4xl
          font-black
          mb-8
        "
      >
        Similar Hotels
      </h2>

      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >
        {hotels.map((hotel) => (
          <Link
            key={hotel._id}
            href={`/hotels/${hotel._id}`}
          >
            <div
              className="
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                transition-all
              "
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="
                  h-52
                  w-full
                  object-cover
                "
              />

              <div className="p-5">

                <h3
                  className="
                    font-black
                    text-xl
                  "
                >
                  {hotel.name}
                </h3>

                <p
                  className="
                    text-blue-600
                    font-bold
                    mt-3
                  "
                >
                  ₹{hotel.price}
                </p>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}