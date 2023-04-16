import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
  user?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  countInStock: number;
  category: string;
  brand: string;
  rating?: number;
  numReviews?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    countInStock: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductDocument>('Product', productSchema);
export default Product;
