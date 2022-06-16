import React from 'react'
import './Input.scss'

const Input = ({ name, value, onChange, placeholder, type, disabled }) => {
    return (
        <input
            className="input"
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
        />
    )
}

export default Input
