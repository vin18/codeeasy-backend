import { Router } from 'express';
import {
  addItemToCart,
  getAllUserItemsHandler,
} from '../controllers/cart.controller';

const router = Router();

router.route(`/:userId`).get(getAllUserItemsHandler).post(addItemToCart);

export default router;
