import React from 'react'

const Button = (props) => {
  return (
    <div onClick={props.onClick}>{props.label}</div>
  )
}

export default Button