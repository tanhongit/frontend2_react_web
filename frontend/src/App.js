import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header id="header">
        <div className="container">
          <div className="logo">
            <Link to='/'>
              <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" src="/images/logo-chikoiquan-tan-hong-it.png" />
            </Link>
          </div>
          <div className="search">
            <form id="searchForm" action="page-search-results.html" method="get">
              <div className="input-group">
                <input type="text" className="form-control search" name="q" id="q" placeholder="Search..." required />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                </span>
              </div>
            </form>
          </div>
          <nav>
            <ul className="nav nav-pills nav-top">
              <li>
                <Link to='/about'><i className="fa fa-angle-right"></i>About Us</Link>
              </li>
              <li>
              <Link to='/contact'><i className="fa fa-angle-right"></i>Contact Us</Link>
              </li>
              <li className="phone">
                <span><i className="fa fa-phone"></i>(123) 456-7890</span>
              </li>
            </ul>
          </nav>
          <button className="btn btn-responsive-nav btn-inverse" data-toggle="collapse" data-target=".nav-main-collapse">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="navbar-collapse nav-main-collapse collapse">
          <div className="container">
            <ul className="social-icons">
              <li className="facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook">Facebook</a></li>
              <li className="twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter">Twitter</a></li>
              <li className="linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin">Linkedin</a></li>
            </ul>
            <nav className="nav-main mega-menu">
              <ul className="nav nav-pills nav-main" id="mainMenu">
                <li className="dropdown active">
                  <a className="dropdown-toggle" href="index.html">
                    Home
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Home - Default</a></li>
                    <li><a href="index-1.html">Home - Corporate <span className="tip">hot</span></a></li>
                    <li><a href="index-2.html">Home - Color</a></li>
                    <li><a href="index-3.html">Home - Light</a></li>
                    <li><a href="index-4.html">Home - Video</a></li>
                    <li><a href="index-5.html">Home - Video - Light</a></li>
                    <li><a href="index-one-page.html">One Page Website</a></li>
                    <li className="dropdown-submenu">
                      <a href="#">Sliders</a>
                      <ul className="dropdown-menu">
                        <li><a href="index.html">Revolution Slider</a></li>
                        <li><a href="index-slider-2.html">Nivo Slider</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shortcodes.html">Shortcodes</a>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    About Us
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="about-us-basic.html">About Us - Basic</a></li>
                    <li><a href="about-me.html">About Me</a></li>
                  </ul>
                </li>
                <li className="dropdown mega-menu-item mega-menu-fullwidth">
                  <a className="dropdown-toggle" href="#">
                    Features
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="mega-menu-content">
                        <div className="row">
                          <div className="col-md-3">
                            <ul className="sub-menu">
                              <li>
                                <span className="mega-menu-sub-title">Main Features</span>
                                <ul className="sub-menu">
                                  <li><a href="feature-pricing-tables.html">Pricing Tables</a></li>
                                  <li><a href="feature-icons.html">Icons</a></li>
                                  <li><a href="feature-animations.html">Animations</a></li>
                                  <li><a href="feature-typography.html">Typography</a></li>
                                  <li><a href="feature-grid-system.html">Grid System</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="sub-menu">
                              <li>
                                <span className="mega-menu-sub-title">Headers</span>
                                <ul className="sub-menu">
                                  <li><a href="headers-overview.html">Overview</a></li>
                                  <li><a href="index-header-2.html">Header 2</a></li>
                                  <li><a href="index-header-3.html">Header 3</a></li>
                                  <li><a href="index-header-4.html">Header 4</a></li>
                                  <li><a href="index-header-5.html">Header 5</a></li>
                                  <li><a href="index-header-6.html">Header 6</a></li>
                                  <li><a href="index-header-7.html">Header 7 - Below Slider</a></li>
                                  <li><a href="index-header-8.html">Header 8 - Full Video</a></li>
                                  <li><a href="index-header-9.html">Header 9 - Narrow</a></li>
                                  <li><a href="index-header-10.html">Header 10 - Always Sticky</a></li>
                                  <li><a href="index-header-11.html">Header 11 - Transparent</a></li>
                                  <li><a href="index-header-12.html">Header 12 - Semi Transparent</a></li>
                                  <li><a href="index-header-13.html">Header 13 - Semi Transparent - Light</a></li>
                                  <li><a href="index-header-14.html">Header 14 - Full-Width</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="sub-menu">
                              <li>
                                <span className="mega-menu-sub-title">Header Account</span>
                                <ul className="sub-menu">
                                  <li><a href="index-header-signin.html">Header - Sign In / Sign Up</a></li>
                                  <li><a href="index-header-logged.html">Header - Logged</a></li>
                                </ul>
                                <span className="mega-menu-sub-title">Footers</span>
                                <ul className="sub-menu">
                                  <li><a href="index.html#footer">Footer 1</a></li>
                                  <li><a href="index-footer-2.html#footer">Footer 2</a></li>
                                  <li><a href="index-footer-3.html#footer">Footer 3</a></li>
                                  <li><a href="index-footer-4.html#footer">Footer 4</a></li>
                                  <li><a href="index-footer-5.html#footer">Footer 5 - Light</a></li>
                                  <li><a href="index-footer-6.html#footer">Footer 6 - Light Narrow</a></li>
                                  <li><a href="index-footer-7.html#footer">Footer 7 - Color</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="sub-menu">
                              <li>
                                <span className="mega-menu-sub-title">Admin Extension <em className="not-included">(Not Included)</em></span>
                                <ul className="sub-menu">
                                  <li><a href="feature-admin-forms-basic.html">Forms Basic</a></li>
                                  <li><a href="feature-admin-forms-advanced.html">Forms Advanced</a></li>
                                  <li><a href="feature-admin-forms-wizard.html">Forms Wizard</a></li>
                                  <li><a href="feature-admin-forms-code-editor.html">Code Editor</a></li>
                                  <li><a href="feature-admin-tables-advanced.html">Tables Advanced</a></li>
                                  <li><a href="feature-admin-tables-responsive.html">Tables Responsive</a></li>
                                  <li><a href="feature-admin-tables-editable.html">Tables Editable</a></li>
                                  <li><a href="feature-admin-tables-ajax.html">Tables Ajax</a></li>
                                  <li><a href="feature-admin-charts.html">Charts</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    Portfolio
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="portfolio-4-columns.html">4 Columns</a></li>
                    <li><a href="portfolio-3-columns.html">3 Columns</a></li>
                    <li><a href="portfolio-2-columns.html">2 Columns</a></li>
                    <li><a href="portfolio-lightbox.html">Portfolio Lightbox</a></li>
                    <li><a href="portfolio-timeline.html">Portfolio Timeline</a></li>
                    <li><a href="portfolio-full-width.html">Portfolio Full Width</a></li>
                    <li><a href="portfolio-single-project.html">Single Project</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    Pages
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-submenu">
                      <a href="#">Shop</a>
                      <ul className="dropdown-menu">
                        <li><a href="shop-full-width.html">Shop - Full Width</a></li>
                        <li><a href="shop-sidebar.html">Shop - Sidebar</a></li>
                        <li><a href="shop-product-full-width.html">Shop - Product Full Width</a></li>
                        <li><a href="shop-product-sidebar.html">Shop - Product Sidebar</a></li>
                        <li><a href="shop-cart.html">Shop - Cart</a></li>
                        <li><a href="shop-login.html">Shop - Login</a></li>
                        <li><a href="shop-checkout.html">Shop - Checkout</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href="#">Blog</a>
                      <ul className="dropdown-menu">
                        <li><a href="blog-full-width.html">Blog Full Width</a></li>
                        <li><a href="blog-large-image.html">Blog Large Image</a></li>
                        <li><a href="blog-medium-image.html">Blog Medium Image</a></li>
                        <li><a href="blog-timeline.html">Blog Timeline</a></li>
                        <li><a href="blog-post.html">Single Post</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href="#">Layouts</a>
                      <ul className="dropdown-menu">
                        <li><a href="page-full-width.html">Full width</a></li>
                        <li><a href="page-left-sidebar.html">Left sidebar</a></li>
                        <li><a href="page-right-sidebar.html">Right sidebar</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href="#">Extra</a>
                      <ul className="dropdown-menu">
                        <li><a href="page-404.html">404 Error</a></li>
                        <li><a href="page-coming-soon.html">Coming Soon</a></li>
                        <li><a href="page-maintenance-mode.html">Maintenance Mode</a></li>
                        <li><a href="sitemap.html">Sitemap</a></li>
                      </ul>
                    </li>
                    <li><a href="page-custom-header.html">Custom Header</a></li>
                    <li><a href="page-team.html">Team</a></li>
                    <li><a href="page-services.html">Services</a></li>
                    <li><a href="page-careers.html">Careers</a></li>
                    <li><a href="page-our-office.html">Our Office</a></li>
                    <li><a href="page-faq.html">FAQ</a></li>
                    <li><a href="page-login.html">Login / Register</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" href="#">
                    Contact Us
										<i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="contact-us.html">Contact Us - Basic</a></li>
                    <li><a href="contact-us-advanced.php">Contact Us - Advanced</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Route path='/' exact={true} component={HomeScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
    </BrowserRouter>
  );
}

export default App;
