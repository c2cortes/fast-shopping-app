import { updateCustomerInfo, setCustomerFormMessage } from './actions';
import Http from '../api/HttpRequest';

export const addProductToCart = (item, cartItems) => async (dispatch, getState) => {
    const request = await Http.post('customer', {
        data: item,
        cartItems
    });
}

export const validateExistingCustomer = (email) => async (dispatch, getState) => {
    const request = await Http.get(`customer/${email}`);
    if(request.data) {
        dispatch(setCustomerFormMessage(''))
        dispatch(updateCustomerInfo(request.data));
    } else {
        dispatch(setCustomerFormMessage('There is not a customer with this email'))
    }
    
}