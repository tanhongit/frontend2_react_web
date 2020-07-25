import mongoose from 'mongoose';


const prodctSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  product_price: { type: Number, default: 0, required: true },
  category_id: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  product_description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model('Product', prodctSchema);

export default productModel;
