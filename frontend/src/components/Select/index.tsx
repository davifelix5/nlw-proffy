import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string,
    label: string,
    message: string,
    options: Array<{
        value: string,
        label: string,
    }>,
}

const Select: React.FC<SelectProps> = ({ name, label, options, message, ...props }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" name={name} id={name} placeholder=" " {...props} >
                <option value="" disabled hidden>
                    {message}
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select

