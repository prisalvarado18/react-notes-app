import React from 'react';
import '../styles/MainContent.css';
import '../styles/Variables.css';

import { Greeting } from './Greeting';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';

const todos = [
	{ text: 'Study react', completed: false },
	{ text: 'Sleep', completed: false },
	{ text: 'Read a book', completed: false },
];

function MainContent() {
	return (
		<main style={{backgroundColor:'var(--secondary-color)'}}>	
			<Greeting />
			<TodoSearch />
			<TodoCounter />

			<TodoList>
				{todos.map((todo) => (
					<TodoItem key={todo.text} text={todo.text} />
				))}
			</TodoList>

			<TodoButton />
		</main>
	);
}

export { MainContent };
