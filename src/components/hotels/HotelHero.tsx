"use client";

interface Props {
  image: string;
  name: string;
  location: string;
  rating: number;
  category: string;
}

export default function HotelHero({
  image,
  name,
  location,
  rating,
  category,
}: Props) {
  return (
    <section className="relative h-[650px] overflow-hidden rounded-[40px]">

      <img
        src={image}
        alt={name}
        className="
          w-full
          h-full
          object-cover
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/40
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-12
          left-12
          text-white
        "
      >
        <span
          className="
            bg-blue-600
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
          "
        >
          {category}
        </span>

        <h1
          className="
            text-6xl
            font-black
            mt-5
          "
        >
          {name}
        </h1>

        <p
          className="
            text-xl
            mt-3
            text-white/90
          "
        >
          📍 {location}
        </p>

        <div
          className="
            mt-4
            flex
            gap-4
            items-center
          "
        >
          <div
            className="
              bg-white/20
              backdrop-blur-md
              px-4
              py-2
              rounded-full
            "
          >
            ⭐ {rating}
          </div>

          <button
            className="
              bg-white
              text-black
              px-5
              py-2
              rounded-full
              font-semibold
            "
          >
            ❤️ Save
          </button>
        </div>
      </div>
    </section>
  );
}