import axios from "axios";
import Axios from "axios";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_FILTER_BY_CATE, PRODUCT_ORDER_BY_PRICE } from "../constants/productConstants";

// const listProducts = () => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST });
//         const { data } = await axios.get('/api/products');
//         dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
//     }
// };

const listProducts = (
    category = '',
    searchKeyword = '',
    sortOrder = ''
) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get(
            '/api/products?category=' +
            category +
            '&searchKeyword=' +
            searchKeyword +
            '&sortOrder=' +
            sortOrder
        );
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get('/api/products/' + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
};

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const {
            userSignin: { userInfo },
        } = getState();
        if (!product._id) {
            const { data } = await Axios.post('/api/products', product, {
                headers: {
                    Authorization: 'TanHong ' + userInfo.token,
                },
            });
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put(
                '/api/products/' + product._id,
                product,
                {
                    headers: {
                        Authorization: 'TanHong ' + userInfo.token,
                    },
                }
            );
            dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
        const {
            userSignin: { userInfo },
        } = getState();
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete('/api/products/' + productId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
    }
};

const filterProducts = (products, category) => (dispatch) => {
    dispatch({
        type: PRODUCT_FILTER_BY_CATE,
        payload: {
            category: category,
            items:
                category === ""
                    ? products
                    : products.filter((x) => x.category.indexOf(category) >= 0),
        },
    });
};

const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === "lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                    ? -1
                    : 1
        );
    }
    console.log(sortedProducts);
    dispatch({
        type: PRODUCT_ORDER_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};


export { listProducts, detailsProduct, saveProduct, deleteProduct, filterProducts, sortProducts };