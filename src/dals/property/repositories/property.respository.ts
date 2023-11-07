import { Property, Review } from "../property.model.js";
import * as apiModel from "#pods/property/property.api-model.js";

export interface PropertyRepository {
  getPropertyList: (country?: string, page?: number, pageSize?: number) => Promise<Property[]>;
  getProperty: (id: string) => Promise<Property>;
  insertReview: (propertyId: string, newReview: Review) => Promise<Review>;
  //deleteProperty: (id: string) => Promise<boolean>;
}