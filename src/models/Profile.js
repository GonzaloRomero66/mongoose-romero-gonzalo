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
});

export default profileModel = model("profile", profileSchema);
