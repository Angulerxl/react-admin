import React, { Component } from 'react'
import './style/topNav.scss'

export default class TopNav extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className="top-nav">
                首页
                <span className="acount signOut">
                    退出
                </span>
                <span className="acount ">
                    用户名：{'超级管理员'}
                </span>
                
            </div>
        )
    }
} 