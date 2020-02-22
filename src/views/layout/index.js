import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import style from './index.module.scss'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

export default class Layouts extends Component {
                 state = {
                   collapsed: false
                 }

                 toggle = () => {
                   this.setState({
                     collapsed: !this.state.collapsed
                   })
                 }

                handleMenu(val) {
                  console.log(val,'====选中的值')

                }
                 render() {
                   return (
                     <Layout>
                       <Sider
                         trigger={null}
                         collapsible
                         collapsed={this.state.collapsed}
                       >
                         <div className={style.logo}>React</div>

                         <Menu
                           onClick={this.handleMenu.bind(this)}
                           theme="dark"
                           mode="inline"
                           defaultSelectedKeys={['2']}
                           defaultOpenKeys={['sub1']}
                           style={{ height: '100%', borderRight: 0 }}
                         >
                           <SubMenu
                             key="sub1"
                             title={
                               <span>
                                 <Icon type="user" />
                                 subnav 1
                               </span>
                             }
                           >
                             <Menu.Item key="1">option1</Menu.Item>
                             <Menu.Item key="2">option2</Menu.Item>
                             <Menu.Item key="3">option3</Menu.Item>
                             <Menu.Item key="4">option4</Menu.Item>
                           </SubMenu>
                           <SubMenu
                             key="sub2"
                             title={
                               <span>
                                 <Icon type="laptop" />
                                 subnav 2
                               </span>
                             }
                           >
                             <Menu.Item key="5">option5</Menu.Item>
                           </SubMenu>
                         </Menu>
                       </Sider>

                       <Layout>
                         <Header style={{ color: '#fff' }} theme="dark">
                           <Icon
                             className="trigger"
                             type={
                               this.state.collapsed
                                 ? 'menu-unfold'
                                 : 'menu-fold'
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

                         <Content
                           style={{
                             margin: '24px 16px',
                             padding: 24,
                             background: '#fff',
                             minHeight: 280
                           }}
                         >
                           Content..。 不同页面出现不同值
                         </Content>
                       </Layout>
                     </Layout>
                   )
                 }
               }

