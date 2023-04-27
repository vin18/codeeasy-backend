import { Request, Response } from 'express';
import Cart from '../models/cart.model';
import { StatusCodes } from '../utils/statusCodes';
import { ExpressRequestInterface } from '../middlewares/authorization';

/**
 * @desc    Get cart items for a specific user
 * @route   GET /api/v1/cart/:userId
 * @access  Private
 */
export async function getAllUserItemsHandler(
  req: ExpressRequestInterface,
  res: Response
) {
  const userId = req?.user && req.user._id;
  const cart = await Cart.findOne({ userId });

  res.status(StatusCodes.OK).json(cart);
}

/**
 * @desc    Add or update items in cart for a specific user
 * @route   POST /api/v1/cart/:userId
 * @access  Private
 */
export async function addItemToCart(
  req: ExpressRequestInterface,
  res: Response
) {
  const { productId, quantity, name, price, image } = req.body;
  const userId = req?.user && req.user._id;

  let cart = await Cart.findOne({ userId });

  if (cart) {
    // cart exists for user
    const product = cart.products.find((p) => p.productId === productId);

    if (product) {
      // product exists in the cart, update the quantity
      product.quantity += 1;
    } else {
      // product does not exist in the cart, add new item
      cart.products.push({
        productId,
        quantity,
        name,
        price,
        image,
      });

      cart = await cart.save();
    }

    return res.status(StatusCodes.CREATED).json({ cart });
  } else {
    // no cart for user, create new cart
    const newCart = await Cart.create({
      userId,
      products: [
        {
          productId,
          quantity,
          name,
          price,
          image,
        },
      ],
    });

    return res.status(StatusCodes.CREATED).json({ cart: newCart });
  }
}
