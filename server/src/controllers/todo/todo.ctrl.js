import { Todo } from 'models/schema';
import Joi from 'joi';

export const list = async (ctx) => {
	try {
		const todos = await Todo.find();

		ctx.body = todos;
	} catch (e) {
		console.error(e.message);
	}
};

export const add = async (ctx) => {
	let { text, done } = ctx.request.body;

	const schema = Joi.object().keys({
		text: Joi.string().required(),
		done: Joi.boolean().required()
	});

	const result = Joi.validate(ctx.request.body, schema);

	if (result.error) {
		ctx.body = result.error;
		return;
	}

	try {
		const todo = await Todo.add({ text, done });

		ctx.body = todo;
	} catch (e) {
		console.error(e.message);
	}
};
