import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

import Products from './reducer_products';

const rootReducer = combineReducers({
  authState: AuthReducer,
  products: Products,
});

export default rootReducer;