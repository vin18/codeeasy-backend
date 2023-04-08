import { Request, Response } from 'express';
import Product from '../models/product.model';
import { StatusCodes } from '../utils/statusCodes';

/**
 * @desc    Get all products
 * @route   GET /api/v1/products
 * @access  Public
 */
export async function getProductsHandler(req: Request, res: Response) {
  const products = await Product.find();
  return res.status(StatusCodes.OK).json(products);
}
