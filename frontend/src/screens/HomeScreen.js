import React, { /*useState,*/ useEffect } from 'react'
// import axios from "axios";
// import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

function HomeScreen(props) {
    // const [products, setProducts] = useState([]);
    const productList = useSelector(state => state.productList);
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
                <div role="main" className="main shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2><a href="#">Sản Phẩm <strong>Mới</strong></a></h2>
                                    </div>
                                    <ul className="products product-thumb-info-list">
                                        {products.map(product =>
                                            <li className="col-md-3 col-sm-6 col-xs-12 product">
                                                <a href="shop-product-sidebar.html">
                                                    <span className="onsale">Sale!</span>
                                                </a>
                                                <span className="product-thumb-info">
                                                    <a href="shop-cart.html" className="add-to-cart-product">
                                                        <span><i className="fa fa-shopping-cart"></i> Add to Cart</span>
                                                    </a>
                                                    <a href={'product/' + product._id}>
                                                        <span className="product-thumb-info-image">
                                                            <span className="product-thumb-info-act">
                                                                <span className="product-thumb-info-act-left"><em>View</em></span>
                                                                <span className="product-thumb-info-act-right"><em><i className="fa fa-plus"></i> Details</em></span>
                                                            </span>
                                                            <img alt="" className="img-responsive" src="/images/office-2.jpg" />
                                                        </span>
                                                    </a>
                                                    <span className="product-thumb-info-content">
                                                        <a href={'product/' + product._id}>
                                                            <h4>{product.product_name}</h4>
                                                            <span className="price">
                                                                <del><span className="amount">{product.product_price}</span></del>
                                                                <ins><span className="amount">{product.product_price}</span></ins>
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
