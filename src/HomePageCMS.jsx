import React, { Component } from 'react'
import styled from 'styled-components'
import HeroArea from './comps/HeroArea.jsx'
import CMSArea from './comps/CMSArea.jsx'
import Button from './comps/Button.jsx'
import { DATA } from './utils'
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
      hero: DATA.hero,
      cats: DATA.cats,
      inspiration: DATA.inspiration,
      promotions: DATA.promotions,
      trending: DATA.trending
    }
  }

  changeItemData = (type, idx, item) => {
    // use the type to get which we are editing
    let specificType = this.state[type]
    // then use the idx to access the array of that type
    let specificItems = specificType.items
    specificItems[idx] = item
    let currentTitle = specificType.title
    this.setState({
      [type]: { title: currentTitle, items: specificItems }
    })
    console.log(this.state[type])
  }

  changeHeroData = (e, type) => {
    let newHero = Object.assign({}, this.state.hero)
    newHero[type][e.target.name] = e.target.value
    this.setState({
      hero: newHero
    })
  }

  setArticleData = (idx, data) => {
    let image = data.ogImage.url
    let title = data.ogTitle
    let newItems = this.state.inspiration.items
    let specificItem = this.state.inspiration.items[idx]
    let newObject = { image, link: specificItem.link, text: title, alt: specificItem.alt }
    newItems[idx] = newObject
    this.setState({
      inspiration: {
        items: newItems
      }
    })
    console.log(this.state)
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
    let data = prompt('Please Paste Data')
    try {
      data = JSON.parse(data)
      console.log(data)
      this.setState({
        hero: data.hero,
        cats: data.cats,
        inspiration: data.inspiration,
        promotions: data.promotions,
        trending: data.trending
      })
      console.log(this.state)
    } catch (e) {
      console.log(e)
      alert('🙁 🙁 🙁 No way, something went wrong 🙁 🙁 🙁')
    }
  }

  render () {
    let open = `<script id='hcms' type='x-data'>`
    let close = `</script>`
    return (
      <React.Fragment>
        <GridContainer>
          <div style={{ gridColumnStart: 2, fontSize: '20px' }}> 🔥 Generator 🔥 </div>
          <HeroArea
            data={this.state.hero.mob}
            label={'Mobile'}
            onChange={e => {
              this.changeHeroData(e, 'mob')
            }}
          />
          <HeroArea
            data={this.state.hero.tab}
            label={'Tablet'}
            onChange={e => {
              this.changeHeroData(e, 'tab')
            }}
          />
          <HeroArea
            data={this.state.hero.desk}
            label={'Desktop'}
            onChange={e => {
              this.changeHeroData(e, 'desk')
            }}
          />
          <CMSArea
            data={this.state.promotions}
            type={'promotions'}
            onChange={this.changeItemData}
            addLine={this.addLine}
            removeLine={this.removeLine}
          />
          <CMSArea
            data={this.state.inspiration}
            type={'inspiration'}
            onChange={this.changeItemData}
            addLine={this.addLine}
            removeLine={this.removeLine}
            setArticleData={this.setArticleData}
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
        <div>
          {open}
          {JSON.stringify(this.state)}
          {close}
        </div>
      </React.Fragment>
    )
  }
}
