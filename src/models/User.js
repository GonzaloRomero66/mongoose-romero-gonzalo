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
  publications: [
    {
      type: Schema.Types.ObjectId,
      ref: "publication",
    },
  ],
});
const userModel = model("user", userSchema);
export default userModel;
