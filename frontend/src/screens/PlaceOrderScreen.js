import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import Cookie from 'js-cookie';
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const itemsPrice = cartItems.reduce((a, c) => c.qty <= c.countInStock && c.qty > 0 ? a + c.price * c.qty : a + c.price, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
      taxPrice, totalPrice
    }));
    //delete cart when created
    Cookie.remove("cartItems");
    window.location.reload();
  }

  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }
  }, [success]);

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="ps-content pt-80 pb-80">
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
                  <div>Cart is empty</div>
                  :
                  cartItems.map(item =>
                    <tr>
                      <td>
                        <a className="ps-product__preview" href={'/product/' + item.product}>
                          <img
                            width='50'
                            className="mr-15"
                            src={"/images/products/" + item.image}
                            alt
                          />
                          {" " + item.name}
                        </a>
                      </td>
                      <td>{item.price} Đ</td>
                      <td>
                        <div className="form-group--number">
                          {item.qty <= item.countInStock && item.qty > 0 ? item.qty : 1}
                        </div>
                      </td>
                      <td>{item.qty <= item.countInStock && item.qty > 0 ? item.qty * item.price : item.price} Đ</td>
                      <td>
                      </td>
                    </tr>
                  )
              }
            </tbody>
          </table>
          <h3>Order Summary</h3>
          <table className="table ps-cart__table">￼
            <thead>
              <tr>
                <th>Items</th>
                <th>Shipping</th>
                <th>Tax</th>
                <th>Order Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{itemsPrice} VND</td>
                <td>{shippingPrice} VND</td>
                <td>{taxPrice} VND</td>
                <td>{totalPrice} VND</td>
              </tr>
            </tbody>
          </table>
          <div className="ps-cart__actions">
            <div className="ps-cart__promotion">
              <div className="form-group">
                <a href='/' className="ps-btn ps-btn--gray">Continue Shopping</a>
              </div>
            </div>
            <div className="ps-cart__total">
              <button className="ps-btn" onClick={placeOrderHandler} disabled={cartItems.length === 0}>
                Place Order <i className="ps-icon-next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default PlaceOrderScreen;