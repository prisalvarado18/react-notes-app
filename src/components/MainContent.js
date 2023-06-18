import React, { useState } from 'react';
import '../styles/MainContent.css';
import '../styles/Variables.css';

import { Greeting } from './Greeting';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';

const defaultTodos = [
	{ text: 'Study react', completed: true },
	{ text: 'Sleep', completed: true },
	{ text: 'Read a book', completed: false },
];

function MainContent() {
	const [todos, setTodos] = useState(defaultTodos);
	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];
	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter((todo) => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text == text);	
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
		/*todos[todoIndex] = {
			text: todos[todoIndex].text,
			completed: true,
		};*/
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text == text);	
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<main style={{ backgroundColor: 'var(--secondary-color)' }}>
			<Greeting />
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<TodoCounter total={totalTodos} completed={completedTodos} />

			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={()=> completeTodo(todo.text)}
						onDelete={()=> deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<TodoButton />
		</main>
	);
}

export { MainContent };
