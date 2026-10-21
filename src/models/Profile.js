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
});

export default profileModel = model("profile", profileSchema);
