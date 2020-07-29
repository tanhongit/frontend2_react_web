import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import { logout } from './actions/userActions';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './actions/cartAction';

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  return (
    <BrowserRouter>

      <div>
        <div className="header--sidebar" />
        <header className="header">
          <div className="header__top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>
                    44 Vo Van Ngan, Thu Duc, HCM - Hotline: 804-377-3580
            </p>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-6 col-xs-12 ">
                  <div className="header__actions">
                    <div className="btn-group ps-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >{userInfo ? userInfo.isAdmin ? "Admin: " + userInfo.name : "User: " + userInfo.name : 'Login & Regiser'} <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          {userInfo ? <Link to="/profile">Profile</Link> : <Link to="/signin">Login</Link>}
                        </li>
                        <li>
                          {userInfo ? "" : <Link to="/register">Register</Link>}
                        </li>
                        <li className="menu-item">
                          {userInfo ? <Link onClick={handleLogout} className="button secondary full-width">Logout</Link> : ''}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="container-fluid">
              <div className="navigation__column left">
                <div className="header__logo">
                  <Link className="ps-logo" to="/"><img src="/logo-chikoiquan-tan-hong-it.png" alt="logo"/></Link>
                </div>
              </div>
              <div className="navigation__column center">
                <ul className="main-menu menu">

                  <li className="menu-item menu-item-has-children has-mega-menu">
                    <a href="/">Home <i className="fa fa-angle-down" /></a>
                    <div className="mega-menu">
                      <div className="mega-wrap">
                        <div className="mega-column">
                          <ul className="mega-item mega-features">
                            <li>
                              <a href="#">NEW RELEASES</a>
                            </li>
                            <li>
                              <a href="#">FEATURES SHOES</a>
                            </li>
                            <li>
                              <a href="#">BEST SELLERS</a>
                            </li>
                            <li>
                              <a href="#">NOW TRENDING</a>
                            </li>
                            <li>
                              <a href="#">SUMMER ESSENTIALS</a>
                            </li>
                            <li>
                              <a href="#">
                                MOTHER'S DAY COLLECTION
                        </a>
                            </li>
                            <li>
                              <a href="#">FAN GEAR</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Shoes</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">All Shoes</a>
                            </li>
                            <li>
                              <a href="#">Running</a>
                            </li>
                            <li>
                              <a href="#">Training &amp; Gym</a>
                            </li>
                            <li>
                              <a href="#">Basketball</a>
                            </li>
                            <li>
                              <a href="#">Football</a>
                            </li>
                            <li>
                              <a href="#">Soccer</a>
                            </li>
                            <li>
                              <a href="#">Baseball</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">CLOTHING</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">
                                Compression &amp; Nike Pro
                        </a>
                            </li>
                            <li>
                              <a href="#">Tops &amp; T-Shirts</a>
                            </li>
                            <li>
                              <a href="#">Polos</a>
                            </li>
                            <li>
                              <a href="#">
                                Hoodies &amp; Sweatshirts
                        </a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Vests</a>
                            </li>
                            <li>
                              <a href="#">Pants &amp; Tights</a>
                            </li>
                            <li>
                              <a href="#">Shorts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">Accessories</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">
                                Compression &amp; Nike Pro
                        </a>
                            </li>
                            <li>
                              <a href="#">Tops &amp; T-Shirts</a>
                            </li>
                            <li>
                              <a href="#">Polos</a>
                            </li>
                            <li>
                              <a href="#">
                                Hoodies &amp; Sweatshirts
                        </a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Vests</a>
                            </li>
                            <li>
                              <a href="#">Pants &amp; Tights</a>
                            </li>
                            <li>
                              <a href="#">Shorts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4 className="mega-heading">BRAND</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">NIKE</a>
                            </li>
                            <li>
                              <a href="#">Adidas</a>
                            </li>
                            <li>
                              <a href="#">Dior</a>
                            </li>
                            <li>
                              <a href="#">B&amp;G</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown">
                    <a href="#">Category <i className="fa fa-angle-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-has-children dropdown">
                        <Link to="/category/TraSua">Tra Sua</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/category/NuocUong">Nuoc Uong</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/category/AnVat">Ăn Vặt</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/category/BanhXeo">Bánh Xèo</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children dropdown">
                    <a href="/profile">{userInfo ? userInfo.isAdmin ? "Admin: " + userInfo.name : "User: " + userInfo.name : 'Login & Regiser'} <i className="fa fa-angle-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {userInfo ? <Link to="/profile">Profile</Link> : <Link to="/signin">Login</Link>}
                      </li>
                      <li className="menu-item">
                        {userInfo ? "" : <Link to="/register">Register</Link>}
                      </li>
                      <li className="menu-item">
                        {userInfo && userInfo.isAdmin ? <Link to="/products">Manager Products</Link> : ""}
                      </li>
                      <li className="menu-item">
                        {userInfo && userInfo.isAdmin ? <Link to="/orders">Order Products</Link> : ""}
                      </li>
                      <li className="menu-item">
                        {userInfo ? <Link onClick={handleLogout} className="button secondary full-width">Logout</Link> : ''}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navigation__column right">
                <form className="ps-search--header" action="do_action" method="post">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search Product…"
                  />
                  <button>
                    <i className="ps-icon-search" />
                  </button>
                </form>
                <div className="ps-cart">
                  <a className="ps-cart__toggle" href="/cart">
                    <span>
                      <i>20</i>
                    </span>
                    <i className="ps-icon-shopping-cart" />
                  </a>
                  <div className="ps-cart__listing">
                    <div className="ps-cart__content">
                      {
                        cartItems.length === 0 ?
                          <div style={{ textAlign: "center" }}>Cart is empty</div>
                          :
                          cartItems.map(item =>
                            <div className="ps-cart-item">
                              <a className="ps-cart-item__close" onClick={() => removeFromCartHandler(item.product)} />
                              <div className="ps-cart-item__thumbnail">
                                <a href={"/product/" + item.product} />
                                <img src={"/images/products/" + item.image} alt />
                              </div>
                              <div className="ps-cart-item__content">
                                <a
                                  className="ps-cart-item__title"
                                  href={"/product/" + item.product}
                                >
                                  {item.name}
                                </a>
                                {item.countInStock >= 1 ?
                                  <p>
                                    <span>
                                      Qty:<i>{item.qty <= item.countInStock && item.qty > 0 ? item.qty : 1}</i>
                                    </span>
                                    <span>
                                      Total:<i>{item.qty <= item.countInStock && item.qty > 0 ? item.qty * item.price : item.price}</i>
                                    </span>
                                  </p> : <button disabled className="btn btn-info">Out of stock</button>}
                              </div>
                            </div>
                          )}
                    </div>
                    <div className="ps-cart__footer">
                      <a className="ps-btn" href={userInfo ? '/shipping' : '/signin'}>
                        Check out
                  <i className="ps-icon-arrow-left" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-toggle">
                  <span />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="header-services">
          <div
            className="ps-services owl-slider"
            data-owl-auto="true"
            data-owl-loop="true"
            data-owl-speed={7000}
            data-owl-gap={0}
            data-owl-nav="true"
            data-owl-dots="false"
            data-owl-item={1}
            data-owl-item-xs={1}
            data-owl-item-sm={1}
            data-owl-item-md={1}
            data-owl-item-lg={1}
            data-owl-duration={1000}
            data-owl-mousedrag="on"
          >
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order ChiKoi Shop
      </p>
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order with ChiKoi Shop
      </p>
            <p className="ps-service">
              <i className="ps-icon-delivery" />
              <strong>Free delivery</strong>: Get free standard delivery on every
        order with ChiKoi Shop
      </p>
          </div>
        </div>
      </div>


      <Route path='/' exact={true} component={HomeScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/signin' component={SigninScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/products' component={ProductsScreen} />
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/category/:id" component={HomeScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/orders" component={OrdersScreen} />
      <div>
        <div className="ps-subscribe">
          <div className="ps-container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                <h3>
                  <i className="fa fa-envelope" />
            Sign up to Newsletter
          </h3>
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                <form className="ps-subscribe__form" action="do_action" method="post">
                  <input className="form-control" type="text" placeholder />
                  <button>Sign up now</button>
                </form>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>
                  ...and receive <span>$20</span> coupon for first shopping.
          </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ps-footer bg--cover"
          data-background="/images/image1-1-homepage-1.jpg"
        >
          <div className="ps-footer__content">
            <div className="ps-container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--info">
                    <header>
                      <Link className="ps-logo" to="/"><img src="/logo-chikoiquan-tan-hong-it.png" alt="logo" /></Link>
                      <h3 className="ps-widget__title">Address Office 1</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>44 Vo Van Ngan, Thu Duc, HCM</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:support@store.com">support@store.com</a>
                      </p>
                      <p>Phone: +84123456789</p>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--info second">
                    <header>
                      <h3 className="ps-widget__title">Address Office 2</h3>
                    </header>
                    <footer>
                      <p>
                        <strong>44 Vo Van Ngan, Duc Thu, AAA</strong>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:support@store.com">support@store.com</a>
                      </p>
                      <p>Phone: +84876543210</p>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Find Our store</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--link">
                        <li>
                          <a href="#">Coupon Code</a>
                        </li>
                        <li>
                          <a href="#">SignUp For Email</a>
                        </li>
                        <li>
                          <a href="#">Site Feedback</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Get Help</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--line">
                        <li>
                          <a href="#">Order Status</a>
                        </li>
                        <li>
                          <a href="#">Shipping and Delivery</a>
                        </li>
                        <li>
                          <a href="#">Returns</a>
                        </li>
                        <li>
                          <a href="#">Payment Options</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 ">
                  <aside className="ps-widget--footer ps-widget--link">
                    <header>
                      <h3 className="ps-widget__title">Products</h3>
                    </header>
                    <footer>
                      <ul className="ps-list--line">
                        <li>
                          <a href="#">Shoes</a>
                        </li>
                        <li>
                          <a href="#">Clothing</a>
                        </li>
                        <li>
                          <a href="#">Accessries</a>
                        </li>
                        <li>
                          <a href="#">Football Boots</a>
                        </li>
                      </ul>
                    </footer>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-footer__copyright">
            <div className="ps-container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <p>
                    © All rights Resevered
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                  <ul className="ps-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
