import React from "react";

function TodoItem(props){
    return(
        <li>
            <span>1</span>
            <p>{props.text}</p>
            <span>2</span>
        </li>
    );
}

export {TodoItem};