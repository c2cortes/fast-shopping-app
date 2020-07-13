export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const SET_TOTAL = 'SET_TOTAL';

export const fetchProducts = (products) => {
	return {
		type: FETCH_PRODUCTS,
		payload: { products }	
	}	
}

export const addProductToCartAction = item => {
	return{
		type: ADD_PRODUCT_TO_CART,
		payload: item
	}
}

export const addProductToCart = item => {
	return{
		type: ADD_PRODUCT_TO_CART,
		payload: item
	}
}

export function setTotal(item) {
	return{
		type: SET_TOTAL,
		payload: item
	}
}