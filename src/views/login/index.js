import React, { Component } from 'react'
// import { BrowserRouter, Link, Route } from 'react-router-dom'
import './login.scss'
// import { connect } from 'react-redux';

 export default class Login extends Component {
                 constructor(props) {
                   super(props)
                   console.log(props, '===props的值')
                   console.log(props.text0)
                   this.state = {
                     account: 'admin',
                     passWork: '123456'
                   }
                   this.handleAccount = this.handleAccount.bind(this)
                   this.handlePW = this.handlePW.bind(this)
                   this.handleSubmit = this.handleSubmit.bind(this)
                 }
                 handleAccount(e) {
                   
                   this.setState({ account: e.target.value })
                 }
                 handlePW(e) {
                   this.setState({ passWork: e.target.value })
                 }
                handleSubmit() { 
                    alert('提交表单')
                }
                 render() {
                   return (
                   
                       <div>
                         <div className="title">
                           <h1>React</h1>
                         </div>
                         <div className="content">
                           <div>
                             <label htmlFor="">账号：</label>
                             <input
                               type="text"
                               value={this.state.account}
                               placeholder="请输入账号"
                               onChange={this.handleAccount}
                             />
                           </div>
                           <div>
                             <label htmlFor="">密码：</label>
                             <input
                               type="passwork"
                               value={this.state.passWork}
                               placeholder="请输入密码"
                               onChange={this.handlePW}
                             />
                           </div>
                           <div>
                             <button
                                 type="button"
                                 onClick={this.handleSubmit}
                               >
                                 登录
                               </button>
                           </div>
                         </div>
                       </div>
                   
                   )
                 }
               }
// //需要渲染什么数据
// function mapStateToProps(state) {
//   // console.log(state,'====Login-dtate')
//   return {
//    state
//   }
// }

// function mapDispatchToProps(dispatch) {
//   console.log(dispatch, '====Login-Dispatch')
//   return {
//     submitBtn :(value)=> dispatch({ type: 'UPDATE_ACCOUNT', value: value })
   
//   } 
//   // dispatch.
// }
// // export default Navbar;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);