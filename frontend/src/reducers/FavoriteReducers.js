import { FAVORITE_ADD_ITEM, FAVORITE_REMOVE_ITEM } from "../constants/favoriteConstants";


function favoriteReducer(state = { favoriteItems: [] }, action) {
    switch (action.type) {
        case FAVORITE_ADD_ITEM:
            const item = action.payload;
            const product = state.favoriteItems.find(x => x.product === item.product);
            if (product) {
                return {
                    favoriteItems:
                        state.favoriteItems.map(x => x.product === product.product ? item : x)
                };
            }
            return { favoriteItems: [...state.favoriteItems, item] };
        case FAVORITE_REMOVE_ITEM:
            return { favoriteItems: state.favoriteItems.filter(x => x.product !== action.payload) }
        default:
            return state
    }
}

export { favoriteReducer }