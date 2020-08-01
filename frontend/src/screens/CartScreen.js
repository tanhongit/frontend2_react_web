import React, { useEffect } from 'react'
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

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

  let history = useHistory();
  const deleteThisCart = () => {
    Cookie.remove("cartItems");
    history.push('/cart')
    window.location.reload();
  }

  let checkItemCartOutOfStock = checkOutOfStock(cartItems);

  return <div className="ps-content pt-80 pb-80">
    <div className="ps-container">
      <div className="ps-cart-listing">
        <table className="table ps-cart__table">
          <thead>
            <tr>
              <th>All Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>In stock</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              cartItems.length === 0 ?
                <div className="cart-is-empty"><h2>Cart is empty</h2></div>
                :
                cartItems.map(item =>

                  <tr>
                    <td>
                      <a className="ps-product__preview" href={'/product/' + item.product}>
                        <img
                          width='50'
                          className="mr-15"
                          src={"/images/products/" + item.image}
                          alt="product"
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
                        <input title="Nhập Để Đổi Số Lượng" type='number' className="form-control" type="text" value={item.qty <= item.countInStock && item.qty > 0 ? item.qty : '1'} onChange={(e) => dispatch(addToCart(item.product, e.target.value))} min="1" step="1" max={item.countInStock} />
                      </div>

                    </td>
                    <td>{item.countInStock === 0 ? <b style={{ color: "red" }}>{item.countInStock}</b> : item.countInStock}</td>
                    <td>{item.qty <= item.countInStock && item.qty > 0 ? item.qty * item.price : item.price} Đ</td>
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
              <a href='/' className="ps-btn ps-btn--gray" style={{ textAlign: "center" }}>Continue Shopping</a>
            </div>
            <div className="form-group">
              <button disabled={cartItems.length === 0} onClick={() => { if (window.confirm('Are you sure delete this cart?')) deleteThisCart() }} className="ps-btn ps-btn--gray" style={{ textAlign: "center" }}>Delete This Cart</button>
            </div>
          </div>
          <div className="ps-cart__total">
            <h3>
              Total Price: <span> {cartItems.reduce((a, c) => c.qty <= c.countInStock && c.qty > 0 ? a + c.price * c.qty : a + c.price, 0)}</span>
            </h3>
            {checkItemCartOutOfStock !== 0 && <div style={{ textAlign: "center", paddingBottom: 20, fontWeight: "bold", color: "red" }}>Shopping cart has a few products out of stock. Couldn't order.</div>}
            <button onClick={checkoutHandler} className="ps-btn" disabled={cartItems.length === 0 || checkItemCartOutOfStock !== 0}>
              Proceed to Checkout <i className="ps-icon-next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;

}
export default CartScreen;

function checkOutOfStock(cartItems) {
  let checkItemCartOutOfStock = 0;
  cartItems.forEach(element => {
    element.countInStock === 0 && checkItemCartOutOfStock++;
    return checkItemCartOutOfStock;
  });
  return checkItemCartOutOfStock;
}
