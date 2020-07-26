import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return <main className="ps-main">
    <div className="ps-contact ps-contact--2 ps-section pt-80 pb-80">
      <div className="ps-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="ps-section__header pt-50">
              <h2 className="ps-section__title" data-mask="CHIKOIQUAN">
                - Create Account
        </h2>
              <form className="ps-contact__form" onSubmit={submitHandler} method="post">
                <div className="form-group">
                  <label>
                    Name <sub>*</sub>
                  </label>
                  <input name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} type="name" placeholder />
                </div>
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
                <div className="form-group mb-25">
                  <label>
                    Password <sub>*</sub>
                  </label>
                  <input name="rePassword" id="rePassword" className="form-control" onChange={(e) => setRePassword(e.target.value)} type="password" placeholder />
                </div>
                <div className="form-group">
                  <button type="submit" className="ps-btn">
                    Register
              <i className="ps-icon-next" />
                  </button>
                </div>
              </form>
            </div>
            <div className="ps-section__header pt-50">
              Already have an account? <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Login Your Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
}
export default RegisterScreen;