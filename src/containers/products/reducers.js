import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, SET_TOTAL, RESET_CART, SET_SUMMARY_TOTAL } from './actions';

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
            const _cartItems = state.cartItems;
            const productToUpdate = _cartItems.find(element => element.product.id === payload.id);
            productToUpdate.product.cant = parseInt(payload.cant);

            return {
                ...state,
                cartItems: _cartItems
            }
        case SET_SUMMARY_TOTAL:
            return {
                ...state,
                summaryTotal: payload
            };
        case RESET_CART:
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state;
    }
}