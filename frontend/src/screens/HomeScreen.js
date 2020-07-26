import React, { /*useState,*/ useEffect } from 'react'
// import axios from "axios";
// import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

function HomeScreen(props) {
  // const [products, setProducts] = useState([]);
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
    dispatch(listProducts());

    return () => {

    };
  }, [])
  return (
    loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <div>
          <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
            <div className="ps-container">
              <div className="ps-section__content pb-50">
                <div
                  className="masonry-wrapper"
                  data-col-md={4}
                  data-col-sm={2}
                  data-col-xs={1}
                  data-gap={30}
                  data-radio="100%"
                >
                  <div className="ps-masonry">
                    <div className='row'>
                      <div className="grid-item kids">
                        <div className="grid-item__content-wrapper">
                          <div className="ps-shoe mb-30">
                            <div className="ps-shoe__thumbnail">
                              <div className="ps-badge">
                                <span>New</span>
                              </div>
                              <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                <span>-35%</span>
                              </div>
                              <a className="ps-shoe__favorite" href="#">
                                <i className="ps-icon-heart" />
                              </a>
                              <img src="images/shoe/1.jpg" alt />
                              <a className="ps-shoe__overlay" href="product-detail.html" />
                            </div>
                            <div className="ps-shoe__content">
                              <div className="ps-shoe__detail">
                                <a className="ps-shoe__name" href="#">
                                  Air Jordan 7 Retro
                              </a>
                                <p className="ps-shoe__categories">
                                  <a href="#">Men shoes</a>,<a href="#"> Nike</a>,
                                <a href="#"> Jordan</a>
                                </p>
                                <span className="ps-shoe__price">
                                  <del>£220</del> £ 120
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-item kids">
                        <div className="grid-item__content-wrapper">
                          <div className="ps-shoe mb-30">
                            <div className="ps-shoe__thumbnail">
                              <div className="ps-badge">
                                <span>New</span>
                              </div>
                              <div className="ps-badge ps-badge--sale ps-badge--2nd">
                                <span>-35%</span>
                              </div>
                              <a className="ps-shoe__favorite" href="#">
                                <i className="ps-icon-heart" />
                              </a>
                              <img src="images/shoe/1.jpg" alt />
                              <a className="ps-shoe__overlay" href="product-detail.html" />
                            </div>
                            <div className="ps-shoe__content">
                              <div className="ps-shoe__detail">
                                <a className="ps-shoe__name" href="#">
                                  Air Jordan 7 Retro
                              </a>
                                <p className="ps-shoe__categories">
                                  <a href="#">Men shoes</a>,<a href="#"> Nike</a>,
                                <a href="#"> Jordan</a>
                                </p>
                                <span className="ps-shoe__price">
                                  <del>£220</del> £ 120
                              </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div>
                </div>
              </div>
            </div>
          </div>
        </div>);
}

export default HomeScreen;
