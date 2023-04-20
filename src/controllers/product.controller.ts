import { Request, Response } from 'express';
import { NotFoundError } from '../errors';
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

/**
 * @desc    Get single product
 * @route   GET /api/v1/products/:productId
 * @access  Public
 */
export async function getProductHandler(req: Request, res: Response) {
  const { productId } = req.params;

  const product = await Product.findById(productId);
  if (!product) {
    throw new NotFoundError(`No product found with id - ${productId}`);
  }

  return res.status(StatusCodes.OK).json(product);
}
