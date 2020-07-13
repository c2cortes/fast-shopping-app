import { fetchProducts, addProductToCartAction } from './actions';
import Http from '../api/HttpRequest';

export const loadProducts = () => async (dispatch, getState) => {
    const request = await Http.get('products')
    dispatch(fetchProducts(request.data));
}

export const addProductToCart = (item) => async (dispatch, getState) => {
    dispatch(addProductToCartAction(item));
}