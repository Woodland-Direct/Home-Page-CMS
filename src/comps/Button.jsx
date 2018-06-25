import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
border: 3px solid #fff;
color: #252422;
height: 50px;
:hover {
  cursor: pointer;
}
`
const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.label}</StyledButton>
  )
}

export default Button