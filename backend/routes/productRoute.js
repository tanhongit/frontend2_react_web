import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/',async (req, res)=> {
  const products = await Product.find({});
  res.send(products);
});

router.post('/',async (req, res)=> {
  const product = new Product({
    product_name = req.body.name,
    product_price = req.body.price,
    image = req.body.image,
    brand = req.body.brand,
    category = req.body.category,
    countInStock = req.body.countInStock,
    product_description = req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'Product Created', data: newProduct });
  }
  return res.status(500).send({message: 'Error is creating product'});
})
export default router;
