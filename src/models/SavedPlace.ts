import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

import type {
  ExtendedPlace,
} from "@/types/place";

export interface ISavedPlace
  extends Document {

  userId:
    mongoose.Types.ObjectId;

  placeId: number;

  placeData: ExtendedPlace;

  createdAt: Date;

  updatedAt: Date;
}

const SavedPlaceSchema =
  new Schema<ISavedPlace>(
    {
      userId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      placeId: {
        type: Number,
        required: true,
      },

      placeData: {
        type: Schema.Types.Mixed,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

/* Prevent overwrite */

const SavedPlace =
  models.SavedPlace ||
  model<ISavedPlace>(
    "SavedPlace",
    SavedPlaceSchema
  );

export default SavedPlace;