import { Schema, model } from "mongoose";
import { Property } from "./property.model.js";

const imageSchema = new Schema({
  picture_url: { type: Schema.Types.String },
});

const addressSchema = new Schema({
  street: { type: Schema.Types.String },
});

const reviewSchema = new Schema({
  _id: { type: Schema.Types.String },
  reviewer_name: { type: Schema.Types.String },
  date: { type: Schema.Types.Date },
  comments: { type: Schema.Types.String },
});

const propertySchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: Schema.Types.String },
  description: { type: Schema.Types.String },
  images: { type: imageSchema },
  address: { type: addressSchema },
  bedrooms: { type: Schema.Types.Number },
  beds: { type: Schema.Types.Number },
  bathrooms: { type: Schema.Types.Number },
  reviews: [{ type: reviewSchema }],
});

export const propertyContext = model<Property>(
  "ListingsAndReviews",
  propertySchema,
  "listingsAndReviews"
);
