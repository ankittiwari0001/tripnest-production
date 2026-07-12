import {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export interface ICounter
  extends Document {
  name: string;
  sequence: number;
}

const CounterSchema =
  new Schema<ICounter>(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },

      sequence: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

const Counter =
  models.Counter ||
  model<ICounter>(
    "Counter",
    CounterSchema
  );

export default Counter;