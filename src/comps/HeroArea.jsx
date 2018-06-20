import React from 'react'
import LabelAndInput from './LabelAndInput'
const HeroArea = props => {
  return (
    <div style={{display: 'flex'}}>
    <div>Hero Image: </div>
    <LabelAndInput label={'Image: '} name={'image'} value={props.data.image} onChange={props.onChange} />
    <LabelAndInput label={'Link: '} name={'link'} value={props.data.link} onChange={props.onChange} />
    <LabelAndInput label={'Text: '} name={'text'} value={props.data.text} onChange={props.onChange} />
    </div>
  )
}

export default HeroArea 
