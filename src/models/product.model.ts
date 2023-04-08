import mongoose from 'mongoose';

export interface ProductDocument extends mongoose.Document {
  productId: string;
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
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
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
