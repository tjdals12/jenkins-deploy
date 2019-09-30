import React from 'react';
import TodoInput from 'components/TodoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodoInputContainer extends React.Component {
	handleChange = (e) => {
		const { TodoActions } = this.props;
		const { name, value } = e.target;

		TodoActions.onChange({ name, value });
	};

	handleInsert = () => {
		const { TodoActions, text } = this.props;

		TodoActions.addTodo({
			text: text,
			done: false
		});
	};

	render() {
		const { text } = this.props;

		return <TodoInput text={text} onChange={this.handleChange} onInsert={this.handleInsert} />;
	}
}

export default connect(
	(state) => ({
		text: state.todo.get('text')
	}),
	(dispatch) => ({
		TodoActions: bindActionCreators(todoActions, dispatch)
	})
)(TodoInputContainer);
