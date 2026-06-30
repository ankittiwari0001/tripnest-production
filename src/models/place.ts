import mongoose from "mongoose";

const placeSchema =
  new mongoose.Schema({

    name: String,

    image: String,

    rating: Number,

    price: Number,

    category: String,

    type: String,

    tags: [String],

    location: {

      type: {

        type: String,

        enum: ["Point"],

        default:
          "Point",
      },

      coordinates: {

        type: [Number],

        required: true,
      },
    },
  });

/* GEO INDEX */

placeSchema.index({

  location:
    "2dsphere",
});

export default
  mongoose.models.Place ||

  mongoose.model(
    "Place",
    placeSchema
  );