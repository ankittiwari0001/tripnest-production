import { api } from "@/services/api";
import { Booking } from "@/types/booking";

export interface BookingResponse {
  success: boolean;
  bookings: Booking[];
}

export const bookingService = {
  async getBookings() {
    const { data } =
      await api.get<BookingResponse>("/bookings");

    return data.bookings;
  },
};