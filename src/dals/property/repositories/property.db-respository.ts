import { ObjectId } from "mongodb";
import { PropertyRepository } from "./property.respository.js";
import { Property, Review } from "../property.model.js";
import { propertyContext } from "../property.context.js";

export const dbRepository: PropertyRepository = {
  getPropertyList: async (
    country: string,
    page?: number,
    pageSize?: number
  ) => {
    if (page && pageSize) {
      const skip = Boolean(page) ? (page - 1) * pageSize : 0;
      return await propertyContext
        .find({ "address.country": country })
        .select({
          name: 1,
          images: 1,
        })
        .skip(skip)
        .limit(pageSize)
        .lean();
    }
    return await propertyContext.find({ "address.country": country }).lean();
  },
  getProperty: async (id: string) => {
    return await propertyContext
      .findOne({
        _id: new ObjectId(id),
      })
      .lean();
  },
  insertReview: async (propertyId: string, newReview: Review) => {
    const property = await propertyContext.findOneAndUpdate(
      { _id: new ObjectId(propertyId) },
      { $push: { reviews: {$each: [newReview], $position: 0} } },
      { new: true, upsert: true, returnDocument: 'after' }
    ).lean();
    return newReview;
  },
  saveProperty: async (property: Property) => {
    return await propertyContext
      .findOneAndUpdate(
        {
          _id: property._id,
        },
        { $set: property },
        { upsert: true, returnDocument: 'after' }
      )
      .lean();
  },
};
