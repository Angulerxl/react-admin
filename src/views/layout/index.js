import React, { Component } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
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
                <div className="letf-layout">
                  <LeftNav />
                </div>
                <div className="right-layout">
                  <div className="right-layout-top">
                    <TopNav />
                  </div>
                  <div className="right-layout-content">
                    <Main />
                  </div>
                </div>
              </div>
        )
    }
} 