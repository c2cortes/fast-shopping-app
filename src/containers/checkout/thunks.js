import { addProductToCartAction } from './actions';
import Http from '../api/HttpRequest';

export const addProductToCart = (item, cartItems) => async (dispatch, getState) => {
    const request = await Http.post('customer', {
        data: item,
        cartItems
    });
}