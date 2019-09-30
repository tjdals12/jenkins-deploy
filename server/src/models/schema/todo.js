import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
	text: String,
	done: Boolean
});

TodoSchema.statics.add = async function(param) {
	const todo = new this({ ...param });

	await todo.save();

	return this.findOne({ _id: todo._id });
};

export default model('Todo', TodoSchema);
