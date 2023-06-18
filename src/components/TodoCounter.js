import React from 'react';
import '../styles/TodoCounter.css';

function TodoCounter({total, completed}) {

	

	return (
		<section className="todo-counter">
			<h2>completed {completed} out of {total}</h2>
		</section>
	);
}

export { TodoCounter };
