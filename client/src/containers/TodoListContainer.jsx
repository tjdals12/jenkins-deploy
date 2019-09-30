import React from 'react';
import TodoList from 'components/TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodoListContainer extends React.Component {
	getTodos = () => {
		const { TodoActions } = this.props;

		TodoActions.getTodos();
	};

	componentDidMount() {
		this.getTodos();
	}

	render() {
		const { todos, loading } = this.props;

		if (loading || loading === undefined) return null;

		return <TodoList data={todos} />;
	}
}

export default connect(
	(state) => ({
		todos: state.todo.get('todos'),
		loading: state.pender.pending['todo/GET_TODOS']
	}),
	(dispatch) => ({
		TodoActions: bindActionCreators(todoActions, dispatch)
	})
)(TodoListContainer);
