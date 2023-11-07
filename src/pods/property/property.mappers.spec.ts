// import * as helpers from './helpers/property.helpers.js';
import { ObjectId } from 'mongodb';
import * as model from '#dals/index.js';
import * as apiModel from './property.api-model.js';
import { 
  mapPropertyFromModelToApi,
  mapPropertyListFromModelToApi,
  mapPropertyFromApiToModel 
} from './property.mappers.js';

describe('property.mappers spec', () => {
  describe('mapPropertyFromModelToApi', () => {
      it.each<model.Property>([undefined, null])(
          'should return empty array when property equals %p is required',
          (property: any) => {
              // Arrange
          
              // Act
              const result: apiModel.Property = mapPropertyFromModelToApi(property);
          
              // Assert
              expect(result).toEqual([]);
          }
      );

      it('should return one mapped item in array when one item is required', () => {
          // Arrange
          const property: model.Property = [
            {
                  _id: new ObjectId("65363f946773d57113234970"),
                  name: "Casa fantastica",
                  description: "Fantastic duplex apartment with zero bedrooms",
                  images: {
                    "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                  },
                  address: {
                    "street": "La Linea"
                  },
                  bedrooms: 0,
                  beds: 1,
                  bathrooms: 0,
                  reviews: [
                    {
                      "review": "1"
                    },
                    {
                      "review": "2"
                    },
                    {
                      "review": "3"
                    },
                    {
                      "review": "4"
                    },
                    {
                      "review": "5"
                    }
                  ]
            }
          ];
          
          // Act
          const result: apiModel.Property = mapPropertyFromModelToApi(property);
          
          // Assert
          expect(result).toEqual([
              {
                  id: "65363f946773d57113234970",
                  name: "Casa fantastica",
                  description: "Fantastic duplex apartment with zero bedrooms",
                  images: {
                    "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                  },
                  address: {
                    "street": "La Linea"
                  },
                  bedrooms: 0,
                  beds: 1,
                  bathrooms: 0,
                  reviews: [
                    {
                      "review": "1"
                    },
                    {
                      "review": "2"
                    },
                    {
                      "review": "3"
                    },
                    {
                      "review": "4"
                    },
                    {
                      "review": "5"
                    }
                  ]
                }
          ]);
      });
  });
});

describe('property.mappers spec', () => {
  describe('mapPropertyListFromModelToApi', () => {
      it.each<model.PropertyList[]>([undefined, null, []])(
          'should return empty array when a property equals %p is required',
          (propertyList: any) => {
              // Arrange
          
              // Act
              const result: apiModel.Property[] = mapPropertyListFromModelToApi(propertyList);
          
              // Assert
              expect(result).toEqual([]);
          }
      );

      it('should return one mapped item in array when one item is required', () => {
          // Arrange
          const propertyList: model.PropertyForList[] = [
            {
                  name: "Casa fantastica",
                  images: {
                    "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                  }
            }
        ];
          
          // Act
          const result: apiModel.Property[] = mapPropertyListFromModelToApi(propertyList);
          
          // Assert
          expect(result).toEqual([
              {
                  id: "65363f946773d57113234970",
                  name: "Casa fantastica",
                  description: "Fantastic duplex apartment with zero bedrooms",
                  images: {
                    "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                  },
                  address: {
                    "street": "La Linea"
                  },
                  bedrooms: 0,
                  beds: 1,
                  bathrooms: 0,
                  reviews: [
                    {
                      "review": "1"
                    },
                    {
                      "review": "2"
                    },
                    {
                      "review": "3"
                    },
                    {
                      "review": "4"
                    },
                    {
                      "review": "5"
                    }
                  ]
                }
          ]);
      });
  });
});

describe('property.mappers spec', () => {
    describe('mapPropertyFromApiToModel', () => {
        it.each<apiModel.Property>([undefined, null])(
            'should return empty array when it feeds property equals %p',
            (property: any) => {
                // Arrange
            
                // Act
                const result: model.Property = mapPropertyFromApiToModel(property);
            
                // Assert
                expect(result).toEqual([]);
            }
        );

        it('should return one mapped item in array when it feeds property with one item', () => {
            // Arrange
            const property: apiModel.Property = [
              {
                    id: "65363f946773d57113234970",
                    name: "Casa fantastica",
                    description: "Fantastic duplex apartment with zero bedrooms",
                    images: {
                      "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                    },
                    address: {
                      "street": "La Linea"
                    },
                    bedrooms: 0,
                    beds: 1,
                    bathrooms: 0,
                    reviews: [
                      {
                        "review": "1"
                      },
                      {
                        "review": "2"
                      },
                      {
                        "review": "3"
                      },
                      {
                        "review": "4"
                      },
                      {
                        "review": "5"
                      }
                    ]
              }
            ];
            
            // Act
            const result: model.Property = mapPropertyFromApiToModel(property);
            
            // Assert
            expect(result).toEqual([
                {
                    _id: new ObjectId("65363f946773d57113234970"),
                    name: "Casa fantastica",
                    description: "Fantastic duplex apartment with zero bedrooms",
                    images: {
                      "picture_url": "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
                    },
                    address: {
                      "street": "La Linea"
                    },
                    bedrooms: 0,
                    beds: 1,
                    bathrooms: 0,
                    reviews: [
                      {
                        "review": "1"
                      },
                      {
                        "review": "2"
                      },
                      {
                        "review": "3"
                      },
                      {
                        "review": "4"
                      },
                      {
                        "review": "5"
                      }
                    ]
                  }
            ]);
        });
    });
});