import mongoose, { Schema, model } from "mongoose";

const publicationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Photo: {
    type: String,
  },
  description: {
    type: String,
  },
  profile_id: {
    type: Schema.Types.ObjectId,
    ref: "profile",
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const publicationModel = model("publication", publicationSchema);
export default publicationModel;
