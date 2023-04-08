import { Express, Request, Response } from 'express';
import productRoutes from './productRoutes';

function routes(app: Express) {
  app.use(`/api/v1/products`, productRoutes);
}

export default routes;
