import * as db from 'models';
import app from 'app';

db.connect().then(() => {
	console.log('Connected mongoose');

	app.listen(4000, () => {
		console.log('Server localhost:4000');
	});
});
