import React from 'react'
const LabelAndInput = props => {
  return (
    <React.Fragment>
    <label>{props.label}</label>
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
    </React.Fragment>
  )
}

export default LabelAndInput