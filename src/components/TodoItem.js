import React from 'react';
import '../styles/TodoItem.css';
import '../styles/Variables.css';

function TodoItem(props) {

    /*const onComplete = () => {
        alert(props.text + ' is done');
    };*/


    /*const onDelete = () => {
        alert(props.text + ' was deleted');
    };*/

    return (
        <li className='todo-item' style={{backgroundColor:'var(--primary-color)'}}>
            <span 
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}
            >√</span>
                
            <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>{props.text}</p>
            <span 
                className='icon icon-delete'
                onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { TodoItem };
