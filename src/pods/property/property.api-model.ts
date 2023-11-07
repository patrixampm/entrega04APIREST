export interface Review {
  id?: string;
  reviewer_name: string;
  date: string;
  comments: string;
}

export interface Property {
    id: string;
    name: string;
    description: string;
    images: string,
    address: {
      street: string,
    };
    bedrooms: number;
    beds: number;
    bathrooms: number;
    reviews: Review[];
}
