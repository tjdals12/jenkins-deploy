import Router from 'koa-router';
import todo from './todo';

const api = new Router();

api.use('/todos', todo.routes());

export default api;
