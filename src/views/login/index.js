import React, { Component } from 'react'
import style from './login.module.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '@/redux/actions/login'
// import { createBrowserHistory } from 'history'

// const history = createBrowserHistory()
 class Login extends Component {
                 constructor(props) {
                   super(props)
                   console.log(props,'====props登录获取props')
                   this.handleAccount = this.handleAccount.bind(this)
                   this.handlePW = this.handlePW.bind(this)
                   this.handleSubmit = this.handleSubmit.bind(this)
                 }
                 handleAccount(e) {
                   this.props.actions.updateAccount(e.target.value )
                 }
                handlePW(e) {
                  this.props.actions.updatePsW(e.target.value)
                 }
                handleSubmit() { 
                  this.props.actions.isLogin('true')
                  alert('提交表单')
                }
                 render() {
                   return (
                     <div>
                       <div className={style.title}>
                         <h1 style={{ color: '#61dafb' }}>React</h1>
                       </div>
                       <div className={style.content}>
                         <div>
                           <label htmlFor="">账号：</label>
                           <input
                             type="text"
                             value={this.props.state.account}
                             placeholder="请输入账号"
                             onChange={this.handleAccount}
                           />
                         </div>
                         <div>
                           <label htmlFor="">密码：</label>
                           <input
                             type="passwork"
                             value={this.props.state.passWork}
                             placeholder="请输入密码"
                             onChange={this.handlePW}
                           />
                         </div>
                         <div>
                           <button type="button" onClick={this.handleSubmit}>
                             登录
                           </button>
                         </div>
                       </div>
                     </div>
                   )
                 }
               }
//需要渲染什么数据
function mapStateToProps(state) {
  return { state:state.login}
}
//1、不使用bindActionCreators时候：
// function mapDispatchToProps(dispatch) {
//   console.log(dispatch, '====Login-Dispatch000000')
//   return {
//     updateAccount: (value) => dispatch({ type: 'UPDATE_ACCOUNT', value}),
//     updatePW: (value) => dispatch({ type: 'UPDATE_PASSWORK', value }),
//   } 
// }
// 2、通过把aciont和dispatch链接起来
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions,dispatch),
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Login);