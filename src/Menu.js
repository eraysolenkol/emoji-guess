import './Artists.css';
import './Menu.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/' + e.target.value.toLowerCase());
    }

    return (
        <div className='container'>
            <p class="title">
                <span class="underline underline--emoji">Menu</span>
            </p>
            <div className='menu-items'>
                    <input className='menu-button' type="button" value="Play" onClick={handleClick} />
                    <input className='menu-button' type="button" value="Settings" onClick={handleClick} />
            </div>
        </div>
    );
}

export default Menu;