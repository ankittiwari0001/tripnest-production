"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import { toast } from "sonner";

import type {
  ExtendedPlace,
} from "@/types/place";

import { useAuthStore } from "@/store/authStore";

export default function useSavedPlaces() {

  const {
    user,
    isInitialized,
  } = useAuthStore();

  const userId = user?.id;

  const [
    hydrated,
    setHydrated,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    savedPlaces,
    setSavedPlaces,
  ] = useState<
    ExtendedPlace[]
  >([]);

  /* LOAD SAVED PLACES */

  useEffect(() => {

    async function fetchSavedPlaces() {

      if (
        !userId ||
        !isInitialized
      ) {
        setHydrated(true);
        return;
      }

      try {

        setLoading(true);

        const response =
          await fetch(
            `/api/saved?userId=${userId}`
          );

        const data =
          await response.json();

        if (!response.ok) {
          const message =
            data?.message ||
            "Failed to load saved places";

          toast.error(message);
          setSavedPlaces([]);
          return;
        }

        setSavedPlaces(
          Array.isArray(data.savedPlaces)
            ? data.savedPlaces
            : []
        );

      } catch (error) {

        console.error(
          "[Saved Places Fetch Error]",
          error
        );

        toast.error(
          "Failed to load saved places"
        );

      } finally {

        setLoading(false);

        setHydrated(true);
      }
    }

    fetchSavedPlaces();

  }, [
    userId,
    isInitialized,
  ]);

  /* CHECK SAVED */

  const isSaved =
    useCallback(

      (id: number) => {

        return savedPlaces.some(
          (place) =>
            place.id === id
        );
      },

      [savedPlaces]
    );

  /* TOGGLE SAVE */

  const toggleSavePlace =
    useCallback(

      async (
        place: ExtendedPlace
      ) => {

        if (!userId) {

          toast.error(
            "Please login first"
          );

          return;
        }

        const exists =
          savedPlaces.some((p) => p.id === place.id);

        try {

          if (exists) {

            const response =
              await fetch(
                "/api/saved",
                {
                  method: "DELETE",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify({
                    userId,

                    placeId:
                      place.id,
                  }),
                }
              );

            if (
              !response.ok
            ) {
              const errorData =
                await response
                  .json()
                  .catch(() => null);

              const message =
                errorData?.message ||
                "Failed to remove";

              toast.error(message);
              return;
            }

            setSavedPlaces(
              (prev) =>
                prev.filter(
                  (p) =>
                    p.id !==
                    place.id
                )
            );

            toast.success(
              "Removed from saved places"
            );

            return;
          }

          const response =
            await fetch(
              "/api/saved",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  userId,

                  placeId:
                    place.id,

                  placeData:
                    place,
                }),
              }
            );

          if (
            !response.ok
          ) {
            const errorData =
              await response
                .json()
                .catch(() => null);

            const message =
              errorData?.message ||
              "Failed to save";

            toast.error(message);
            return;
          }

          setSavedPlaces(
            (prev) => [
              ...prev,
              place,
            ]
          );

          toast.success(
            "Place saved ❤️"
          );

        } catch (error) {

          console.error(
            "[Toggle Save Error]",
            error
          );

          toast.error(
            "Something went wrong"
          );
        }
      },

      [userId, savedPlaces]
    );

  return {

    hydrated,

    loading,

    savedPlaces,

    toggleSavePlace,

    isSaved,
  };
}