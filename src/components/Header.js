import React from 'react';
import '../styles/Header.css';
import '../styles/Variables.css';

function Header() {
    return (
        <header className='header' style={{backgroundColor:'var(--primary-color)'}}>
            <figure className='header__avatar'>
                <img></img>
            </figure>
            <h1 className='header__title'>Pris Alvarado</h1>
            <figure className='header__robot'>
                <img></img>
            </figure>
        </header>
    );
}

export {Header};
