import React from 'react';

const Button = ({ classname, buttontext, onClick, disabled }) => {
    return (
        <button
            className={classname}
            onClick={onClick}
            disabled={disabled}
        >
            {buttontext}
        </button>
    );
};

export default Button;
