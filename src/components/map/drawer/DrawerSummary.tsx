"use client";

interface Props {

  summary?: string;
}

export default function DrawerSummary({

  summary,
}: Props) {

  return (

    <div
      className="
        bg-zinc-100
        rounded-[28px]
        p-6
        mb-8
      "
    >

      {/* TITLE */}

      <h3
        className="
          text-xl
          font-black
          mb-3
        "
      >

        AI Travel Summary

      </h3>

      {/* CONTENT */}

      <p
        className="
          text-zinc-600
          leading-relaxed
        "
      >

        {summary ||

          "A beautiful destination perfect for unforgettable travel experiences, local culture, sightseeing, food exploration, and memorable moments."}

      </p>

    </div>
  );
}