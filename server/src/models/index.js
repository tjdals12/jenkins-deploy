import mongoose from 'mongoose';

export const connect = () => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect('mongodb://127.0.0.1/testapp', {
				user: 'test',
				pass: '1234',
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
				useFindAndModify: false
			})
			.then(() => resolve())
			.catch((err) => reject(err));
	});
};

export const disconnect = () => {
	return mongoose.disconnect();
};
