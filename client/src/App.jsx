import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage, SubPage } from 'pages';

const App = () => {
	return (
		<div>
			<Route path="/" exact={true} component={MainPage} />
			<Route path="/sub" exact={true} component={SubPage} />
		</div>
	);
};

export default App;
