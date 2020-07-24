import React from 'react'
import data from '../data';
function HomeScreen(props) {
    return (
        <div role="main" class="main shop">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12">
                                <h2><a href="#">Sản Phẩm <strong>Mới</strong></a></h2>
                            </div>
                            <ul class="products product-thumb-info-list">
                                {data.products.map(product =>
                                    <li class="col-md-3 col-sm-6 col-xs-12 product">
                                        <a href="shop-product-sidebar.html">
                                            <span class="onsale">Sale!</span>
                                        </a>
                                        <span class="product-thumb-info">
                                            <a href="shop-cart.html" class="add-to-cart-product">
                                                <span><i class="fa fa-shopping-cart"></i> Add to Cart</span>
                                            </a>
                                            <a href={'product/' + product._id}>
                                                <span class="product-thumb-info-image">
                                                    <span class="product-thumb-info-act">
                                                        <span class="product-thumb-info-act-left"><em>View</em></span>
                                                        <span class="product-thumb-info-act-right"><em><i class="fa fa-plus"></i> Details</em></span>
                                                    </span>
                                                    <img alt="" class="img-responsive" src="/images/office-2.jpg" />
                                                </span>
                                            </a>
                                            <span class="product-thumb-info-content">
                                                <a href={'product/' + product._id}>
                                                    <h4>{product.product_name}</h4>
                                                    <span class="price">
                                                        <del><span class="amount">{product.product_price}</span></del>
                                                        <ins><span class="amount">{product.product_price}</span></ins>
                                                    </span>
                                                </a>
                                            </span>
                                        </span>
                                    </li>
                                )}
                            </ul></div></div></div></div></div>
    );
}

export default HomeScreen;
