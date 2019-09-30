import Router from 'koa-router';
import api from 'controllers';

const router = new Router();

router.get('/', (ctx) => {
	ctx.body = 'Home';
});

router.use('/api', api.routes());

export default router;
