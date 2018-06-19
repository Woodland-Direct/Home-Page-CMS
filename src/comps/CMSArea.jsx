import React, { Component } from 'react'

export default class CMSArea extends React.Component {
  constructor(props) {
    super(props)
  }
  onChange = (e, idx, field) => {
    // where idx represents the array index of the item being edited
    let individualItemToEdit = this.props.data.items[idx]
    individualItemToEdit = this.processFieldChange(individualItemToEdit, e.target.value, field)
    this.props.onChange(this.props.type, idx, individualItemToEdit)
  }
  processFieldChange = (item, value, field) => {
    let editedItem = item[field] = value
    return editedItem
  }
  
  render() {
    return (
      <React.Fragment>
        <div>{this.props.data.title}</div> <div onClick={() => this.props.addLine(this.props.type)}> + </div>
        {this.props.data.items.length && this.props.data.items.map((item, idx) => (
          <div style={{display: 'flex'}}>
          <label key={idx}> Image: </label>
          <input key={idx} name='image' defaultValue={item.image} onChange={(e) => this.onChange(e,idx, e.target.name)} />
          <label key={idx}> Link: </label>
          <input key={idx} name='link' defaultValue={item.link} onChange={(e) => this.onChange(e,idx, e.target.name)} />
          <label key={idx}> Text: </label>
          <input key={idx} name='text' defaultValue={item.text} onChange={(e) => this.onChange(e,idx, e.target.name)} />
          <div onClick={() =>this.props.removeLine(this.props.type, idx)}>-REMOVE-</div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}