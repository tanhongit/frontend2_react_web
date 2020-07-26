import React, { useEffect, useState } from 'react'
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return <div className="ps-content pt-80 pb-80">
    <div className="ps-container">
      <div className="ps-cart-listing">
        <table className="table ps-cart__table">
          <thead>
            <tr>
              <th>All Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a className="ps-product__preview" href="product-detail.html">
                  <img
                    className="mr-15"
                    src="images/product/cart-preview/1.jpg"
                    alt
                  />{" "}
                air jordan One mid
              </a>
              </td>
              <td>$150</td>
              <td>
                <div className="form-group--number">
                  <button className="minus">
                    <span>-</span>
                  </button>
                  <input className="form-control" type="text" defaultValue={2} />
                  <button className="plus">
                    <span>+</span>
                  </button>
                </div>
              </td>
              <td>$300</td>
              <td>
                <div className="ps-remove" />
              </td>
            </tr>
            <tr>
              <td>
                <a className="ps-product__preview" href="product-detail.html">
                  <img
                    className="mr-15"
                    src="images/product/cart-preview/2.jpg"
                    alt
                  />{" "}
                The Crusty Croissant
              </a>
              </td>
              <td>$150</td>
              <td>
                <div className="form-group--number">
                  <button className="minus">
                    <span>-</span>
                  </button>
                  <input className="form-control" type="text" defaultValue={2} />
                  <button className="plus">
                    <span>+</span>
                  </button>
                </div>
              </td>
              <td>$300</td>
              <td>
                <div className="ps-remove" />
              </td>
            </tr>
            <tr>
              <td>
                <a className="ps-product__preview" href="product-detail.html">
                  <img
                    className="mr-15"
                    src="images/product/cart-preview/3.jpg"
                    alt
                  />
                The Rolling Pin
              </a>
              </td>
              <td>$150</td>
              <td>
                <div className="form-group--number">
                  <button className="minus">
                    <span>-</span>
                  </button>
                  <input className="form-control" type="text" defaultValue={2} />
                  <button className="plus">
                    <span>+</span>
                  </button>
                </div>
              </td>
              <td>$300</td>
              <td>
                <div className="ps-remove" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="ps-cart__actions">
          <div className="ps-cart__promotion">
            <div className="form-group">
              
            </div>
            <div className="form-group">
              <button className="ps-btn ps-btn--gray">Continue Shopping</button>
            </div>
          </div>
          <div className="ps-cart__total">
            <h3>
              Total Price: <span> 2599.00 $</span>
            </h3>
            <a className="ps-btn" href="checkout.html">
              Process to checkout
            <i className="ps-icon-next" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>;

}
export default CartScreen;
