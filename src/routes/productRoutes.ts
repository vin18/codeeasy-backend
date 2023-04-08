import { Router } from 'express';
import { getProductsHandler } from '../controllers/product.controller';

const router = Router();

router.route(`/`).get(getProductsHandler);

export default router;
