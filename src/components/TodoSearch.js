import React, { useState } from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
	const onSearchValueChange = ({ target }) => {
		setSearchValue(target.value);
	};

	return (
		<section className='todo-search'>
			<input
				className='todo-search__input'
				placeholder='Search...'
				value={searchValue}
				onChange={onSearchValueChange}
			/>
		</section>
	);
}

export { TodoSearch };
