import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string,
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
    return (
        <div className="input-block">
            <input name={name} id={name} placeholder=" " {...props} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Input

