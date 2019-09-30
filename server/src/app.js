import Koa from 'koa';
import requestId from 'koa-requestid';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import router from 'routes';

const app = new Koa();

app.use(requestId());
app.use(
	bodyParser({
		enableTypes: [ 'json', 'form' ],
		jsonLimit: '10mb',
		formLimit: '10mb'
	})
);
app.use(
	cors({
		origin: '*',
		allowMethods: [ 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD' ],
		allowHeaders: [ 'Content-Type', 'Authoriztion' ],
		exposeHeaders: [ 'Content-Length', 'Date', 'X-Request-Id', 'Last-Page' ]
	})
);
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
