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
				<div>Jenkin Deploy</div>
			</TodoTemplate>
		</div>
	);
};

export default MainPage;
