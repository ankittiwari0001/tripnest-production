import mongoose, {
  Schema,
  model,
  models,
  Document,
} from "mongoose";

export type UserRole =
  | "USER"
  | "ADMIN"
  | "SUPER_ADMIN";



export interface IUser extends Document {

  name: string;

  email: string;

  password: string;

  role: UserRole;

  avatar?: string;

  phone?: string;

  wishlist: mongoose.Types.ObjectId[];


  createdAt: Date;

  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: [
        "USER",
        "ADMIN",
        "SUPER_ADMIN",
      ],
      default: "USER",
    },

    avatar: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

   wishlist: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
],
},
  {
    timestamps: true,
  }
);

/* 🔥 Prevent model overwrite */
const User =
  models.User || model<IUser>("User", UserSchema);

export default User;