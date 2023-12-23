import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size}) => {
    return (
        <button style={{backgroundColor: bgColor, color, borderRadius}} type='button' className={`p-3 text-${size} hover:drop-shadow-xl transition-all duration-300`}>{text}</button>
    )
}

export default Button