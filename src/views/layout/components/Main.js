
import React, { Component } from 'react'
import style from './style/main.module.scss'

export default class Main extends Component {
    componentWillMount() {
        console.log(this.props, '====ptops')
    }
    render() {
        return (
          <div className={style.main}>
            欢迎来到由react编写的demo世界~
            利用dedux,react-router,react-axios,antd UI组件库～
          </div>
        )
    }
} 