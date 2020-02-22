import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Layouts from '@/views/layout'
import Login from '@/views/login'
import { connect } from 'react-redux'
// import Echarts from '@/views/echarts'
// import Set from '@/views/set'
// import Test from '@/views/test'
// const history = useHistory()
// console.log(history,'====lishi')
// debugger

 class Routers extends React.Component { 
  render() { 
        return (
          <Router>
            {/* <ModalSwitch/> */}
            { this.props.state.isLogin==='true'? <Layouts /> : <Login />}
            {/* <Route path="/">
             
            </Route>
            <Route path="/login">
             
            </Route> */}
            {/* <Route path="/" exact render={() => <Redirect to="/layout" />} />
            <Route path="/layout" component={Layouts}></Route>
            <Route path="/login" component={Login} /> */}
          </Router>
        )
    }
}
function mapStateToProps(state) {
  return { state: state.login }
}
export default connect(mapStateToProps)(Routers)