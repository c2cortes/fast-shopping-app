import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, SET_TOTAL, RESET_CART } from './actions';

const initialState = {
    products: [],
    cartItems: [],
    total: 0
};

export const products = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case ADD_PRODUCT_TO_CART:
            return Object.assign({}, state, {
                cartItems: [
                    ...state.cartItems,
                    {
                        product: payload
                    }
                ]
            })
        case SET_TOTAL:
            return Object.assign({}, state, {
                total:
                    state.total += parseInt(action.payload)
            })
        case RESET_CART:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state;
    }
}