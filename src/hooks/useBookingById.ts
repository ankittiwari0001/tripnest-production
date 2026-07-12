import { useQuery } from "@tanstack/react-query";

import { bookingApi } from "@/services/api/bookingApi";

export function useBookingById(
  bookingId: string
) {
  return useQuery({
    queryKey: [
      "booking",
      bookingId,
    ],

    queryFn: () =>
      bookingApi.getBookingById(
        bookingId
      ),

    enabled: !!bookingId,

    staleTime:
      1000 * 60 * 5,

    gcTime:
      1000 * 60 * 30,
  });
}