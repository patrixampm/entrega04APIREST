import { ObjectId } from 'mongodb';
import { Property } from "./property/index.js";

export interface DB {
  properties: Property[];
}

export const db: DB = {
  properties: [
    {
      _id: new ObjectId("6543d138938834c35bc8156c"),
      name: "Ribeira Charming Duplex",
      description: "Fantastic duplex apartment with three bedrooms",
      images: {
        "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      address: {
        "street": "Porto, Porto, Portugal",
      },
      bedrooms: 3,
      beds: 5,
      bathrooms: 2,
      reviews: [
        {
          _id: "1",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
        {
          _id: "2",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
      ],
    },
    {
      _id: new ObjectId("6543d1516ea297f6f49108e3"),
      name: "House onn the beach",
      description: "Great house",
      images: {
        picture_url: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      address: {
        street: "Malaga, Spain",
      },
      bedrooms: 3,
      beds: 5,
      bathrooms: 2,
      reviews: [
        {
          _id: "3",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
        {
          _id: "4",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
      ],
    },
    {
      _id: new ObjectId("6543d1634725e48cb05b269f"),
      name: "House in the mountains",
      description: "Great hut",
      images: {
        "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      address: {
        "street": "Granada, Spain",
      },
      bedrooms: 7,
      beds: 8,
      bathrooms: 4,
      reviews: [
        {
          _id: "5",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
        {
          _id: "6",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
      ],
    },
    {
      _id: new ObjectId("6543d172b4975a966a89fbe2"),
      name: "House on a lake",
      description: "Great mansion",
      images: {
        "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      address: {
        "street": "Huesca, Spain",
      },
      bedrooms: 1,
      beds: 78,
      bathrooms: 2,
      reviews: [
        {
          _id: "7",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
        {
          _id: "8",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
      ],
    },
    {
      _id: new ObjectId("6543d1823fc526bf02f81cb0"),
      name: "House in France",
      description: "Great maison",
      images: {
        "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
      },
      address: {
        "street": "Biarritz, France",
      },
      bedrooms: 8,
      beds: 4,
      bathrooms: 55,
      reviews: [
        {
          _id: "9",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
        {
          _id: "10",
          reviewer_name: "Jose",
          date: new Date(),
          comments: "Comentarios",
        },
      ],
    },
  ],
};