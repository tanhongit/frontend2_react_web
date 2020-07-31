import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartAction';
import CheckoutSteps from '../components/CheckoutSteps';

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push('placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <main className="ps-main">
        <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
          <div className="ps-container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <div className="ps-section__header pt-50">
                  <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                    - Payment
            </h2>
                  <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                    <h4>Choose your option</h4>
                    <div className="form-group">
                      <label for="paymentPaypal">
                        <div className="paymentScreen"><img src="/images/paypal-512.jpg"></img> Paypal</div>
                      </label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="paymentPaypal"
                        value="paypal"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="paymentMasterCart">
                        <div className="paymentScreen"><img src="/images/mastercart.png"></img> Master Cart</div>
                      </label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="paymentMasterCart"
                        value="master-cart"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="paymentVisa">
                        <div className="paymentScreen"><img src="/images/visa-icon-0.png"></img> Visa</div>
                      </label>
                      <input
                        type="radio"
                        name="paymentMethod"
                        id="paymentVisa"
                        value="visa"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
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
  );
}
export default PaymentScreen;
