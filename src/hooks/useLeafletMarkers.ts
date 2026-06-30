"use client";

import {
  useEffect,
  RefObject,
  useCallback,
} from "react";

import type {
  Map as LeafletMap,
  Marker,
} from "leaflet";

import type {
  ExtendedPlace,
} from "@/types/place";

import {
  createMarkerIcon,
} from "../utils/markerIcons";

interface Props {

  mapRef:
    RefObject<LeafletMap | null>;

  markersRef:
    RefObject<Marker[]>;

  places:
    ExtendedPlace[];

  onSelectPlace: (
    place: ExtendedPlace
  ) => void;
}

function isMarkerClusterGroup(layer: unknown): layer is { addLayer: (...args: unknown[]) => unknown } {
  return (
    typeof layer === "object" &&
    layer !== null &&
    "addLayer" in layer &&
    typeof (layer as { addLayer: unknown }).addLayer === "function"
  );
}

export default function useLeafletMarkers({

  mapRef,

  markersRef,

  places,

  onSelectPlace,
}: Props) {

  const handleSelectPlace = useCallback(
    (place: ExtendedPlace) => {
      onSelectPlace(place);
    },
    [onSelectPlace]
  );

  useEffect(() => {

    const map = mapRef.current;

    if (!map) {
      return;
    }

    async function renderMarkers() {
      try {
      const L = (await import("leaflet")).default;
        await import("leaflet.markercluster");

        const currentMap = mapRef.current;

        if (!currentMap) {
          return;
        }

        /* REMOVE OLD CLUSTERS */

        currentMap.eachLayer((layer) => {
          if (isMarkerClusterGroup(layer)) {
            currentMap.removeLayer(
              layer
            );
          }
        });

        /* NO PLACES */

        if (
          places.length === 0
        ) {

          markersRef.current = [];

          return;
        }

        markersRef.current = [];

        /* CREATE CLUSTER */

        const clusterGroup =
          L.markerClusterGroup({

            spiderfyOnMaxZoom: true,

            showCoverageOnHover: false,

            zoomToBoundsOnClick: true,
          });

        /* BOUNDS */

        const bounds:
          L.LatLngExpression[] = [];

        /* ADD MARKERS */

        places.forEach(
          (place) => {

            try {

              if (

                typeof place.lat !==
                  "number" ||

                typeof place.lon !==
                  "number"
              ) {

                return;
              }

              const type =

                place.tags
                  .tourism ||

                place.tags
                  .amenity ||

                "";

              const markerIcon =
                createMarkerIcon(
                  type,
                  L
                );

              const marker =
                L.marker(
                  [
                    place.lat,
                    place.lon,
                  ],
                  {
                    icon:
                      markerIcon,
                  }
                ).on(
                  "click",
                  () => {

                    handleSelectPlace(
                      place
                    );
                  }
                );

              markersRef.current.push(marker);

              /* ADD TO CLUSTER */

              clusterGroup.addLayer(
                marker
              );

              bounds.push([
                place.lat,
                place.lon,
              ]);

            } catch (error) {

              console.error(
                "Marker render error:",
                error
              );
            }
          }
        );

        /* ADD CLUSTER TO MAP */

        currentMap.addLayer(
          clusterGroup
        );

        /* FIT BOUNDS */

        if (
          bounds.length > 0
        ) {

          currentMap.fitBounds(
            L.latLngBounds(
              bounds
            ),
            {
              padding: [
                80,
                80,
              ],
            }
          );
        }

      } catch (error) {

        console.error(
          "Leaflet markers error:",
          error
        );
      }
    }

    renderMarkers();

  }, [
    places,
    mapRef,
    markersRef,
    handleSelectPlace,
  ]);
}