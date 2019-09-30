import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoTemplate.scss';

const cx = classNames.bind(styles);

const TodoTemplate = ({ children }) => {
	return <div className={cx('todo-template')}>{children}</div>;
};

export default TodoTemplate;
