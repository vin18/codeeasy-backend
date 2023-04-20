import { Router } from 'express';
import {
  getProductsHandler,
  getProductHandler,
} from '../controllers/product.controller';

const router = Router();

router.route(`/`).get(getProductsHandler);
router.route(`/:productId`).get(getProductHandler);

export default router;
