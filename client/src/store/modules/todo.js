import { Map, List, fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

const GET_TODOS = 'todo/GET_TODOS';
const ADD_TODO = 'todo/ADD_TODO';
const ON_CHANGE = 'todo/ON_CHANGE';

export const getTodos = createAction(GET_TODOS, api.getTodos);
export const addTodo = createAction(ADD_TODO, api.addTodo);
export const onChange = createAction(ON_CHANGE);

const initialState = Map({
	todos: List(),
	text: ''
});

export default handleActions(
	{
		...pender({
			type: GET_TODOS,
			onSuccess: (state, action) => {
				const { data: todos } = action.payload;

				return state.set('todos', fromJS(todos));
			}
		}),
		...pender({
			type: ADD_TODO,
			onSuccess: (state, action) => {
				const { data: todo } = action.payload;

				return state.set('todo', fromJS(todo)).set('text', '');
			}
		}),
		[ON_CHANGE]: (state, action) => {
			const { name, value } = action.payload;

			return state.set(name, value);
		}
	},
	initialState
);
