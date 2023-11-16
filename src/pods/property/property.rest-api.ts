import { Router } from "express";
import { propertyRepository } from "#dals/index.js";
import { authorizationMiddleware } from '#pods/security/index.js';
import {
  mapPropertyListFromModelToApi,
  mapPropertyFromModelToApi,
  mapReviewFromApiToModel,
  mapReviewFromModelToApi,
  mapPropertyFromApiToModel,
} from "./property.mappers.js";
import { Review } from "#dals/index.js";

export const propertyApi = Router();

propertyApi
  .get("/", async (req, res, next) => {
    try {
      const country = String(req.query.country);
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const propertyList = await propertyRepository.getPropertyList(
        country,
        page,
        pageSize
      );

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
      res.send(mapReviewFromModelToApi(newReview));
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', authorizationMiddleware(['admin']), async (req, res, next) => {
    try {
      const { id } = req.params;
      if (await propertyRepository.getProperty(id)) {
        const property = mapPropertyFromApiToModel({ ...req.body, id });
        await propertyRepository.saveProperty(property);
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  });
