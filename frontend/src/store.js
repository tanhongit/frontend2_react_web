import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer, productSaveReducer, productDetailsReducer, productDeleteReducer } from './reducers/productReducers';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {cart: {cartItems, shipping: {}, payment: {}}, userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer, 
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    userUpdate: userUpdateReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;