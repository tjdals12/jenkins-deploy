import React from 'react';
import classnames from 'classnames/bind';
import styles from './TodoList.scss';
import { ListGroup, ListGroupItem, Row, Col, Input } from 'reactstrap';

const cx = classnames.bind(styles);

const TodoList = ({ data }) => {
	return (
		<div className={cx('todo-list')}>
			<ListGroup>
				{data.map((todo, index) => {
					const { _id, text, done } = todo.toJS();

					return (
						<ListGroupItem key={_id}>
							<Row>
								<Col md={1} className="text-right">
									<span className="font-weight-bold">{index + 1}.</span>
								</Col>
								<Col md={10}>
									<span className="text-success">{text}</span>
								</Col>
								<Col md={1} className="text-center">
									<Input type="checkbox" />
								</Col>
							</Row>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		</div>
	);
};

export default TodoList;
