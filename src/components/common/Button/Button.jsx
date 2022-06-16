import React from 'react'
import './Button.scss'

const Button = ({ text, onClick, type = 'button', disabled = false }) => {
    return (
        <button
            className="button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button
