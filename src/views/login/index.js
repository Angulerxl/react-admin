import React, { Component } from 'react'
import style from './login.module.scss'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '@/redux/actions/login'
import { Input, Spin, message } from 'antd'

// const history = createBrowserHistory()
 class Login extends Component {
   constructor(props) {
     super(props)
     this.state = { loading: false }
     console.log(props, '====props登录获取props')
     this.handleAccount = this.handleAccount.bind(this)
     this.handlePW = this.handlePW.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   
  //  toggle = value => {
  //    this.setState({ loading: value })
  //  }
   handleAccount(e) {
     this.props.actions.updateAccount(e.target.value)
   }
   handlePW(e) {
     this.props.actions.updatePsW(e.target.value)
   }
   handleSubmit() {
     this.setState({ loading: true })
     setTimeout(() => {
      message.info('登录成功')
                  this.props.actions.isLogin(true)
      this.props.history.push('/')
      
                },1500)
   }
   render() {
     return (
       <div>
         <Spin tip="拼命登录中..." spinning={this.state.loading}>
           <div className={style.title}>
             <h1 style={{ color: '#61dafb' }}>React</h1>
           </div>
           <div className={style.content}>
             <div>
               <label htmlFor="">账号：</label>
               <Input
                 placeholder="请输入账号"
                 value={this.props.state.account}
                 type="text"
                 style={{ width: '180px' }}
                 onChange={this.handleAccount}
               />
             </div>
             <div>
               <label htmlFor="">密码：</label>
               <Input
                 placeholder="请输入密码"
                 value={this.props.state.passWork}
                 type="passwork"
                 style={{ width: '180px' }}
                 onChange={this.handlePW}
               />
             </div>
             <div>
               <button type="button" onClick={this.handleSubmit}>
                 登录
               </button>
             </div>
           </div>
         </Spin>
       </div>
     )
   }
 }
//需要渲染什么数据
function mapStateToProps(state) {
  return { state:state.login}
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions,dispatch),
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(Login);