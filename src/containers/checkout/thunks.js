import { updateCustomerInfo, setCustomerFormMessage, updateOrderCode } from './actions';
import { resetCart } from '../products/actions';
import Http from '../api/HttpRequest';

export const addProductToCart = (item, cartItems) => async (dispatch, getState) => {
    await Http.post('customer', {
        data: item,
        cartItems
    }).then((respose) => {
        if(respose.status === 201){
            dispatch(updateOrderCode(respose.data.code));
        }
    }).catch(error => {
        alert(error);
    });
}

export const validateExistingCustomer = (email) => async (dispatch, getState) => {
    await Http.get(`customer/${email}`).then((response) => {
        if(response.status === 200){
            if(response.data){
                dispatch(setCustomerFormMessage(''))
                dispatch(updateCustomerInfo(response.data));
            } else {
                dispatch(setCustomerFormMessage('There is not a customer with this email'))
            }
        } else {
            console.log('response null => ', response)
        }
    }).catch(error => {
        alert(error);
    });
}

export const resetState = () => async (dispatch, getState) => {
    dispatch(updateOrderCode(null));
    dispatch(resetCart(null));
}