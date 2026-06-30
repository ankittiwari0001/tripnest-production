import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IHotel
  extends Document {

  name: string;

  image: string;

  location: string;

  price: number;

  rating: number;

  category: string;

  type: string;

  description: string;

  amenities: string[];

  coordinates: {
    type: string;

    coordinates: [
      number,
      number
    ];
  };

  createdAt: Date;

  updatedAt: Date;
}

const HotelSchema =
  new Schema<IHotel>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      image: {
        type: String,
        required: true,
      },

      location: {
        type: String,
        default: "",
      },

      price: {
        type: Number,
        required: true,
      },

      rating: {
        type: Number,
        default: 4.5,
      },

      category: {
        type: String,
        enum: [
          "Budget",
          "Premium",
          "Luxury",
        ],
        default: "Premium",
      },

      type: {
        type: String,
        default: "hotel",
      },

      description: {
        type: String,
        default:
          "Experience luxury and comfort with premium hospitality services.",
      },

      amenities: {
        type: [String],
        default: [
          "Free WiFi",
          "Parking",
          "Restaurant",
        ],
      },

      coordinates: {
        type: {
          type: String,
          enum: ["Point"],
          default: "Point",
        },

        coordinates: {
          type: [Number],
          default: [0, 0],
        },
      },
    },

    {
      timestamps: true,
    }
  );

/* GEO INDEX */

HotelSchema.index({
  coordinates: "2dsphere",
});

/* PREVENT MODEL OVERWRITE */

const Hotel =
  models.Hotel ||
  model<IHotel>(
    "Hotel",
    HotelSchema
  );

export default Hotel;