import { UPDATE_CUSTOMER_INFO, SET_CUSTOMER_FORM_MESSAGE, UPDATE_ORDER_CODE, RESET_CUSTOMER_INFO } from './actions';

const initialState = {
    customerInfo: {}
};

export const checkout = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_CUSTOMER_INFO:
            return {
                ...state,
                customerInfo: payload
            };
        case SET_CUSTOMER_FORM_MESSAGE:
            return {
                ...state,
                customerInfoMessage: payload
            };
        case UPDATE_ORDER_CODE:
            return {
                ...state,
                orderCode: payload
            }
        case RESET_CUSTOMER_INFO:
            return {
                ...state,
                customerInfo: payload
            }
        default:
            return state;
    }
}