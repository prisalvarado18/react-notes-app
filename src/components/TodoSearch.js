import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import '../styles/TodoSearch.css';

function TodoSearch() {
	const { searchValue, setSearchValue } = useContext(TodoContext);
	const onSearchValueChange = ({ target }) => {
		setSearchValue(target.value);
	};

	return (
		<section className="todo-search">
			<input
				className="todo-search__input"
				placeholder="Search..."
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</section>
	);
}

export { TodoSearch };
