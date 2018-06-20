import React, { Component } from 'react'
import LabelAndInput from './LabelAndInput'

export default class CMSArea extends React.Component {
  constructor (props) {
    super(props)
  }
  onChange = (e, idx, field) => {
    // where idx represents the array index of the item being edited
    let individualItemToEdit = this.props.data.items[idx]
    individualItemToEdit = this.processFieldChange(individualItemToEdit, e.target.value, field)
    this.props.onChange(this.props.type, idx, individualItemToEdit)
  }
  processFieldChange = (item, value, field) => {
    let editedItem = (item[field] = value)
    return editedItem
  }
  render () {
    let divStyle = {
      color: 'red',
      gridColumnStart: 1
    }
    return (
      <React.Fragment>
        <div style={{gridColumnStart: '2'}}><div>{this.props.data.title}</div> <div onClick={() => this.props.addLine(this.props.type)}> + </div></div>
        {this.props.data.items.length &&
          this.props.data.items.map((item, idx) => (
          <div key={'container' + idx} >
              <StyledLabel style={divStyle}label={'Image: '} name={'image'} value={item.image} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <LabelAndInput label={'Link: '} name={'link'} value={item.link} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <LabelAndInput label={'Text: '} name={'text'} value={item.text} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <div key={'remove'} onClick={() => this.props.removeLine(this.props.type, idx)}>-REMOVE-</div>
            </div>
          ))}
      </React.Fragment>
    )
  }
}
