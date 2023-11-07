import { mockRepository } from "./property.mock-respository.js";
import { dbRepository } from "./property.db-respository.js";
import { envConstants } from "#core/constants/index.js";

export const propertyRepository = envConstants.isApiMock ? mockRepository : dbRepository;
