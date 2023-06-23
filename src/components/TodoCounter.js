import React, { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
	const {totalTodos, completedTodos} = useContext(TodoContext);
	return (
		<section className="todo-counter">
			<h2>completed {completedTodos} out of {totalTodos}</h2>
		</section>
	);
}

export { TodoCounter };
