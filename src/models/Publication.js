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
});

export default publicationModel = model("publication", publicationSchema);
