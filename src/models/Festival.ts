import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface IFestival
  extends Document {

  name: string;

  state: string;

  city: string;

  description: string;

  image: string;

  month: string;

  createdAt: Date;

  updatedAt: Date;
}

const FestivalSchema =
  new Schema<IFestival>(
    {
      name: {
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

      description: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      month: {
        type: String,
        required: true,
      },
    },

    {
      timestamps: true,
    }
  );

const Festival =
  models.Festival ||
  model<IFestival>(
    "Festival",
    FestivalSchema
  );

export default Festival;