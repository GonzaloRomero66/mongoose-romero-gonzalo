import mongoose, { Schema, model } from "mongoose";

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  avatar: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const profileModel = model("profile", profileSchema);
export default profileModel;
