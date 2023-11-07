import { db } from '#core/servers/index.js';
import { Property } from './property.model.js';

export const getPropertyContext = () => db?.collection<Property>('listingsAndReviews');