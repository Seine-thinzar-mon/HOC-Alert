import React from 'react'

const Button = props => {
    const { Click } = props
    return (
        <button onClick={Click}>{props.children}</button>
    )
}
export default Button