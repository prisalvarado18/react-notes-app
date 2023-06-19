import React, {useState} from 'react';
import { AppUI } from './AppUI';
import '../styles/App.css';


/*const defaultTodos = [
	{ text: 'Study react', completed: true },
	{ text: 'Sleep', completed: true },
	{ text: 'Read a book', completed: false },
];*/

function App() {
	const localStorageTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;

	if(!localStorageTodos){
		localStorage.setItem('TODOS_V1', JSON.stringify([]));
		parsedTodos = [];
	} else {
		parsedTodos = JSON.parse(localStorageTodos);
	}

	const [todos, setTodos] = useState(parsedTodos);
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

	const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify(newTodos);
		localStorage.setItem('TODOS_V1', stringifiedTodos);
		setTodos(newTodos);
	}

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text == text);	
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
		saveTodos(newTodos);
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
