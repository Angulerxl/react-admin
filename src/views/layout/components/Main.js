
import React, { Component } from 'react'
import './style/main.module.scss'
// import  Button  from 'antd/es/date-picker' // 加载 JS
// import 'antd/es/date-picker/style/css'; // 加载 CSS

export default class Main extends Component {
    componentWillMount() {
        console.log(this.props, '====ptops')
    }
    render() {
        return (
          <div className="main">
            欢迎来到由react编写的demo世界~
            利用dedux,react-router,react-axios,antd UI组件库～
          </div>
        )
    }
} 