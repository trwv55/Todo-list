import React from "react";

import './button.css';

function Button ( { name, onClick, customClass } ) {
    return (
        <div className='button-wrapper'>
            <button
                className={`button ${customClass ? customClass : ''}`}
                onClick={onClick}
            >
                {name}
            </button>

        </div>
    )
}

export default Button;

