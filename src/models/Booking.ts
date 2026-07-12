import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

import { useBooking } from "@/hooks/useBooking";

/* -----------------------------
   Booking & Payment Status
------------------------------ */

export const BOOKING_STATUS = [
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
] as const;

export const PAYMENT_STATUS = [
  "Pending",
  "Paid",
  "Failed",
  "Refunded",
] as const;

export type BookingStatus =
  (typeof BOOKING_STATUS)[number];

export type PaymentStatus =
  (typeof PAYMENT_STATUS)[number];

/* -----------------------------
   Booking Interface
------------------------------ */

export interface IBooking
  extends Document {
  bookingNumber: string;

  userId: mongoose.Types.ObjectId;

  hotelId: mongoose.Types.ObjectId;

  checkIn: Date;

  checkOut: Date;

  guests: number;

  pricePerNight: number;

  totalNights: number;

  totalPrice: number;

  bookingStatus: BookingStatus;

  paymentStatus: PaymentStatus;

  specialRequest: string;

  cancelReason?: string;

  cancelledAt?: Date;

  createdAt: Date;

  updatedAt: Date;
}

/* -----------------------------
   Booking Schema
------------------------------ */

const BookingSchema =
  new Schema<IBooking>(
    {
      bookingNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      hotelId: {
        type: Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
      },

      checkIn: {
        type: Date,
        required: true,
      },

      checkOut: {
        type: Date,
        required: true,
      },

      guests: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
      },

      pricePerNight: {
        type: Number,
        required: true,
        min: 0,
      },

      totalNights: {
        type: Number,
        required: true,
        min: 1,
      },

      totalPrice: {
        type: Number,
        required: true,
        min: 0,
      },

      bookingStatus: {
        type: String,
        enum: BOOKING_STATUS,
        default: "Pending",
      },

      paymentStatus: {
        type: String,
        enum: PAYMENT_STATUS,
        default: "Pending",
      },

      specialRequest: {
        type: String,
        default: "",
        trim: true,
      },

      cancelReason: {
        type: String,
        default: "",
      },

      cancelledAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

/* -----------------------------
   Indexes
------------------------------ */

BookingSchema.index({
  userId: 1,
});

BookingSchema.index({
  hotelId: 1,
});

BookingSchema.index({
  bookingStatus: 1,
});

/* -----------------------------
   Model
------------------------------ */

const Booking =
  models.Booking ||
  model<IBooking>(
    "Booking",
    BookingSchema
  );

export default Booking;