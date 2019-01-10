import React from 'react'
import LabelAndInput from './LabelAndInput'
import { Title } from '../styled-comps/StyleLibrary'

const HeroArea = props => {
  return (
    <React.Fragment>
      <Title style={{ gridColumnStart: 2 }}>Hero Image {props.label}: </Title>
      <LabelAndInput
        containerStyle={{ gridColumnStart: 1 }}
        label={'Image: '}
        name={'image'}
        value={props.data.image}
        onChange={props.onChange}
      />
      <LabelAndInput
        containerStyle={{ gridColumnStart: 2 }}
        label={'Link: '}
        name={'link'}
        value={props.data.link}
        onChange={props.onChange}
      />
      <LabelAndInput
        containerStyle={{ gridColumnStart: 3 }}
        label={'Alt: '}
        name={'alt'}
        value={props.data.alt}
        onChange={props.onChange}
      />
    </React.Fragment>
  )
}

export default HeroArea
