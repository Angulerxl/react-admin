import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import style from './index.module.scss'
import routesApi from '@/apis/menu'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginActions from '@/redux/actions/login'
let { list: routes } = routesApi.data
const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

 class Layouts extends Component {
                 state = {
                   collapsed: false
                 }
                 toggle = () => {
                   this.setState({
                     collapsed: !this.state.collapsed
                   })
                 }
  
   componentDidMount() { 
     
     console.log(this.props,'1111========')
   }
                 renderLeftNav() {
                   return routes.map((item, index) => {
                     if (!item.children) {
                       return (
                         <Menu.Item key={item.id}>
                           <Link to={item.path}>
                             <Icon type={item.meta.icon} />
                             <span>{item.meta.title}</span>
                           </Link>
                         </Menu.Item>
                       )
                     }
                     return (
                       <SubMenu
                         key={item.id}
                         title={
                           <span>
                             <Icon type={item.meta.icon} />
                             {item.meta.title}
                             {/* <Link to={item.path}>{item.meta.title}</Link> */}
                           </span>
                         }
                       >
                         {item.children.map((child, index) => {
                           return (
                             <Menu.Item key={child.id}>
                               <Link to={child.path}>{child.meta.title}</Link>
                             </Menu.Item>
                           )
                         })}
                       </SubMenu>
                     )
                   })
                 }
                renderContent() { 
                  let arr = []
                routes.map((route, index) => {
                    if (!route.children) {
                      arr.push(
                        <Route
                          key={route.id}
                          path={route.path}
                          exact={route.exact}
                          children={route.component}
                        />
                      )
                    } else {
                      route.children.map((child, index) => {
                        arr.push(
                          <Route
                            key={child.id}
                            path={child.path}
                            exact={child.exact}
                            children={child.component}
                          ></Route>
                        )
                      })
                    }
                })
                  return arr
                  }
                 componentWillMount() {
                  //  let data =this.renderContent()
                  //  console.log(data, '================')
                 }
                 handleSigout() {
                   this.props.dispatch.isLogin(false)

                 }
                 handleMenu(val) {
                  //  console.log(val, '====选中的值')
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
                           defaultSelectedKeys={['1']}
                           defaultOpenKeys={['sub1']}
                           style={{ height: '100%', borderRight: 0 }}
                         >
                           {this.renderLeftNav()}
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
                           <span
                             className={style.headerRi}
                             onClick={this.handleSigout.bind(this)}
                           >
                             <Link to="/login">退出</Link>
                             {/* 退出 */}
                           </span>
                           <span className={style.headerRi}>
                             用户名：{this.props.state.account}--
                             {this.props.state.isLogin}
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
                           <Switch>{this.renderContent()}</Switch>
                         </Content>
                       </Layout>
                     </Layout>
                   )
                 }
               }
//需要渲染什么数据
function mapStateToProps(state) {
  return { state:state.login}
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators(loginActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layouts)