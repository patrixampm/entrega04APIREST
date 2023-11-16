import { Property, Review } from "../property.model.js";

export interface PropertyRepository {
  getPropertyList: (country: string, page?: number, pageSize?: number) => Promise<Property[]>;
  getProperty: (id: string) => Promise<Property>;
  insertReview: (propertyId: string, newReview: Review) => Promise<Review>;
  saveProperty: (property: Property) => Promise<Property>;
}