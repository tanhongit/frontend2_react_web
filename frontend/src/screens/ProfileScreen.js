import React, { useState, useEffect } from 'react';
import { logout, update } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listMyOrders } from '../actions/orderActions';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignIn = useSelector(state => state.userSignIn);
  const { userInfo } = userSignIn;

  //logout
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }

  //update
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    else {
      props.history.push("/");
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  return <main className="ps-main">
    <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
      <div className="ps-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="ps-section__header pt-50">
              <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                - User Profile Manager</h2>
              <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {success && <div>Profile Saved Successfully.</div>}
                <div className="form-group">
                  <label>
                    Name <sub>*</sub>
                  </label>
                  <input value={name} required name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} type="name" placeholder />
                </div>
                <div className="form-group">
                  <label>
                    Email <sub>*</sub>
                  </label>
                  <input value={email} required name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" placeholder />
                </div>
                <div className="form-group">
                  <label>
                    Password <sub>*</sub>
                  </label>
                  <input value={password} name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder />
                </div>
                <div className="form-group">
                  <button type="submit" className="ps-btn">
                    Update
            <i className="ps-icon-next" />
                  </button>
                  <span style={{ paddingRight: 30, paddingLeft: 30 }}>or</span> <button type="button" onClick={handleLogout} className="btn btn-danger">Logout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ps-container">
      <h2 style={{ textAlign: "center", padding: 30, fontWeight: "bold" }}>My Orders List</h2>
      <div className="ps-cart-listing">
        {
          loadingOrders ? <div>Loading...</div> :
            errorOrders ? <div>{errorOrders} </div> :
              <table className="table ps-cart__table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>{order.totalPrice} VND</td>
                    <td>{order.isPaid}</td>
                    <td>
                      <Link className="btn btn-info" to={"/order/" + order._id}>DETAILS</Link>
                    </td>
                  </tr>)}
                </tbody>
              </table>
        }
      </div>
    </div>
  </main>
}

export default ProfileScreen;