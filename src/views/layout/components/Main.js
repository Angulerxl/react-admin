
import React, { Component } from 'react'
import './style/main.scss'

export default class Main extends Component {
    componentWillMount() {
        console.log(this.props, '====ptops')
    }
    render() {
        return (
            <div className="main">
                欢迎来到由react编写的demo世界~
            </div>
        )
    }
} 