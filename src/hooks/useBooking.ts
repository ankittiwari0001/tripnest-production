import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  bookingApi,
  type CancelBookingPayload,
} from "@/services/api/bookingApi";

export function useBooking() {
  const queryClient = useQueryClient();

  /* -----------------------------
     Get User Bookings
  ----------------------------- */

  const bookingsQuery = useQuery({
    queryKey: ["bookings"],
    queryFn: bookingApi.getBookings,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  /* -----------------------------
     Create Booking
  ----------------------------- */

  const createBooking = useMutation({
    mutationFn: bookingApi.createBooking,

    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        }),
        queryClient.invalidateQueries({
          queryKey: ["booking"],
        }),
      ]);
    },
  });

  /* -----------------------------
     Cancel Booking
  ----------------------------- */

  const cancelBooking = useMutation({
    mutationFn: ({
      bookingId,
      reason,
    }: CancelBookingPayload) =>
      bookingApi.cancelBooking({
        bookingId,
        reason,
      }),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
  });

  return {
    bookings: bookingsQuery.data ?? [],

    isLoading:
      bookingsQuery.isLoading,

    error:
      bookingsQuery.error,

    refetch:
      bookingsQuery.refetch,

    createBooking,

    cancelBooking,

    isCreatingBooking:
      createBooking.isPending,

    isCancellingBooking:
      cancelBooking.isPending,
  };
}