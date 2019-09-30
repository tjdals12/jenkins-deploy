import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoInput.scss';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

const cx = classNames.bind(styles);

const TodoInput = ({ text, onChange, onInsert }) => {
	return (
		<div className={cx('todo-input')}>
			<Form>
				<FormGroup row>
					<Label md={2} for="text">
						TODO:
					</Label>
					<Col md={8}>
						<Input type="text" id="text" name="text" value={text} onChange={onChange} />
					</Col>
					<Col md={2}>
						<Button color="primary" className="w-100" onClick={onInsert}>
							OK
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</div>
	);
};

export default TodoInput;
