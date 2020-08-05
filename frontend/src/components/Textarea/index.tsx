import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string,
    label: string,
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
    return (
        <div className="textarea-block">
            <textarea name={name} id={name} placeholder=" " {...props} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default Textarea
