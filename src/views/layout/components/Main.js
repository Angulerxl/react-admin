
import React, { Component } from 'react'
import './style/main.scss'

export default class Main extends Component {
    componentWillMount() {
        console.log(this.props, '====ptops')
    }
    render() {
        return (
            <div className="main">
                欢迎来到我的react世界~
            </div>
        )
    }
} 