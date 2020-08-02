import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer, productSaveReducer, productDetailsReducer, productDeleteReducer } from './reducers/productReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import { userSignInReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    myOrderListReducer,
    orderListReducer,
    orderDeleteReducer,
} from './reducers/orderReducers';
import { favoriteReducer } from './reducers/FavoriteReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const favoriteItems = Cookie.getJSON('favoriteItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignIn: { userInfo }, favorite: { favoriteItems } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    favorite: favoriteReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;