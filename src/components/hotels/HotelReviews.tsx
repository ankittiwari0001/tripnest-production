"use client";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment:
      "Amazing stay. Staff was friendly and rooms were spotless.",
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 5,
    comment:
      "Beautiful location with excellent food and service.",
  },
  {
    id: 3,
    name: "Ankit Singh",
    rating: 4,
    comment:
      "Worth every penny. Would definitely visit again.",
  },
];

export default function HotelReviews() {
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
          mb-8
        "
      >
        Guest Reviews
      </h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="
              border-b
              border-slate-100
              pb-6
            "
          >
            <div className="flex items-center justify-between">

              <h3 className="font-bold">
                {review.name}
              </h3>

              <span>
                {"⭐".repeat(
                  review.rating
                )}
              </span>

            </div>

            <p
              className="
                mt-3
                text-slate-600
              "
            >
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}