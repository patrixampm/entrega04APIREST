import * as model from "#dals/index.js";
import * as apiModel from "./property.api-model.js";
import { ObjectId } from 'mongodb';

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.Review => {
  if (review !== null || undefined) {
    return {
      id: review._id,
      reviewer_name: review.reviewer_name,
      date: review.date?.toISOString(),
      comments: review.comments,
    };
  } else {
    [];
  }
};

export const mapReviewListFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] =>
  Array.isArray(reviewList)
    ? reviewList.map((review) => mapReviewFromModelToApi(review))
    : [];

export const mapPropertyFromModelToApi = (
  property: model.Property
): apiModel.Property => ({
  id: property._id.toHexString(),
  name: property.name,
  description: property.description,
  images: property.images?.picture_url,
  address: property.address,
  bedrooms: property.bedrooms,
  beds: property.beds,
  bathrooms: property.bathrooms,
  reviews: mapReviewListFromModelToApi(property.reviews),
});

export const mapPropertyListFromModelToApi = (
  propertyList: model.Property[]
): apiModel.Property[] =>
  Array.isArray(propertyList)
    ? propertyList.map(mapPropertyFromModelToApi)
    : [];

export const mapReviewFromApiToModel = (
  review: apiModel.Review
): model.Review => {
    return {
      _id: review.id,
      reviewer_name: review.reviewer_name,
      date: new Date(),
      comments: review.comments,
    };
};

export const mapReviewListFromApiToModel = (
  reviewList: apiModel.Review[]
): model.Review[] =>
  Array.isArray(reviewList)
    ? reviewList.map((review) => mapReviewFromApiToModel(review))
    : [];

export const mapPropertyFromApiToModel = (property: apiModel.Property): model.Property => ({
    _id: new ObjectId(property.id),
    name: property.name,
    description: property.description,
    images: {
      picture_url: property.images,
    },
    address: property.address,
    bedrooms: property.bedrooms,
    beds: property.beds,
    bathrooms: property.bathrooms,
    reviews: mapReviewListFromApiToModel(property.reviews),
});