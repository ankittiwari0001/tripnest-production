"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import type {
  ExtendedPlace,
} from "@/types/place";

import DrawerHero from "./drawer/DrawerHero";
import DrawerTags from "./drawer/DrawerTags";
import DrawerSummary from "./drawer/DrawerSummary";
import DrawerActions from "./drawer/DrawerActions";
import DrawerFooter from "./drawer/DrawerFooter";

interface Props {

  place:
    ExtendedPlace | null;

  open: boolean;

  onClose: () => void;

  onToggleSave: (
    place: ExtendedPlace
  ) => void;

  isSaved: boolean;
}

export default function PlaceDrawer({

  place,

  open,

  onClose,

  onToggleSave,

  isSaved,
}: Props) {

  if (!place) {
    return null;
  }

  return (

    <AnimatePresence>

      {open && (

        <>

          {/* BACKDROP */}

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            onClick={onClose}

            className="
              fixed
              inset-0
              bg-black/40
              backdrop-blur-sm
              z-[9998]
            "
          />

          {/* DRAWER */}

          <motion.div

            initial={{
              x: 600,
              opacity: 0,
            }}

            animate={{
              x: 0,
              opacity: 1,
            }}

            exit={{
              x: 600,
              opacity: 0,
            }}

            transition={{
              duration: 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}

            className="
              fixed
              right-0
              top-0
              h-[100dvh]
              w-full
              sm:w-[520px]
              bg-white
              z-[9999]
              shadow-2xl
              overflow-y-auto
            "
          >

            {/* HERO */}

            <DrawerHero

              place={place}

              onClose={onClose}
            />

            {/* CONTENT */}

            <motion.div

              initial={{
                y: 20,
                opacity: 0,
              }}

              animate={{
                y: 0,
                opacity: 1,
              }}

              transition={{
                delay: 0.15,
                duration: 0.3,
              }}

              className="
                p-6
                sm:p-8
              "
            >

              <DrawerTags
                vibe={place.vibe}
              />

              <DrawerSummary
                summary={
                  place.summary
                }
              />

              <DrawerActions

                place={place}

                isSaved={
                  isSaved
                }

                onToggleSave={
                  onToggleSave
                }
              />

              <DrawerFooter />

            </motion.div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
}