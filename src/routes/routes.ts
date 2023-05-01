import 'express-async-errors';
import { Express } from 'express';
import validate from '../middlewares/validateResource';
import { userSchema } from '../schema/user.schema';
import courseRoutes from './courseRoutes';
import userRoutes from './userRoutes';
import cartRoutes from './cartRoutes';

function routes(app: Express) {
  app.use(`/api/v1/courses`, courseRoutes);
  app.use(`/api/v1/users`, validate(userSchema), userRoutes);
  app.use(`/api/v1/cart`, validate(userSchema), cartRoutes);
}

export default routes;
