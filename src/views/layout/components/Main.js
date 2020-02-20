
import React, { Component } from 'react'
import './style/main.scss'

export default class Main extends Component {
    componentWillMount() {
        console.log(this.props, '====ptops')
    }
    render() {
        return (
            <div className="main">
                欢迎来到我的react世界，不过react还一直在更新中...
                谢谢您过来见证我的成长～
            </div>
        )
    }
} 