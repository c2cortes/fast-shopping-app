import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, SET_TOTAL} from '../actions/index';

const initialState = {
    products: [],
    cartItems: [],
    total: 0
  };

export default function(state = initialState, action){
	switch (action.type) {
		case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            };
			
		case ADD_PRODUCT_TO_CART:
            return Object.assign({}, state, {
                cartItems: [
                  ...state.cartItems,
                  {
                    product: action.payload,
                    completed: false
                  }
                ]
              })
    
    case SET_TOTAL:
            const item = state.cartItems.find(element => element.product._id == action.payload._id);
            return Object.assign({}, state, {
                total: 
                  state.total += parseInt(action.payload)
                
              })
	}
	return state;
}