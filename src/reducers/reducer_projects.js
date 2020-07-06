import { FETCH_PRODUCTS, STORE_PROJECT } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_PRODUCTS:
			return action.payload.data;
		case STORE_PROJECT:
			return action.payload.data;
	}
	return state;
}