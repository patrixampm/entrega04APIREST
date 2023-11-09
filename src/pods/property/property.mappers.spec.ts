import { ObjectId } from "mongodb";
import * as model from "#dals/index.js";
import * as apiModel from "./property.api-model.js";
import {
  mapReviewFromModelToApi,
  mapReviewListFromModelToApi,
  mapPropertyFromModelToApi,
  mapPropertyListFromModelToApi,
  mapReviewFromApiToModel,
} from "./property.mappers.js";

describe("property.mappers spec", () => {
  describe("mapReviewFromModelToApi", () => {
    it("should return one mapped item when one item is required", () => {
      // Arrange
      const review: model.Review = {
        _id: "1",
        reviewer_name: "Jose",
        date: new Date("2023-11-07T12:37:35.048Z"),
        comments: "comentarios",
      };

      // Act
      const result: apiModel.Review = mapReviewFromModelToApi(review);

      // Assert
      expect(result).toEqual({
        id: "1",
        reviewer_name: "Jose",
        date: "2023-11-07T12:37:35.048Z",
        comments: "comentarios",
      });
    });
  });

  describe("mapReviewListFromModelToApi", () => {
    it.each<model.Review[]>([undefined, null])(
      "should return empty array when property equals %p",
      (reviewList: any) => {
        // Arrange

        // Act
        const result: apiModel.Review[] =
          mapReviewListFromModelToApi(reviewList);

        // Assert
        expect(result).toEqual([]);
      }
    );

    it("should return mapped items in array when items are required", () => {
      // Arrange
      const reviewList: model.Review[] = [
        {
          _id: "1",
          reviewer_name: "Jose",
          date: new Date("2023-11-07T11:15:14.423Z"),
          comments: "Comentarios",
        },
        {
          _id: "2",
          reviewer_name: "Paco",
          date: new Date("2023-11-07T11:15:14.423Z"),
          comments: "Comentarios",
        },
      ];

      // Act
      const result: apiModel.Review[] = mapReviewListFromModelToApi(reviewList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          reviewer_name: "Jose",
          date: "2023-11-07T11:15:14.423Z",
          comments: "Comentarios",
        },
        {
          id: "2",
          reviewer_name: "Paco",
          date: "2023-11-07T11:15:14.423Z",
          comments: "Comentarios",
        },
      ]);
    });
  });

  describe("mapPropertyFromModelToApi", () => {
    it("should return one mapped item when one item is required", () => {
      // Arrange
      const property: model.Property = {
        _id: new ObjectId("65363f946773d57113234970"),
        name: "Casa fantastica",
        description: "Fantastic duplex apartment with zero bedrooms",
        images: {
          picture_url:
            "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        },
        address: {
          street: "La Linea",
        },
        bedrooms: 0,
        beds: 1,
        bathrooms: 0,
        reviews: [
          {
            _id: "1",
            reviewer_name: "Jose",
            date: new Date("2023-11-07T11:15:14.423Z"),
            comments: "Comentarios",
          },
          {
            _id: "2",
            reviewer_name: "Francisco",
            date: new Date("2023-11-07T11:15:14.423Z"),
            comments: "Comentarios",
          },
        ],
      };

      // Act
      const result: apiModel.Property = mapPropertyFromModelToApi(property);

      // Assert
      expect(result).toEqual({
        id: "65363f946773d57113234970",
        name: "Casa fantastica",
        description: "Fantastic duplex apartment with zero bedrooms",
        images:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        address: {
          street: "La Linea",
        },
        bedrooms: 0,
        beds: 1,
        bathrooms: 0,
        reviews: [
          {
            id: "1",
            reviewer_name: "Jose",
            date: "2023-11-07T11:15:14.423Z",
            comments: "Comentarios",
          },
          {
            id: "2",
            reviewer_name: "Francisco",
            date: "2023-11-07T11:15:14.423Z",
            comments: "Comentarios",
          },
        ],
      });
    });
  });

  describe("mapPropertyListFromModelToApi", () => {
    it.each<model.Property[]>([undefined, null, []])(
      "should return empty array when a property equals %p",
      (propertyList: any) => {
        // Arrange

        // Act
        const result: apiModel.Property[] =
          mapPropertyListFromModelToApi(propertyList);

        // Assert
        expect(result).toEqual([]);
      }
    );

    it("should return mapped items in array when items are required", () => {
      // Arrange
      const propertyList: model.Property[] = [
        {
          _id: new ObjectId("6543d138938834c35bc8156c"),
          name: "Ribeira Charming Duplex",
          description: "Fantastic duplex apartment with three bedrooms",
          images: {
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          },
          address: {
            street: "Porto, Porto, Portugal",
          },
          bedrooms: 3,
          beds: 5,
          bathrooms: 2,
          reviews: [
            {
              _id: "1",
              reviewer_name: "Jose",
              date: new Date("2023-11-07T11:15:14.423Z"),
              comments: "Comentarios",
            },
            {
              _id: "2",
              reviewer_name: "Paco",
              date: new Date("2023-11-07T11:15:14.423Z"),
              comments: "Comentarios",
            },
          ],
        },
        {
          _id: new ObjectId("6543d1516ea297f6f49108e3"),
          name: "House onn the beach",
          description: "Great house",
          images: {
            picture_url:
              "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
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
              reviewer_name: "Antonio",
              date: new Date("2023-11-07T11:15:14.423Z"),
              comments: "Comentarios",
            },
            {
              _id: "4",
              reviewer_name: "Manolo",
              date: new Date("2023-11-07T11:15:14.423Z"),
              comments: "Comentarios",
            },
          ],
        },
      ];

      // Act
      const result: apiModel.Property[] =
        mapPropertyListFromModelToApi(propertyList);

      // Assert
      expect(result).toEqual([
        {
          id: "6543d138938834c35bc8156c",
          name: "Ribeira Charming Duplex",
          description: "Fantastic duplex apartment with three bedrooms",
          images:
            "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          address: {
            street: "Porto, Porto, Portugal",
          },
          bedrooms: 3,
          beds: 5,
          bathrooms: 2,
          reviews: [
            {
              id: "1",
              reviewer_name: "Jose",
              date: "2023-11-07T11:15:14.423Z",
              comments: "Comentarios",
            },
            {
              id: "2",
              reviewer_name: "Paco",
              date: "2023-11-07T11:15:14.423Z",
              comments: "Comentarios",
            },
          ],
        },
        {
          id: "6543d1516ea297f6f49108e3",
          name: "House onn the beach",
          description: "Great house",
          images:
            "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
          address: {
            street: "Malaga, Spain",
          },
          bedrooms: 3,
          beds: 5,
          bathrooms: 2,
          reviews: [
            {
              id: "3",
              reviewer_name: "Antonio",
              date: "2023-11-07T11:15:14.423Z",
              comments: "Comentarios",
            },
            {
              id: "4",
              reviewer_name: "Manolo",
              date: "2023-11-07T11:15:14.423Z",
              comments: "Comentarios",
            },
          ],
        },
      ]);
    });
  });

  describe("mapReviewFromApiToModel", () => {
    it.each<apiModel.Review>([undefined, null])(
      "should return an error when property equals %p",
      (review: any) => {
        // Arrange

        // Act
        const result = () => mapReviewFromApiToModel(review);

        // Assert
        expect(result).toThrowError();
      }
    );

    it("should return one mapped item when one item is required", () => {
      // Arrange
      const review: apiModel.Review = {
        id: "1",
        reviewer_name: "Jose",
        date: "2023-11-07T11:15:14.423Z",
        comments: "Comentarios",
      };

      // Act
      const result: model.Review = mapReviewFromApiToModel(review);

      // Assert
      expect(result).toEqual({
        _id: "1",
        reviewer_name: "Jose",
        date: new Date(),
        comments: "Comentarios",
      });
    });
  });
});
