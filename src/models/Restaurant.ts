import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IRestaurant
  extends Document {

  name: string;

  description: string;

  cuisine: string;

  location: string;

  state: string;

  city: string;

  image: string;

  rating: number;

  priceRange: string;

  openingHours: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  createdBy:
    mongoose.Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

const RestaurantSchema =
  new Schema<IRestaurant>(
    {
      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      cuisine: {
        type: String,
        required: true,
      },

      location: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        default: 4.5,
      },

      priceRange: {
        type: String,
        default: "₹₹",
      },

      openingHours: {
        type: String,
        default:
          "10 AM - 11 PM",
      },

      coordinates: {
        lat: Number,
        lng: Number,
      },

      createdBy: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "User",
      },
    },

    {
      timestamps: true,
    }
  );

RestaurantSchema.index({
  city: 1,
});

RestaurantSchema.index({
  cuisine: 1,
});

const Restaurant =
  models.Restaurant ||
  model<IRestaurant>(
    "Restaurant",
    RestaurantSchema
  );

export default Restaurant;