import React from 'react';
import TodoTemplate from 'components/TodoTemplate';
import TodoInputContainer from 'containers/TodoInputContainer';
import TodoListContainer from 'containers/TodoListContainer';

const MainPage = () => {
	return (
		<div>
			<TodoTemplate>
				<TodoInputContainer />
				<TodoListContainer />
				<div>1. Jenkin Deploy</div>
				<div>2. Github Webhook</div>
				<div>3. Edit content type in Github Webhook</div>
				<div>4. Intialize / Retry</div>
			</TodoTemplate>
		</div>
	);
};

export default MainPage;
