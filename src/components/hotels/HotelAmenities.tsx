"use client";

interface Props {
  amenities: string[];
}

export default function HotelAmenities({
  amenities,
}: Props) {
  return (
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
        Amenities
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          gap-4
        "
      >
        {amenities.map(
          (
            item,
            index
          ) => (
            <div
              key={index}
              className="
                bg-slate-100
                rounded-2xl
                p-5
                font-medium
                hover:bg-blue-50
                transition-all
              "
            >
              ✨ {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}