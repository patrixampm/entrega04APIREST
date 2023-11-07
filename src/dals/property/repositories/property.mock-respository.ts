import { PropertyRepository } from "./property.respository.js";
import { Property, Review } from "../property.model.js";
import { db } from "../../mock-data.js";
import { mapReviewFromApiToModel } from "#pods/property/property.mappers.js";

// const insertProperty = (property: Property) => {
//   const _id = new ObjectId();
//   const newProperty: Property = {
//     ...property,
//     _id,
//   };

//   db.properties = [...db.properties, newProperty];
//   return newProperty;
// };

// const updateProperty = (property: Property) => {
//   db.properties = db.properties.map((b) => (b._id.toHexString() === property._id.toHexString() ? { ...b, ...property } : b));
//   return property;
// };

const paginatePropertyList = (
  propertyList: Property[],
  page: number,
  pageSize: number
): Property[] => {
  let paginatedPropertyList = [...propertyList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(
      startIndex + pageSize,
      paginatedPropertyList.length
    );
    paginatedPropertyList = paginatedPropertyList.slice(startIndex, endIndex);
  }

  return paginatedPropertyList;
};

export const mockRepository: PropertyRepository = {
  getPropertyList: async (country?: string, page?: number, pageSize?: number) =>
    paginatePropertyList(db.properties, page, pageSize),
  getProperty: async (id: string) =>
    db.properties.find((b) => b._id.toHexString() === id),
  insertReview: async (propertyId: string, newReview: Review) => {
    const { reviews } = db.properties.find(
      (property) => property._id.toHexString() === propertyId
    );
    const foundIndex = db.properties.findIndex(
      (property) => property._id.toHexString() === propertyId
    );
    db.properties[foundIndex].reviews = [newReview, ...reviews];
    return newReview;
  },

  // deleteProperty: async (id: string) => {
  //   const exists = db.properties.some((b) => b._id.toHexString() === id);
  //   db.properties = db.properties.filter((b) => b._id.toHexString() !== id);
  //   return exists;
  // },
};
