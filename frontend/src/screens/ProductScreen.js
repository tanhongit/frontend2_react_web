import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props) {
  // console.log(props.match.params.id);
  // const product = data.products.find(x => x._id === props.match.params.id);
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  }

  return (
    <div>
      <div style={{ paddingTop: 25, textAlign: "center" }}>
        <Link className="button ps-btn mb-10" to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
            <div>
              <div className="ps-product--detail pt-60">
                <div className="ps-container">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 col-lg-offset-1">
                      <div className="ps-product__thumbnail">
                        <div className="ps-product__preview">
                          <div className="ps-product__variants">
                            <div className="item">
                              <img src={"/images/products/" + product.image} alt='product' />
                            </div>
                            <div className="item">
                              <img src={"/images/products/" + product.image} alt='product' />
                            </div>
                            <div className="item">
                              <img src={"/images/products/" + product.image} alt='product' />
                            </div>
                            <div className="item">
                              <img src={"/images/products/" + product.image} alt='product' />
                            </div>
                          </div>
                        </div>
                        <div className="ps-product__image">
                          <div className="item">
                            <img src={"/images/products/" + product.image} alt='product'
                              className="zoom"
                              data-zoom-image={"/images/products/" + product.image}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ps-product__thumbnail--mobile">
                        <div className="ps-product__main-img">
                          <img src={"/images/products/" + product.image} alt="product" />
                        </div>
                      </div>
                      <div className="ps-product__info">
                        <h1>{product.name}</h1>
                        <p className="ps-product__category">
                          Cate: <a href={'/category/' + product.category}>{product.category}</a> <br /> Brand: <a href="#">{product.brand}</a>.
                        </p>
                        <h3 className="ps-product__price">
                          {product.price} Đ <del>500 Đ</del>
                        </h3>
                        <div className="ps-product__block ps-product__quickview">
                          <h4>QUICK REVIEW</h4>
                          <p>
                            {product.description}
                          </p>
                        </div>
                        <div className="ps-product__block ps-product__size">
                          Qty:{' '}
                          <select className="ps-select selectpicker"
                            value={qty}
                            onChange={(e) => {
                              setQty(e.target.value);
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="ps-product__shopping">
                          {product.countInStock >= 1 ?
                            <button className="ps-btn mb-10" onClick={handleAddToCart}>Add to cart<i className="ps-icon-next" /></button>
                            : <button disabled className="btn btn-info">Out of stock</button>}

                          <div className="ps-product__actions">
                            <a className="mr-10" href={"/favorite/" + props.match.params.id} >
                              <i className="ps-icon-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="clearfix" />
                      <div className="ps-product__content mt-50">
                        <ul className="tab-list" role="tablist">
                          <li className="active">
                            <a
                              href="#tab_01"
                              aria-controls="tab_01"
                              role="tab"
                              data-toggle="tab"
                            >
                              Overview</a>
                          </li>
                          <li>
                            <a
                              href="#tab_04"
                              aria-controls="tab_04"
                              role="tab"
                              data-toggle="tab"
                            >
                              ADDITIONAL</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content mb-60">
                        <div className="tab-pane active" role="tabpanel" id="tab_01">
                          <p>
                            {product.description}
                          </p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab_04">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows={6}
                              placeholder="Enter your addition here..."
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <button className="ps-btn" type="button">
                              Submit
                </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}

export default ProductScreen;
