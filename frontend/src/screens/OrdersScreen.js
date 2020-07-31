import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listOrders, deleteOrder } from '../actions/orderActions';

function OrdersScreen(props) {
  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  //validation user 
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    (userInfo && userInfo.isAdmin) ? dispatch(listOrders()) : props.history.push("/"); //validation user 

    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  return loading ? <div>Loading...</div> :
    <div className="content content-margined">
      <div className="order-header">
        <h2 style={{ textAlign: "center", padding: 30, fontWeight: "bold" }}>Orders Manager</h2>
      </div>
      <div className="ps-cart-listing">
        <table className="table ps-cart__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>PAID AT</th>
              <th>DELIVERED</th>
              <th>DELIVERED AT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ?
              <div style={{ textAlign: "center" }} className="cart-is-empty"><h2>Order is empty</h2></div>
              :
              orders.map(order => (<tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice}</td>
                <td>{order.user.name}</td>
                <td>{order.isPaid.toString()}</td>
                <td>{order.paidAt}</td>
                <td>{order.isDelivered.toString()}</td>
                <td>{order.deliveredAt}</td>
                <td>
                  <Link to={"/order/" + order._id} className="btn btn-info" >Details</Link>
                  {' '}
                  <button type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteHandler(order) }} className="btn btn-danger">Delete</button>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
}
export default OrdersScreen;