import React from 'react';
import { Header } from '../components/Header';
import '../styles/MainContent.css';
import '../styles/Variables.css';

import { Greeting } from '../components/Greeting';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoButton } from '../components/TodoButton';

function AppUI({
	searchValue,
	setSearchValue,
	totalTodos,
	completedTodos,
	searchedTodos,
	completeTodo,
	deleteTodo,
}) {
	return (
		<>
			<Header />
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
							onComplete={() => completeTodo(todo.text)}
							onDelete={() => deleteTodo(todo.text)}
						/>
					))}
				</TodoList>

				<TodoButton />
			</main>
		</>
	);
}

export { AppUI };
