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
  const total_price = 0;
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
            {
              cartItems.length === 0 ?
                <div>
                  Cart is empty
          </div>
                :
                cartItems.map(item =>

                  <tr>
                    <td>
                      <a className="ps-product__preview" href="product-detail.html">
                        <img
                          width='50'
                          className="mr-15"
                          src={"/images/products/" + item.image}
                          alt
                        />{" "}
                        {item.name}
                      </a>
                    </td>
                    <td>{item.price} Đ</td>
                    <td>

                      <div className="form-group--number">
                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                          {[...Array(item.countInStock).keys()].map(x =>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                          )}
                        </select>
                        <input title="Nhập Để Đổi Số Lượng" type='number' className="form-control" type="text" value={item.qty <= item.countInStock ? item.qty : '1'} onChange={(e) => dispatch(addToCart(item.product, e.target.value))} min="1" step="1" max={item.countInStock} /> In stock: {item.countInStock}
                      </div>

                    </td>
                    <td>{item.qty <= item.countInStock ? item.qty * item.price : item.price} Đ</td>
                    <td>
                      <button className="ps-remove" onClick={() => removeFromCartHandler(item.product)}></button>
                    </td>
                  </tr>

                )
            }
          </tbody>
        </table>
        <div className="ps-cart__actions">
          <div className="ps-cart__promotion">
            <div className="form-group">

            </div>
            <div className="form-group">
              <a href='/' className="ps-btn ps-btn--gray">Continue Shopping</a>
            </div>
          </div>
          <div className="ps-cart__total">
            <h3>
              Total Price: <span> {cartItems.reduce((a, c) => c.qty <= c.countInStock ? a + c.price * c.qty : a + c.price, 0)}</span>
            </h3>
            <button onClick={checkoutHandler} className="ps-btn" disabled={cartItems.length === 0}>
              Proceed to Checkout <i className="ps-icon-next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;

}
export default CartScreen;
