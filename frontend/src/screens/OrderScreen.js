import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder, detailsOrder, payOrder } from '../actions/orderActions';

function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {
    };
  }, [successPay]);

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              <b>Shipping</b>
            </h3>
            <div style={{ paddingTop: 15 }}>
              <b>Address:</b> {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country}.
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3><b>Payment</b></h3>
            <div style={{ paddingTop: 15 }}>
              Payment Method: <b>{order.payment.paymentMethod}</b>
            </div>
            <div>
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3><b>Shopping Cart</b></h3>
                <div>
                  <b>Price</b>
                </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>Cart is empty</div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={"/images/products/" + item.image} width="50" alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <b>Qty:</b> {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        {item.price} VND
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <h3><b>Order Summary</b></h3>
            </li>
            <li>
              <div>Items</div>
              <div>{order.itemsPrice} VND</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{order.shippingPrice} VND</div>
            </li>
            <li>
              <div>Tax</div>
              <div>{order.taxPrice} VND</div>
            </li>
            <li>
              <div><b>Order Total</b></div>
              <div><b>{order.totalPrice} VND</b></div>
            </li>
          </ul>
        </div>
      </div>
    </div>

}

export default OrderScreen;