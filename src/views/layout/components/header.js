import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import { Link } from 'react-router-dom'
import style from '../index.module.scss'
const { Header } = Layout
export default class Headers extends Component {
                 state = {
                   collapsed: false
                 }
                 toggle = () => {
                   this.setState({
                     collapsed: !this.state.collapsed
                   })
                 }

                 render() {
                   return (
                     <Header style={{ color: '#fff' }} theme="dark">
                       <Icon
                         className="trigger"
                         type={
                           this.state.collapsed ? 'menu-unfold' : 'menu-fold'
                         }
                         onClick={this.toggle}
                       />
                       <span className={style.headerRi}>
                         <Link to="/login">退出</Link>
                       </span>
                       <span className={style.headerRi}>
                         用户名：
                         {/* {
                               this.props.state.account} */}
                       </span>
                     </Header>
                   )
                 }
               }