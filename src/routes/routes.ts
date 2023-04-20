import 'express-async-errors';
import { Express } from 'express';
import validate from '../middlewares/validateResource';
import { userSchema } from '../schema/user.schema';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';

function routes(app: Express) {
  app.use(`/api/v1/products`, productRoutes);
  app.use(`/api/v1/users`, validate(userSchema), userRoutes);
}

export default routes;
