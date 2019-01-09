import React from 'react'
import styled from 'styled-components'
import {Input} from '../styled-comps/StyleLibrary'

const InputLabel = styled.div`
padding-bottom: 2px;
`


const LabelAndInput = props => {
  return (
    <div style={props.containerStyle}>
    <InputLabel>{props.label}</InputLabel>
    <Input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
    </div>
  )
}

export default LabelAndInput