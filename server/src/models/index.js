import mongoose from 'mongoose';

export const connect = () => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect('mongodb://mongo/admin', {
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
