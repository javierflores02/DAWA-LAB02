import React from 'react'

const Total = (props) => {
    const {parts} = props
    let cantidad = 0
    for (let i = 0; i < parts.length; i++) {
        cantidad += parts[i].exercises
    }
    
    return (
        <p>Number of exercises {cantidad}</p>
    )
}

export default Total