import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IBooking
  extends Document {

  userId:
    mongoose.Types.ObjectId;

  hotelId:
    mongoose.Types.ObjectId;

  checkIn: Date;

  checkOut: Date;

  guests: number;

  totalPrice: number;

  paymentStatus: string;

  bookingStatus: string;

  createdAt: Date;

  updatedAt: Date;
}

const BookingSchema =
  new Schema<IBooking>(
    {
      userId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      hotelId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

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
      },

      totalPrice: {
        type: Number,
        required: true,
      },

      paymentStatus: {
        type: String,

        enum: [
          "Pending",
          "Paid",
          "Failed",
        ],

        default: "Pending",
      },

      bookingStatus: {
        type: String,

        enum: [
          "Pending",
          "Confirmed",
          "Cancelled",
        ],

        default: "Pending",
      },
    },

    {
      timestamps: true,
    }
  );

const Booking =
  models.Booking ||
  model<IBooking>(
    "Booking",
    BookingSchema
  );

export default Booking;