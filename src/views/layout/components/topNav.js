import React, { Component } from 'react'
import { connect } from 'react-redux';
import style from './style/topNav.module.scss'
import { bindActionCreators } from 'redux';
import * as loginActions from '@/redux/actions/login'
import { Link } from 'react-router-dom'
console.log(style, '1111style')

class TopNav extends Component {
    signOut() {
        this.props.actions.isLogin(false)
        // this.props.history.push("/login")
    }
    render() {
        return (
          <div className={style.topNav}>
            <span className={style.title}>React</span>
            <span
              className={[style.acount, style.signOut]}
              onClick={this.signOut.bind(this)}
            >
              <Link to="/login">退出</Link>
            </span>
            <span className={style.acount}>
              用户名：{this.props.state.isLogin && this.props.state.account}
            </span>
          </div>
        )
    }
} 
function mapStateToProps(state) {
    return { state: state.login }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
