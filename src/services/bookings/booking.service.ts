import Booking from "@/models/Booking";
import Hotel from "@/models/Hotel";
import { generateBookingNumber } from "@/lib/generateBookingNumber";

interface CreateBookingInput {
  userId: string;
  hotelId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequest?: string;
}

export const bookingService = {
  /**
   * Create a new booking
   */
  async createBooking({
    userId,
    hotelId,
    checkIn,
    checkOut,
    guests,
    specialRequest = "",
  }: CreateBookingInput) {
    const hotel = await Hotel.findById(hotelId);

    if (!hotel) {
      throw new Error("Hotel not found");
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      throw new Error("Check-out date must be after check-in date");
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const totalNights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / oneDay
    );

    const pricePerNight = hotel.price;
    const totalPrice = totalNights * pricePerNight;

    const bookingNumber = await generateBookingNumber();

    const booking = await Booking.create({
      bookingNumber,
      userId,
      hotelId,
      checkIn,
      checkOut,
      guests,
      pricePerNight,
      totalNights,
      totalPrice,
      specialRequest,
      bookingStatus: "Confirmed",
      paymentStatus: "Pending",
    });

    return booking;
  },

  /**
   * Get all bookings
   */
  async getBookings() {
    return Booking.find()
      .populate({
        path: "hotelId",
        select: "name image location rating category description amenities price",
      })
      .sort({ createdAt: -1 });
  },

  /**
   * Get all bookings of current user
   */
  async getUserBookings(userId: string) {
    return Booking.find({ userId })
      .populate({
        path: "hotelId",
        select: "name image location rating category description amenities price",
      })
      .sort({ createdAt: -1 });
  },

  /**
   * Get booking by ID
   */
  async getBookingById(bookingId: string, userId: string) {
    const booking = await Booking.findOne({
      _id: bookingId,
      userId,
    }).populate({
      path: "hotelId",
      select: "name image location rating category description amenities price",
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    return booking;
  },

  /**
   * Cancel Booking
   */
  async cancelBooking(bookingId: string, userId: string, reason: string) {
    const booking = await Booking.findOne({
      _id: bookingId,
      userId,
    });

    if (!booking) {
      throw new Error("Booking not found");
    }

    if (booking.bookingStatus === "Cancelled") {
      throw new Error("Booking is already cancelled");
    }

    if (booking.bookingStatus === "Completed") {
      throw new Error("Completed booking cannot be cancelled");
    }

    booking.bookingStatus = "Cancelled";
    booking.cancelReason = reason;
    booking.cancelledAt = new Date();

    await booking.save();

    return booking;
  },
};