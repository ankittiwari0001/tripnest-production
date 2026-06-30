"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Star,
  X,
  MapPin,
} from "lucide-react";

import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {
  place: ExtendedPlace;
  onClose: () => void;
}

export default function DrawerHero({
  place,
  onClose,
}: Props) {
  const [imageError, setImageError] =
    useState(false);

  const imageSrc =
    place.image?.trim()
      ? place.image
      : "/fallback-place.jpg";

  return (
    <div className="relative h-[320px] overflow-hidden">
      {/* IMAGE */}

      {!imageError ? (
        <Image
          src={imageSrc}
          alt={
            place.tags?.name ??
            "Place"
          }
          fill
          className="object-cover"
          onError={() =>
            setImageError(true)
          }
          unoptimized
        />
      ) : (
        <div
          className="
            w-full
            h-full
            bg-zinc-200
            flex
            items-center
            justify-center
            text-zinc-500
          "
        >
          Image unavailable
        </div>
      )}

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      {/* CLOSE BUTTON */}

      <button
        type="button"
        onClick={onClose}
        className="
          absolute
          top-5
          right-5
          w-12
          h-12
          rounded-full
          bg-white/20
          backdrop-blur-xl
          border
          border-white/20
          text-white
          flex
          items-center
          justify-center
          hover:scale-110
          transition-all
        "
      >
        <X size={22} />
      </button>

      {/* RATING */}

      <div
        className="
          absolute
          top-5
          left-5
          bg-white/20
          backdrop-blur-xl
          border
          border-white/20
          rounded-full
          px-4
          py-2
          flex
          items-center
          gap-2
          text-white
          font-semibold
        "
      >
        <Star
          size={18}
          className="
            fill-yellow-400
            text-yellow-400
          "
        />

        {place.rating ?? 4.8}
      </div>

      {/* PLACE INFO */}

      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          text-white
        "
      >
        <h2
          className="
            text-3xl
            font-black
            leading-tight
          "
        >
          {place.tags?.name ??
            "Unknown Place"}
        </h2>

        <div
          className="
            flex
            items-center
            gap-2
            mt-3
            text-white/90
          "
        >
          <MapPin size={18} />

          <span className="text-sm">
            Nearby travel destination
          </span>
        </div>
      </div>
    </div>
  );
}