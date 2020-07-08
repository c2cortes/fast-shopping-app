import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import AuthReducer from './reducer_auth';

import Products from './reducer_products';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  authState: AuthReducer,
  products: Products,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(rootReducer);
export default rootReducer;