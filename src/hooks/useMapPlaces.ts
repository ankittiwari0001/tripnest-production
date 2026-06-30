"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type {
  ExtendedPlace,
} from "@/types/place";

/* TYPES */

interface Props {
  lat: number;
  lng: number;
  type: string;
  searchQuery: string;
}

interface PlacesResponse {
  success?: boolean;
  elements: ExtendedPlace[];
}

export default function useMapPlaces({

  lat,

  lng,

  type,

  searchQuery = "",
}: Props) {

  /* STATES */

  const [
    places,
    setPlaces,
  ] = useState<
    ExtendedPlace[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  /* FETCH */

  useEffect(() => {

    const controller =
      new AbortController();

    async function fetchPlaces() {

      if (
        !Number.isFinite(lat) ||
        !Number.isFinite(lng)
      ) {
        return;
      }

      try {

        setLoading(true);

        setError("");

        const response =
          await fetch(

            `/api/nearby?lat=${lat}&lng=${lng}&type=${type}`,

            {
              signal:
                controller.signal,
            }
          );

        if (
          !response.ok
        ) {

          throw new Error(
            `HTTP Error: ${response.status}`
          );
        }

        const data =
          (await response.json()) as PlacesResponse;

        const elements =
          data.elements || [];

        /* STORE RAW DATA */

        setPlaces(
          elements
        );

      } catch (error) {

        if (
          error instanceof DOMException &&
          error.name ===
            "AbortError"
        ) {

          return;
        }

        console.error(
          "[Places Fetch Error]",
          error
        );

        setError(
          "Unable to load nearby places"
        );

      } finally {

        setLoading(false);
      }
    }

    fetchPlaces();

    return () => {

      controller.abort();
    };

  }, [
    lat,
    lng,
    type,
  ]);

  /* LOCAL SEARCH FILTER */

  const filteredPlaces =
    useMemo(() => {

      const query =
        searchQuery
          .trim()
          .toLowerCase();

      if (!query) {

        return places;
      }

      return places.filter(
        (place) => {

          const text = `
            ${place.tags?.name ?? ""}
            ${place.vibe ?? ""}
            ${place.summary ?? ""}
          `
            .toLowerCase()
            .trim();

          return text.includes(
            query
          );
        }
      );

    }, [
      places,
      searchQuery,
    ]);

  return {

    places:
      filteredPlaces,

    loading,

    error,
  };
}