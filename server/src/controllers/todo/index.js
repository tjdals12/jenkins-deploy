import Router from 'koa-router';
import * as todoCtrl from './todo.ctrl';

const todo = new Router();

todo.get('/', todoCtrl.list);

todo.post('/', todoCtrl.add);

export default todo;
