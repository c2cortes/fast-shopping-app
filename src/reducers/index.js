import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

import Products from './reducer_products';
import Projects from './reducer_projects';
import StoreProject from './reducer_projects';

import Todos from './reducer_todos';
import StoreTodo from './reducer_todos';

const rootReducer = combineReducers({
  authState: AuthReducer,
  products: Products,
  projects: Projects,
  storeProject: StoreProject,
  todos: Todos,
  storeTodo: StoreTodo
});

export default rootReducer;