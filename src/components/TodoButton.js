import React from "react";

function TodoButton(props){

    const onClickButton = (msg) => {
        alert(msg)
    };

    return(
        <button 
            className='todo-button'
            onClick={()=>onClickButton('Modal')}
        >+</button>
    );
}

export {TodoButton};