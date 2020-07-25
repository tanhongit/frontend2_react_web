import React, { useEffect, useState } from 'react'
import { addToCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props){

    const cart = useSelector(state=>state.cart);

    const {cartItems} = cart;

    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1
const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    }, []);

    return (
        <div>Cart</div>
    );
}
export default CartScreen;