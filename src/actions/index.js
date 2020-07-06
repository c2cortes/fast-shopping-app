import axios from 'axios';

export const AUTH = 'AUTH';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const STORE_PROJECT = 'STORE_PROJECT';
export const CURRENT_PROJECT = 'CURRENT_PROJECT';
export const STORE_PROJECT_RESPONSE = 'STORE_PROJECT_RESPONSE';

export const FETCH_TODOS = 'FETCH_TODOS';
export const STORE_TODO = 'STORE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const API_URL = 'http://localhost:3000/';


////////***  Projects Actions  ***/////////

export function setCurrentProject(project) {
	return{
		type: CURRENT_PROJECT,
		payload: project
	}
}

export function storeProject(params){
	const url = `${API_URL}projects`;
	const request = axios.post(url, params);

	return{
		type: STORE_PROJECT,
		payload: request
	}
}

export function fetchProducts(){
	const url = `${API_URL}products`;
	const request = axios.get(url);

	return{
		type: FETCH_PRODUCTS,
		payload: request
	}
}

////////***  Todos Actions  ***/////////

export function fetchTodos(project_id){
	const url = `${API_URL}todos/${project_id}`;
	const request = axios.get(url);

	return{
		type: FETCH_TODOS,
		payload: request
	}
}

export function storeTodo(params){
	const url = `${API_URL}todos`;
	const request = axios.post(url, params);

	return{
		type: STORE_TODO,
		payload: request
	}
}

export function updateTodo(sessionId, params){
	const url = `${API_URL}todos/${params._id}`;
	const request = axios.put(url, params);

	return{
		type: UPDATE_TODO,
		payload: request
	}
}

////////***  Auth Actions  ***/////////

export function authAction(params){
	return{
		type: AUTH,
		payload: params
	}
}