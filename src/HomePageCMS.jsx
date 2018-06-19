import React, { Component } from 'react'
// import HeroArea from './comps/HeroArea.jsx'
import CMSArea from './comps/CMSArea.jsx'

const data = {
  hero: {
    image: '',
    link: '',
    text: ''
  },
  spotlight: {
    title: 'SPOT',
    items: [
      {
        image: '',
        link: '',
        text: 'spotlight'
      }
    ]
  },
  cats: {
    title: 'Categories List',
    items: [
      {
        image: '',
        link: '',
        text: 'cats'
      },
      {
        image: '',
        link: '',
        text: 'cats2'
      }
    ]
  },
  trending: {
    title: 'Trending Now',
    items: [
      {
        image: '',
        link: '',
        text: 'trending'
      }
    ]
  }
}

export default class HomePageCMS extends React.Component {
  constructor() {
    super()
    this.state = {
      hero: data.hero,
      cats: data.cats,
      spotlight: data.spotlight,
      trending: data.trending
    }
  }

  onChange = (type, idx, item) => {
    // use the type to get which we are editing
    let specificItem = this.state[type]
    // then use the idx to access the array of that type
    specificItem = specificItem[idx]
    this.setState({
      specificItem: item
    })
    console.log(this.state[type])
  }

  addLine = (type) => {
    let newLine = {
      image: '',
      link: '',
      text: ''
    }
    let stateType = this.state[type]
    this.setState((prevState) => {
      console.log('pr', prevState[type].items)
      return {
        stateType: prevState[type].items.push(newLine)
      }
    })
  }

  removeLine = (type, idx) => {
    let stateType = this.state[type]
    this.setState((prevState) => {
      return {
        stateType: prevState[type].items.splice(idx, 1)
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      {/* <HeroArea data={this.state.hero} /> */}
      <CMSArea data={this.state.spotlight} type={'spotlight'} onChange={this.onChange} addLine={this.addLine} removeLine={this.removeLine} />
      <CMSArea data={this.state.cats} type={'cats'} onChange={this.onChange} addLine={this.addLine} removeLine={this.removeLine} />
      <CMSArea data={this.state.trending} type={'trending'} onChane={this.onChange} addLine={this.addLine} removeLine={this.removeLine} />
      {/* <Button type={'submit'}/>
      <Button type={'preview'}/> */}
      </React.Fragment>
    )
  }
}