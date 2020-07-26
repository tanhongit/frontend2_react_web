import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import data from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
// import React, { /*useState,*/ useEffect } from 'react';
function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;

  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
    };
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }
  return (
    <main className="ps-main">
      <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
        <div className="ps-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <div className="ps-section__header pt-50">
                <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                  - Sign In USER
            </h2>
                <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                  <div className="form-group">
                    <label>
                      Email <sub>*</sub>
                    </label>
                    <input name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} type="email" placeholder />
                  </div>
                  <div className="form-group mb-25">
                    <label>
                      Password <sub>*</sub>
                    </label>
                    <input name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} type="password" placeholder />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="ps-btn">
                      Signin
                  <i className="ps-icon-next" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="ps-section__header pt-50">
                New to user <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your new account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}

export default SigninScreen;
