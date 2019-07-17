import React, { Component } from 'react'
import LabelAndInput from './LabelAndInput'
import styled from 'styled-components'
import { Title } from '../styled-comps/StyleLibrary'
import { AddLine } from '../styled-comps/StyleLibrary'
import { RemoveLine } from '../styled-comps/StyleLibrary'
import ogs from 'open-graph-scraper'

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
    item[field] = value
    return item
  }
  getArticleData = (value, idx, setArticleData) => {
    if (this.props.type === 'inspiration') {
      let options = { url: value }
      console.log(this.state)
      ogs(options)
        .then(function (result) {
          console.log('ogresults', result)
          setArticleData(idx, result.data)
        })
        .catch(function (error) {
          alert('no og info was able to be found:', error)
          return error
        })
    }
  }
  render () {
    return (
      <React.Fragment>
        <Title style={{ gridColumnStart: '2' }}>{this.props.data.title}</Title>{' '}
        <AddLine style={{ gridColumnStart: 3 }} onClick={() => this.props.addLine(this.props.type)}>
          {' '}
          Add Line +{' '}
        </AddLine>
        {this.props.data.items.length &&
          this.props.data.items.map((item, idx) => (
            <React.Fragment key={idx}>
              {this.props.type !== 'inspiration' && (
                <LabelAndInput
                  containerStyle={{ gridColumnStart: 1 }}
                  label={'Image: '}
                  name={'image'}
                  value={item.image}
                  onChange={e => this.onChange(e, idx, e.target.name)}
                />
              )}
              <LabelAndInput
                containerStyle={{ gridColumnStart: 2 }}
                label={'Link: '}
                name={'link'}
                value={item.link}
                onChange={e => this.onChange(e, idx, e.target.name)}
                onBlur={() => this.getArticleData(item.link, idx, this.props.setArticleData)}
              />
              {this.props.type !== 'inspiration' && (
                <LabelAndInput
                  containerStyle={{ gridColumnStart: 3 }}
                  label={'Text: '}
                  name={'text'}
                  value={item.text}
                  onChange={e => this.onChange(e, idx, e.target.name)}
                />
              )}
              <LabelAndInput
                containerStyle={{ gridColumnStart: 4 }}
                label={'Alt: '}
                name={'alt'}
                value={item.alt}
                onChange={e => this.onChange(e, idx, e.target.name)}
              />
              <RemoveLine
                style={{ gridColumnStart: 5 }}
                key={'remove'}
                onClick={() => this.props.removeLine(this.props.type, idx)}>
                REMOVE
              </RemoveLine>
            </React.Fragment>
          ))}
      </React.Fragment>
    )
  }
}
