import React, { Component } from 'react'
import styled from 'styled-components'
import HeroArea from './comps/HeroArea.jsx'
import CMSArea from './comps/CMSArea.jsx'
import Button from './comps/Button.jsx'
const data = {
  hero: {
    image: 'www.starwars.com',
    link: 'www.starwars.com',
    text: 'Shop The Galaxy'
  },
  spotlight: {
    title: 'Spotlight',
    items: [
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'spotlight',
        order: 1
      }
    ]
  },
  cats: {
    title: 'Categories',
    items: [
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'Fireplace',
        order: 1
      },
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'Woood Stove',
        order: 2
      },
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'Chimney',
        order: 3
      },
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'Outdoor',
        order: 4
      },
      {
        image: 'www.starwars.com',
        link: 'www.starwars.com',
        text: 'Promotions',
        order: 5
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

const GridContainer = styled.div`
display: grid;
grid-gap: 20px;
grid-auto-columns: min-content;
font-family: 'Helvetica';
`

const Results = styled.div`
font-family: 'Helvetica';
padding-top: 20px;
padding-bottom: 20px;
`

export default class HomePageCMS extends React.Component {
  constructor () {
    super()
    this.state = {
      hero: data.hero,
      cats: data.cats,
      spotlight: data.spotlight,
      trending: data.trending
    }
  }

  changeItemData = (type, idx, item) => {
    // use the type to get which we are editing
    let specificItem = this.state[type]
    // then use the idx to access the array of that type
    specificItem = specificItem[idx]
    this.setState({
      specificItem: item
    })
    console.log(this.state[type])
  }

  changeHeroData = e => {
    let newHeroValue = this.state.hero
    newHeroValue[e.target.name] = e.target.value
    this.setState({
      hero: newHeroValue
    })
  }

  addLine = type => {
    let newLine = {
      image: '',
      link: '',
      text: ''
    }
    let stateType = this.state[type]
    this.setState(prevState => {
      console.log('pr', prevState[type].items)
      return {
        stateType: prevState[type].items.push(newLine)
      }
    })
  }

  removeLine = (type, idx) => {
    let stateType = this.state[type]
    console.log('ids', idx)
    this.setState(prevState => {
      return {
        stateType: prevState[type].items.splice(idx, 1)
      }
    })
  }

  loadData = () => {
    var data = prompt('Please Paste Data')
    try {
      data = JSON.parse(data)
        this.setState({
          hero: data.hero,
          cats: data.cats,
          spotlight: data.spotlight,
          trending: data.trending
        })
    } catch (e) {
      alert('🙁 🙁 🙁 No way, something went wrong 🙁 🙁 🙁')
    }

  }

  render () {
    return (
      <React.Fragment>
        <GridContainer>
        <div style={{gridColumnStart: 2 }}> 🔥🔥🔥Generator🔥🔥🔥 </div>
          <HeroArea data={this.state.hero} onChange={this.changeHeroData} />
          <CMSArea
            data={this.state.spotlight}
            type={'spotlight'}
            onChange={this.changeItemData}
            addLine={this.addLine}
            removeLine={this.removeLine}
          />
          <CMSArea
            data={this.state.cats}
            type={'cats'}
            onChange={this.changeItemData}
            addLine={this.addLine}
            removeLine={this.removeLine}
          />
          <CMSArea
            data={this.state.trending}
            type={'trending'}
            onChange={this.changeItemData}
            addLine={this.addLine}
            removeLine={this.removeLine}
          />
          <Button label={'Load Data:  '} onClick={this.loadData} />
        </GridContainer>
        <Results> Results: </Results>
        <div>{JSON.stringify(this.state)}</div>
      </React.Fragment>
    )
  }
}
