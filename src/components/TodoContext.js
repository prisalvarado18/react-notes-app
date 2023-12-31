import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
	/*const localStorageTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;

	if(!localStorageTodos){
		localStorage.setItem('TODOS_V1', JSON.stringify([]));
		parsedTodos = [];
	} else {
		parsedTodos = JSON.parse(localStorageTodos);
	}*/

	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', [] /*parsedTodos*/);
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

	/*const saveTodos = (newTodos) => {
		const stringifiedTodos = JSON.stringify(newTodos);
		localStorage.setItem('TODOS_V1', stringifiedTodos);
		setTodos(newTodos);
	}*/

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text == text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		/*setTodos(newTodos);*/
		saveTodos(newTodos);
		/*todos[todoIndex] = {
			text: todos[todoIndex].text,
			completed: true,
		};*/
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	/*console.log('Antes');
	useEffect(()=>{
		console.log('Use effect')
	}, [totalTodos]);
	//Cuando cambie totalTodos
	//[]Solo se ejecuta la primera vez que se ejecute nuestro componente
	console.log('Despues');*/
	return (
		<TodoContext.Provider value={{
            loading,
			error,
		    searchValue,
			setSearchValue,
			totalTodos,
			completedTodos,
			searchedTodos,
			completeTodo,
			deleteTodo,


            }}>
                {props.children}
        </TodoContext.Provider>
	);
}

export {TodoContext, TodoProvider};
/*<TodoContext.Consumer></TodoContext.Consumer>;*/
