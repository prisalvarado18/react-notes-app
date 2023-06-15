import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoButton } from './components/TodoButton';

const todos = [
    { text: 'Study react', completed: false },
    { text: 'Sleep', completed: false },
    { text: 'Read a book', completed: false },
];

function App() {
    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} />
                ))}
            </TodoList>

            <TodoButton />
        </>
    );
}

export default App;
