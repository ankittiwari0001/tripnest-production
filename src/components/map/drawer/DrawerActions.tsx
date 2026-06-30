"use client";

import {
  Heart,
  Navigation,
  Share2,
} from "lucide-react";

import { toast } from "sonner";

import type {
  ExtendedPlace,
} from "@/types/place";

interface Props {

  place: ExtendedPlace;

  isSaved: boolean;

  onToggleSave: (
    place: ExtendedPlace
  ) => void;
}

export default function DrawerActions({

  place,

  isSaved,

  onToggleSave,
}: Props) {

  async function handleShare() {

    try {

      if (
        navigator.share
      ) {

        await navigator.share({

          title:
            place.tags?.name ||

            "Touriest Place",

          text:
            place.summary ||

            "Check out this place",

          url:
            window.location.href,
        });

        return;
      }

      await navigator.clipboard.writeText(

        window.location.href
      );

      toast.success(
        "Link copied to clipboard"
      );

    } catch (error) {

      console.error(
        "[Share Error]",
        error
      );

      toast.error(
        "Unable to share place"
      );
    }
  }

  function handleDirections() {

    try {

      const url =

        `https://www.google.com/maps?q=${place.lat},${place.lon}`;

      window.open(

        url,

        "_blank",

        "noopener,noreferrer"
      );

    } catch (error) {

      console.error(
        "[Directions Error]",
        error
      );

      toast.error(
        "Unable to open directions"
      );
    }
  }

  return (

    <div className="grid grid-cols-3 gap-4 mb-8">

      {/* SAVE */}

      <button

        onClick={() =>
          onToggleSave(
            place
          )
        }

        className={`
          rounded-[24px]
          py-4
          flex
          flex-col
          items-center
          justify-center
          gap-2
          font-semibold
          transition-all
          duration-300
          hover:scale-105

          ${
            isSaved

              ? "bg-red-500 text-white"

              : "bg-zinc-100 text-zinc-700"
          }
        `}
      >

        <Heart

          size={22}

          className={
            isSaved
              ? "fill-white"
              : ""
          }
        />

        <span className="text-sm">

          {isSaved
            ? "Saved"
            : "Save"}

        </span>

      </button>

      {/* DIRECTIONS */}

      <button

        onClick={
          handleDirections
        }

        className="
          rounded-[24px]
          py-4
          flex
          flex-col
          items-center
          justify-center
          gap-2
          font-semibold
          bg-zinc-100
          text-zinc-700
          hover:scale-105
          transition-all
        "
      >

        <Navigation
          size={22}
        />

        <span className="text-sm">

          Directions

        </span>

      </button>

      {/* SHARE */}

      <button

        onClick={
          handleShare
        }

        className="
          rounded-[24px]
          py-4
          flex
          flex-col
          items-center
          justify-center
          gap-2
          font-semibold
          bg-zinc-100
          text-zinc-700
          hover:scale-105
          transition-all
        "
      >

        <Share2
          size={22}
        />

        <span className="text-sm">

          Share

        </span>

      </button>

    </div>
  );
}