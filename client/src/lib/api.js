import axios from 'axios';

export const getTodos = () => axios.get('/api/todos');
export const addTodo = (param) => axios.post('/api/todos', { ...param });
