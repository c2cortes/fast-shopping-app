import axios from 'axios';
import { fetchProducts, addProductToCartAction } from './actions';

export const API_URL = 'http://localhost:3000/';

export const loadProducts = () => async (dispatch, getState) => {
    // const response = await fetch('http://localhost:3000/products');
    // const products = await response.json();
    
    const url = `${API_URL}products`;
    const request = await axios.get(url);
    dispatch(fetchProducts(request.data));
}

export const addProductToCart = (item) => async (dispatch, getState) => {
    dispatch(addProductToCartAction(item));
}