import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  direccion: {
    calle: {
      type: String,
    },
    localidad: {
      type: String,
    },
    provincia: {
      type: String,
    },
  },
  publications: [
    {
      type: Schema.Types.ObjectId,
      ref: "publication",
    },
  ],
  deleted: {
    type: Boolean,
    default: false,
  },
});
const userModel = model("user", userSchema);
export default userModel;
