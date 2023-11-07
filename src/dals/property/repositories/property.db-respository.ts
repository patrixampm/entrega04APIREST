import { ObjectId } from 'mongodb';
import { PropertyRepository } from "./property.respository.js";
import { Review } from "../property.model.js";
import { getPropertyContext } from '../property.context.js';
import * as apiModel from '#pods/property/property.api-model.js'
import { mapReviewFromApiToModel } from '#pods/property/property.mappers.js';

export const dbRepository: PropertyRepository = {
  getPropertyList: async (country: string, page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 6;
    const result = await getPropertyContext()
    .find({
      "address.country": country,
    },{
      projection: {
        name: 1,
        images: 1,
      }
    })
    .skip(skip)
    .limit(limit)
    .toArray();
    return result;
  },
  getProperty: async (id: string) => {
    return await getPropertyContext().findOne({
      _id: new ObjectId(id),
    });
  },
  insertReview: async (propertyId: string, newReview: Review) => {
    const property = await getPropertyContext().findOneAndUpdate(
      { _id: new ObjectId(propertyId) },
      { $push: { reviews: {$each: [newReview], $position: 0} } },
      { upsert: true, returnDocument: 'after' }
    );
    return newReview;
  },
//   deleteProperty: async (id: string) => {
//     const { deletedCount } = await getPropertyContext().deleteOne({
//       _id: new ObjectId(id),
//     });
//     return deletedCount === 1;
//   },
};
