import { ObjectId } from 'mongodb';

export interface Review {
  _id: string;
  reviewer_name: string;
  date: Date;
  comments: string;
}

export interface Property {
    _id: ObjectId;
    name: string;
    description: string;
    images: {
      picture_url: string,
    };
    address: {
      street: string,
    };
    bedrooms: number;
    beds: number;
    bathrooms: number;
    reviews: Review[];
  }

