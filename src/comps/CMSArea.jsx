import React, { Component } from 'react'
import LabelAndInput from './LabelAndInput'
import styled from 'styled-components'
import Title from '../styled-comps/Title'
import AddLine from '../styled-comps/AddLine'
import RemoveLine from '../styled-comps/RemoveLine'

const StyledInput = styled(LabelAndInput)`
grid-column-start: 1;
`

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
        <Title style={{gridColumnStart: '2'}}>{this.props.data.title}</Title> <AddLine style={{gridColumnStart: 3}}onClick={() => this.props.addLine(this.props.type)}> Add Line + </AddLine>
        {this.props.data.items.length &&
          this.props.data.items.map((item, idx) => (
            <React.Fragment key={idx}>
              <LabelAndInput containerStyle={{gridColumnStart: 1}}label={'Image: '} name={'image'} value={item.image} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <LabelAndInput containerStyle={{gridColumnStart: 2}}label={'Link: '} name={'link'} value={item.link} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <LabelAndInput containerStyle={{gridColumnStart: 3}}label={'Text: '} name={'text'} value={item.text} onChange={e => this.onChange(e,idx,e.target.name)}/>
              <RemoveLine style={{gridColumnStart: 4}} key={'remove'} onClick={() => this.props.removeLine(this.props.type, idx)}>REMOVE</RemoveLine>
            </React.Fragment>
          ))}
      </React.Fragment>
    )
  }
}
