import React, { Component } from 'react'
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import Main from './components/Main'

export default class Layout extends Component { 
  componentWillMount() { 
    console.log(this.props,'=====0000')
  }
    render() { 
        return (
          <div className="layout">
            <TopNav />
            <LeftNav />
            <Main />
          </div>
        )
    }
} 