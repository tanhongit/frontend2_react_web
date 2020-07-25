import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import data from '../data';
import { useSelector, useDispatch } from 'react-redux';
// import React, { /*useState,*/ useEffect } from 'react';
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
            <div style={{textAlign: "center" }}>
                <Link className="button cart_button" to="/">Back to result</Link>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error} </div>
            ) : (
                        <div>
                            {/* Single Product */}
                            <div className="single_product">
                                <div className="container">
                                    <div className="row">
                                        {/* Images */}
                                        <div className="col-lg-2 order-lg-1 order-2">
                                            <ul className="image_list">
                                                <li data-image="//images/single_4.jpg">
                                                    <img src="/images/single_4.jpg" alt />
                                                </li>
                                                <li data-image="/images/single_2.jpg">
                                                    <img src="/images/single_2.jpg" alt />
                                                </li>
                                                <li data-image="/images/single_3.jpg">
                                                    <img src="/images/single_3.jpg" alt />
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Selected Image */}
                                        <div className="col-lg-5 order-lg-2 order-1">
                                            <div className="image_selected">
                                                <img src="/images/single_4.jpg" alt />
                                            </div>
                                        </div>
                                        {/* Description */}
                                        <div className="col-lg-5 order-3">
                                            <div className="product_description">
                                                <div className="product_category">Laptops</div>
                                                <div className="product_name">MacBook Air 13</div>
                                                <div className="rating_r rating_r_4 product_rating">
                                                    <i />
                                                    <i />
                                                    <i />
                                                    <i />
                                                    <i />
                                                </div>
                                                <div className="product_text">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Maecenas fermentum. laoreet turpis, nec sollicitudin dolor
                                                        cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi
                                                        tellus cursus urna, eget dictum lacus turpis.
                            </p>
                                                </div>
                                                <div className="order_info d-flex flex-row">
                                                    <form action="#">
                                                        <div className="clearfix" style={{ zIndex: 1000 }}>
                                                            {/* Product Quantity */}
                                                            <div className="product_quantity clearfix">
                                                                <span>Quantity: </span>
                                                                <input
                                                                    id="quantity_input"
                                                                    type="text"
                                                                    pattern="[0-9]*"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="quantity_buttons">
                                                                    <div
                                                                        id="quantity_inc_button"
                                                                        className="quantity_inc quantity_control"
                                                                    >
                                                                        <i className="fas fa-chevron-up" />
                                                                    </div>
                                                                    <div
                                                                        id="quantity_dec_button"
                                                                        className="quantity_dec quantity_control"
                                                                    >
                                                                        <i className="fas fa-chevron-down" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Product Color */}
                                                            <ul className="product_color">
                                                                <li>
                                                                    <span>Color: </span>
                                                                    <div className="color_mark_container">
                                                                        <div id="selected_color" className="color_mark" />
                                                                    </div>
                                                                    <div className="color_dropdown_button">
                                                                        <i className="fas fa-chevron-down" />
                                                                    </div>
                                                                    <ul className="color_list">
                                                                        <li>
                                                                            <div
                                                                                className="color_mark"
                                                                                style={{ background: "#999999" }}
                                                                            />
                                                                        </li>
                                                                        <li>
                                                                            <div
                                                                                className="color_mark"
                                                                                style={{ background: "#b19c83" }}
                                                                            />
                                                                        </li>
                                                                        <li>
                                                                            <div
                                                                                className="color_mark"
                                                                                style={{ background: "#000000" }}
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="product_price">$2000</div>
                                                        <div className="button_container">
                                                            <button type="button" className="button cart_button">
                                                                Add to Cart
                                </button>
                                                            <div className="product_fav">
                                                                <i className="fas fa-heart" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Recently Viewed */}
                            <div className="viewed">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="viewed_title_container">
                                                <h3 className="viewed_title">Recently Viewed</h3>
                                                <div className="viewed_nav_container">
                                                    <div className="viewed_nav viewed_prev">
                                                        <i className="fas fa-chevron-left" />
                                                    </div>
                                                    <div className="viewed_nav viewed_next">
                                                        <i className="fas fa-chevron-right" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="viewed_slider_container">
                                                {/* Recently Viewed Slider */}
                                                <div className="owl-carousel owl-theme viewed_slider">
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_1.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">
                                                                    $225<span>$300</span>
                                                                </div>
                                                                <div className="viewed_name">
                                                                    <a href="#">Beoplay H7</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_2.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">$379</div>
                                                                <div className="viewed_name">
                                                                    <a href="#">LUNA Smartphone</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_3.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">$225</div>
                                                                <div className="viewed_name">
                                                                    <a href="#">Samsung J730F...</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item is_new d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_4.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">$379</div>
                                                                <div className="viewed_name">
                                                                    <a href="#">Huawei MediaPad...</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_5.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">
                                                                    $225<span>$300</span>
                                                                </div>
                                                                <div className="viewed_name">
                                                                    <a href="#">Sony PS4 Slim</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* Recently Viewed Item */}
                                                    <div className="owl-item">
                                                        <div className="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                                            <div className="viewed_image">
                                                                <img src="/images/view_6.jpg" alt />
                                                            </div>
                                                            <div className="viewed_content text-center">
                                                                <div className="viewed_price">$375</div>
                                                                <div className="viewed_name">
                                                                    <a href="#">Speedlink...</a>
                                                                </div>
                                                            </div>
                                                            <ul className="item_marks">
                                                                <li className="item_mark item_discount">-25%</li>
                                                                <li className="item_mark item_new">new</li>
                                                            </ul>
                                                        </div>
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
