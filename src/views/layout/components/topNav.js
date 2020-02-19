import React, { Component } from 'react'
import { connect } from 'react-redux';
import './style/topNav.scss'

class TopNav extends Component {
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
                    用户名：{this.props.state.account}
                </span>
                
            </div>
        )
    }
} 
function mapStateToProps(state) {
    return { state: state.login }
}
export default connect(mapStateToProps)(TopNav);
