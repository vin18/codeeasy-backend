import mongoose from 'mongoose';

interface CartProduct {
  productId: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

export interface CartDocument extends mongoose.Document {
  user: string;
  products: CartProduct[];
}

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    products: [
      {
        productId: String,
        name: String,
        quantity: Number,
        image: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model<CartDocument>('Cart', cartSchema);
export default Cart;
