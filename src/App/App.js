import React, {useState} from 'react';

import '../styles/App.css';
import { AppUI } from './AppUI';


const defaultTodos = [
	{ text: 'Study react', completed: true },
	{ text: 'Sleep', completed: true },
	{ text: 'Read a book', completed: false },
];

function App() {

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
		<>
			<AppUI 
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				totalTodos={totalTodos} 
				completedTodos={completedTodos} 
				searchedTodos={searchedTodos}
				completeTodo={completeTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}

export default App;
