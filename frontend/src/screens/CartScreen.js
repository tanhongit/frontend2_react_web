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
    
    return <div className="cart_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">Shopping Cart</div>
              <div className="cart_items">
                <ul className="cart_list">
                  <li className="cart_item clearfix">
                    <div className="cart_item_image">
                      <img src="images/shopping_cart.jpg" alt />
                    </div>
                    <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                      <div className="cart_item_name cart_info_col">
                        <div className="cart_item_title">Name</div>
                        <div className="cart_item_text">MacBook Air 13</div>
                      </div>
                      <div className="cart_item_color cart_info_col">
                        <div className="cart_item_title">Color</div>
                        <div className="cart_item_text">
                          <span style={{ backgroundColor: "#999999" }} />
                          Silver
                        </div>
                      </div>
                      <div className="cart_item_quantity cart_info_col">
                        <div className="cart_item_title">Quantity</div>
                        <div className="cart_item_text">1</div>
                      </div>
                      <div className="cart_item_price cart_info_col">
                        <div className="cart_item_title">Price</div>
                        <div className="cart_item_text">$2000</div>
                      </div>
                      <div className="cart_item_total cart_info_col">
                        <div className="cart_item_title">Total</div>
                        <div className="cart_item_text">$2000</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Order Total */}
              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">$2000</div>
                </div>
              </div>
              <div className="cart_buttons">
                <button type="button" className="button cart_button_clear">
                  Add to Cart
                </button>
                <button type="button" className="button cart_button_checkout">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
    
}
export default CartScreen;
