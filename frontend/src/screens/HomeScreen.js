import React, { useState, useEffect } from 'react'
// import axios from "axios";
// import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
function HomeScreen(props) {
  // const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    // const fetchData = async () => {
    //     const { data } = await axios.get("api/products");
    //     setProducts(data);
    // }
    // //call
    // fetchData();
    dispatch(listProducts(category));

    return () => {

    };
  }, [category])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  return (
    <>
      <main className="ps-main">
        <div className="ps-products-wrap pt-80 pb-80">
          <div className="ps-products" data-mh="product-listing">
            <div className="ps-product-action">
              {/* <div className="ps-product__filter">
                    <select className="ps-select selectpicker">
                      <option value={1}>Shortby</option>
                      <option value={2}>Name</option>
                      <option value={3}>Price (Low to High)</option>
                      <option value={3}>Price (High to Low)</option>
                    </select>
                  </div> */}
              {/* <div className="ps-pagination">
                <ul className="pagination">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="container">
              {category && <h2>{category}</h2>}
              <div className="row">
                <div className="col-md-7">
                  <div>SEACRH PRODUCT: </div>
                  <form onSubmit={submitHandler}>
                    <input placeholder="Search product here..." className="form-control" onChange={(e) => setSearchKeyword(e.target.value)} />
                    <button className="btn btn-success" value="search" type="submit">Search<i class="ti-search"></i></button>
                  </form>
                </div>
                <div className="col-md-3">
                  SORT PRODUCT BY: {' '}
                  <select className="form-control" name="sortOrder" onChange={sortHandler}>
                    <option value="">Newest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                  </select>
                </div>
              </div>
            </div>
            {loading ? <div>Loading...</div> :
              error ? <div>{error}</div> : (
                <div className="ps-product__columns">
                  {/* product */}
                  {products.map(product =>
                    <div className="ps-product__column">
                      <div className="ps-shoe mb-30">
                        <div className="ps-shoe__thumbnail">
                          <a className="ps-shoe__favorite" href="#">
                            <i className="ps-icon-heart" />
                          </a>
                          <Link to={'/product/' + product._id}><img src={"/images/products/" + product.image} alt='product' /></Link>
                          <a className="ps-shoe__overlay" href={'/product/' + product._id} />
                        </div>
                        <div className="ps-shoe__content">
                          <div class="ps-shoe__variants">
                            {product.countInStock >= 1 ?
                              <a href={"/cart/" + product._id + "?qty=1"} className='ps-btn btn btn-primary btn-add-to-cart-home'>Add to Cart</a>
                              : <button disabled className="btn btn-info">Out of stock</button>}

                          </div>
                          <div className="ps-shoe__detail">
                            <a className="ps-shoe__name" href={'/product/' + product._id}>
                              {product.product_name}
                            </a>
                            <p className="ps-shoe__categories">
                              Cate: <a href="#">{product.category}</a>, Brand: <a href="#">{product.brand}</a>.
                        </p>
                            <span style={{ paddingTop: 15 }} className="ps-shoe__price"> <Link to={'/product/' + product._id}>{product.product_price} Đ</Link></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* end product */}
                </div>
              )}
            {/* <div className="ps-product-action">
                  <div className="ps-product__filter">
                    <select className="ps-select selectpicker">
                      <option value={1}>Shortby</option>
                      <option value={2}>Name</option>
                      <option value={3}>Price (Low to High)</option>
                      <option value={3}>Price (High to Low)</option>
                    </select>
                  </div>
                  <div className="ps-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-left" />
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">...</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
          </div>
          <div className="ps-sidebar" data-mh="product-listing">
            <aside className="ps-widget--sidebar ps-widget--category">
              <div className="ps-widget__header">
                <h3>Category</h3>
              </div>
              <div className="ps-widget__content">
                <ul className="ps-list--checked">
                  <li className="current">
                    <a href="product-listing.html">Life(521)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Running(76)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Baseball(21)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Football(105)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Soccer(108)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Trainning &amp; game(47)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">More</a>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="ps-widget--sidebar ps-widget--filter">
              <div className="ps-widget__header">
                <h3>Category</h3>
              </div>
              <div className="ps-widget__content">
                <div
                  className="ac-slider"
                  data-default-min={300}
                  data-default-max={2000}
                  data-max={3450}
                  data-step={50}
                  data-unit="$"
                />
                <p className="ac-slider__meta">
                  Price:
            <span className="ac-slider__value ac-slider__min" />-
            <span className="ac-slider__value ac-slider__max" />
                </p>
                <a className="ac-slider__filter ps-btn" href="#">
                  Filter
          </a>
              </div>
            </aside>
            <aside className="ps-widget--sidebar ps-widget--category">
              <div className="ps-widget__header">
                <h3>Sky Brand</h3>
              </div>
              <div className="ps-widget__content">
                <ul className="ps-list--checked">
                  <li className="current">
                    <a href="product-listing.html">Nike(521)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Adidas(76)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Baseball(69)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Gucci(36)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Dior(108)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">B&amp;G(108)</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Louis Vuiton(47)</a>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="ps-widget--sidebar ps-widget--category">
              <div className="ps-widget__header">
                <h3>Width</h3>
              </div>
              <div className="ps-widget__content">
                <ul className="ps-list--checked">
                  <li className="current">
                    <a href="product-listing.html">Narrow</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Regular</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Wide</a>
                  </li>
                  <li>
                    <a href="product-listing.html">Extra Wide</a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main >
    </>
  );
}

export default HomeScreen;
