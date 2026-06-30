import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IRestaurantBooking
  extends Document {

  userId:
    mongoose.Types.ObjectId;

  restaurantId:
    mongoose.Types.ObjectId;

  guests: number;

  bookingDate: Date;

  bookingTime: string;

  status: string;

  createdAt: Date;

  updatedAt: Date;
}

const RestaurantBookingSchema =
  new Schema<IRestaurantBooking>(
    {
      userId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",

        required: true,
      },

      restaurantId: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Restaurant",

        required: true,
      },

      guests: {
        type: Number,
        required: true,
      },

      bookingDate: {
        type: Date,
        required: true,
      },

      bookingTime: {
        type: String,
        required: true,
      },

      status: {
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

const RestaurantBooking =
  models.RestaurantBooking ||
  model<IRestaurantBooking>(
    "RestaurantBooking",
    RestaurantBookingSchema
  );

export default RestaurantBooking;