import axios from 'axios';

export const AUTH = 'AUTH';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const STORE_PROJECT = 'STORE_PROJECT';
export const CURRENT_PROJECT = 'CURRENT_PROJECT';
export const STORE_PROJECT_RESPONSE = 'STORE_PROJECT_RESPONSE';

export const API_URL = 'http://localhost:3000/';


////////***  Projects Actions  ***/////////

export function setCurrentProject(project) {
	return{
		type: CURRENT_PROJECT,
		payload: project
	}
}

export function storeProject(params){
	const url = `${API_URL}projects`;
	const request = axios.post(url, params);

	return{
		type: STORE_PROJECT,
		payload: request
	}
}

export function fetchProducts(){
	const url = `${API_URL}products`;
	const request = axios.get(url);

	return{
		type: FETCH_PRODUCTS,
		payload: request
	}
}

export function addProductToCart(item) {
    console.log('item =>=>=> ', item);
	return{
		type: ADD_PRODUCT_TO_CART,
		payload: item
	}
}

////////***  Auth Actions  ***/////////

export function authAction(params){
	return{
		type: AUTH,
		payload: params
	}
}