import React from 'react';
import '../styles/TodoItem.css';
import '../styles/Variables.css';

function TodoItem(props) {
    return (
        <li className='todo-item' style={{backgroundColor:'var(--primary-color)'}}>
            <span className={`icon icon-check ${props.completed && 'icon-check--active'}`}>√</span>
            <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>{props.text}</p>
            <span className='icon icon-delete'>X</span>
        </li>
    );
}

export { TodoItem };
