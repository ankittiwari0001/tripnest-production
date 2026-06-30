"use client";

interface Props {
  price: number;
  onBook: () => void;
}

export default function HotelBookingCard({
  price,
  onBook,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-[32px]
        p-8
        shadow-xl
        border
        border-slate-200
        sticky
        top-24
      "
    >
      <div className="mb-6">

        <h2
          className="
            text-5xl
            font-black
            text-blue-600
          "
        >
          ₹{price}
        </h2>

        <p
          className="
            text-slate-500
          "
        >
          per night
        </p>

      </div>

      <button
        onClick={onBook}
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-2xl
          font-bold
          text-lg
          transition-all
        "
      >
        Book Now 🚀
      </button>

      <p
        className="
          text-center
          text-sm
          text-slate-500
          mt-4
        "
      >
        No payment required now
      </p>
    </div>
  );
}