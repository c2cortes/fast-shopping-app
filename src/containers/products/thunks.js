import { fetchProducts, addProductToCartAction, setTotal, updateSummaryTotal } from './actions';
import Http from '../api/HttpRequest';

export const loadProducts = () => async (dispatch, getState) => {
    const request = await Http.get('products')
    dispatch(fetchProducts(request.data));
}

export const addProductToCart = (item) => async (dispatch, getState) => {
    dispatch(addProductToCartAction(item));
    calculateSummaryTotal(dispatch, getState);
}

export const calculateSummaryTotal = (dispatch, getState) => {
    let total = 0;
    getState().products.cartItems.map(item => {
        item.product.cant = item.product.cant ? item.product.cant : 1;
        total += parseInt(item.product.price * item.product.cant);
    });
    dispatch(updateSummaryTotal(total));
}

export const updateTotal = (item) => async (dispatch, getState) => {
    dispatch(setTotal(item));
    calculateSummaryTotal(dispatch, getState);
}

export const setSummaryTotal = (item) => async (dispatch, getState) => {
    dispatch(updateSummaryTotal(item));
}

export const getSummaryTotal = () => async (dispatch, getState) => {
    calculateSummaryTotal(dispatch, getState);
}