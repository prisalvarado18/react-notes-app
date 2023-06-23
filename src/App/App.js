import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';
//import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoProvider } from '../components/TodoContext';
import '../styles/App.css';

/*const defaultTodos = [
	{ text: 'Study react', completed: true },
	{ text: 'Sleep', completed: true },
	{ text: 'Read a book', completed: false },
];*/

function App() {
	return (
		<TodoProvider>
			<AppUI
			/*loading={loading}
					error={error}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					totalTodos={totalTodos} 
					completedTodos={completedTodos} 
					searchedTodos={searchedTodos}
					completeTodo={completeTodo}
					deleteTodo={deleteTodo}*/
			/>
		</TodoProvider>
	);
}

export default App;
