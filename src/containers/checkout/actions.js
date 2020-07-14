export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO';
export const SET_CUSTOMER_FORM_MESSAGE = 'SET_CUSTOMER_FORM_MESSAGE';

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