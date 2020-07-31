import Axios from 'axios';
import Cookie from 'js-cookie';
import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from '../constants/favoriteConstants';

const addToFavorite = (productId) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get('/api/products/' + productId);
        dispatch({
            type: FAVORITE_ADD_ITEM, payload: {
                product: data._id,
                name: data.product_name,
                price: data.product_price,
                image: data.image,
                category: data.category,
                countInStock: data.countInStock,
                brand: data.brand,
            }
        });
        const { favorite: { favoriteItems } } = getState();
        Cookie.set('favoriteItems', JSON.stringify(favoriteItems));
    }
    catch (error) {

    }
}

const removeFavorite = (productId) => (dispatch, getState) => {
    dispatch({ type: FAVORITE_REMOVE_ITEM, payload: productId });
    const { favorite: { favoriteItems } } = getState();
    Cookie.set('favoriteItems', JSON.stringify(favoriteItems));
}
export { addToFavorite, removeFavorite }