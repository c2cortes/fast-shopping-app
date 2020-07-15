export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO';
export const SET_CUSTOMER_FORM_MESSAGE = 'SET_CUSTOMER_FORM_MESSAGE';
export const UPDATE_ORDER_CODE = 'UPDATE_ORDER_CODE';
export const RESET_CUSTOMER_INFO = 'RESET_CUSTOMER_INFO';

export const updateCustomerInfo = (customer) => {
	return {
		type: UPDATE_CUSTOMER_INFO,
		payload: { customer }	
	}	
}

export const setCustomerFormMessage = (message) => {
	return {
		type: SET_CUSTOMER_FORM_MESSAGE,
		payload: message
	}
}

export const updateOrderCode = (code) => {
	return {
		type: UPDATE_ORDER_CODE,
		payload: code
	}
}

export const resetCustomerInfo = (info = null) => {
	return {
		type: RESET_CUSTOMER_INFO,
		payload: info
	}
}

