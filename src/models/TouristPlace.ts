import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface ITouristPlace
  extends Document {

  name: string;

  description: string;

  category: string;

  state: string;

  city: string;

  image: string;

  rating: number;

  coordinates: {
    lat: number;
    lng: number;
  };

  createdAt: Date;

  updatedAt: Date;
}

const TouristPlaceSchema =
  new Schema<ITouristPlace>(
    {
      name: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      category: {
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

      coordinates: {
        lat: Number,
        lng: Number,
      },
    },

    {
      timestamps: true,
    }
  );

const TouristPlace =
  models.TouristPlace ||
  model<ITouristPlace>(
    "TouristPlace",
    TouristPlaceSchema
  );

export default TouristPlace;