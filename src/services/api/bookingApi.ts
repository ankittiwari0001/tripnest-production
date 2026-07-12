import { api } from "@/services/api";
import { Booking } from "@/types/booking";

export interface BookingResponse {
  success: boolean;
  message: string;
  booking: Booking;
}

export interface BookingsResponse {
  success: boolean;
  bookings: Booking[];
}

export interface CreateBookingPayload {
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequest?: string;
}

export interface CancelBookingPayload {
  bookingId: string;
  reason: string;
}

export const bookingApi = {
  // Get current user's bookings
  async getBookings() {
    const { data } =
      await api.get<BookingsResponse>(
        "/bookings"
      );

    return data.bookings;
  },

  // Get single booking
  async getBookingById(id: string) {
    const { data } =
      await api.get<BookingResponse>(
        `/bookings/${id}`
      );

    return data.booking;
  },

  // Create booking
  async createBooking(
    payload: CreateBookingPayload
  ) {
    const { data } =
      await api.post<BookingResponse>(
        "/bookings",
        payload
      );

    return data.booking;
  },

  // Cancel booking
 async cancelBooking({
   bookingId,
   reason,
}: CancelBookingPayload){
    const { data } =
      await api.patch<BookingResponse>(
        `/bookings/${bookingId}/cancel`,
        {
          reason,
        }
      );

    return data.booking;
  },
};