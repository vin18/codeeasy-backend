import { Router } from 'express';
import {
  addItemToCart,
  getAllUserItemsHandler,
} from '../controllers/cart.controller';
import { protect } from '../middlewares/authorization';

const router = Router();

router
  .route(`/:userId`)
  .get(protect, getAllUserItemsHandler)
  .post(protect, addItemToCart);

export default router;
