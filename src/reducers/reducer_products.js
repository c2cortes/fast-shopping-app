import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_PRODUCTS:
			return action.payload.data;
	}
	return state;
}