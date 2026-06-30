import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface ICulture
  extends Document {

  state: string;

  food: string[];

  dance: string[];

  music: string[];

  traditions: string[];

  clothing: string[];

  language: string[];

  createdAt: Date;

  updatedAt: Date;
}

const CultureSchema =
  new Schema<ICulture>(
    {
      state: {
        type: String,
        required: true,
      },

      food: [
        {
          type: String,
        },
      ],

      dance: [
        {
          type: String,
        },
      ],

      music: [
        {
          type: String,
        },
      ],

      traditions: [
        {
          type: String,
        },
      ],

      clothing: [
        {
          type: String,
        },
      ],

      language: [
        {
          type: String,
        },
      ],
    },

    {
      timestamps: true,
    }
  );

const Culture =
  models.Culture ||
  model<ICulture>(
    "Culture",
    CultureSchema
  );

export default Culture;