import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART} from '../actions/index';

const initialState = {
    products: [],
    cartItems: []
  };

export default function(state = initialState, action){
	switch (action.type) {
		case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            };
			
		case ADD_PRODUCT_TO_CART:
            console.log('state => ', state);
            return Object.assign({}, state, {
                cartItems: [
                  ...state.cartItems,
                  {
                    product: action.payload,
                    completed: false
                  }
                ]
              })
	}
	return state;
}