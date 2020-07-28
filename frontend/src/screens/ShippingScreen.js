import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  //validation user 
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (!userInfo) {
      props.history.push("/");
    }
    return () => {
    };
  }, [userInfo])

  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <main className="ps-main">
      <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
        <div className="ps-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="ps-section__header pt-50">
                <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                  - Shipping
        </h2>
                <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                  <div className="form-group">
                    <label>
                      Address
                    </label>
                    <input required name="address" id="address" className="form-control" onChange={(e) => setAddress(e.target.value)} type="text" placeholder />
                  </div>
                  <div className="form-group">
                    <label>
                      City
                    </label>
                    <input required name="city" id="city" className="form-control" onChange={(e) => setCity(e.target.value)} type="text" placeholder />
                  </div>
                  <div className="form-group mb-25">
                    <label>
                      Postal Code
                    </label>
                    <input required name="postalCode" id="postalCode" className="form-control" onChange={(e) => setPostalCode(e.target.value)} type="text" placeholder />
                  </div>
                  <div className="form-group mb-25">
                    <label>
                      Country
                    </label>
                    <input required name="country" id="country" className="form-control" onChange={(e) => setCountry(e.target.value)} type="text" placeholder />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="ps-btn">
                      Continue
              <i className="ps-icon-next" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
}
export default ShippingScreen;