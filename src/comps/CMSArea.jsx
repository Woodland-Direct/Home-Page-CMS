import React, { Component } from 'react'

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
    return (
      <React.Fragment>
        <div>{this.props.data.title}</div> <div onClick={() => this.props.addLine(this.props.type)}> + </div>
        {this.props.data.items.length &&
          this.props.data.items.map((item, idx) => (
            <div key={'container' + idx} style={{ display: 'flex' }}>
              <label key={idx + this.props.type + 'img'}> Image: </label>
              <input
                key={idx + 1 + this.props.type + 'img'}
                name='image'
                value={item.image}
                onChange={e => this.onChange(e, idx, e.target.name)}
              />
              <label key={idx + this.props.type + 'link'}> Link: </label>
              <input
                key={idx + 1 + this.props.type + 'link'}
                name='link'
                value={item.link}
                onChange={e => this.onChange(e, idx, e.target.name)}
              />
              <label key={idx + this.props.type + 'text'}> Text: </label>
              <input
                key={idx + 1 + this.props.type + 'text'}
                name='text'
                value={item.text}
                onChange={e => this.onChange(e, idx, e.target.name)}
              />
              <div key={'remove'} onClick={() => this.props.removeLine(this.props.type, idx)}>-REMOVE-</div>
            </div>
          ))}
      </React.Fragment>
    )
  }
}
