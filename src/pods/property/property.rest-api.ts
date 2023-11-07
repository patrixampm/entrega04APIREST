import { Router } from "express";
import { propertyRepository } from "#dals/index.js";
import { 
  mapPropertyListFromModelToApi,
  mapPropertyFromModelToApi,
  mapReviewFromApiToModel,
  mapReviewFromModelToApi
} from "./property.mappers.js";
import { Review } from "#dals/index.js";
import * as apiModel from './property.api-model.js';

// TODO: Añadir Login

export const propertyApi = Router();

propertyApi
  .get("/", async (req, res, next) => {
    try {
      const country = String(req.query.country);
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const propertyList = await propertyRepository.getPropertyList(country, page, pageSize);

      res.send(mapPropertyListFromModelToApi(propertyList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const property = await propertyRepository.getProperty(id);
      if (property) {
        res.send(mapPropertyFromModelToApi(property));
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  })
  .patch("/:id/reviews", async (req, res, next) => {
    try {
      const { id } = req.params;
      const newReview: Review = mapReviewFromApiToModel(req.body);
      await propertyRepository.insertReview(id, newReview);
      res.send(mapReviewFromModelToApi(newReview))
    } catch (error) {
      next(error);
    }
  })


  /* Este Delete es para pasarlo a la parte opcional, aqui es dodne hay que securizarlo
  .delete("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const isDeleted = await propertyRepository.deleteProperty(id);
      res.sendStatus(isDeleted ? 204 : 404);
    } catch (error) {
      next(error);
    }
  });
  */