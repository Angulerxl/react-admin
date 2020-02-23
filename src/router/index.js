import React from 'react'
import { HashRouter as Router, Route} from 'react-router-dom'
import Layouts from '@/views/layout'
import Login from '@/views/login'
import { connect } from 'react-redux'
import { createBrowserHistory } from 'history'
const customHistory = createBrowserHistory()

 class Routers extends React.Component { 
  render() { 
        return (
          <Router history={customHistory}>
            {this.props.state.isLogin ? (
              <Route path="/" component={Layouts} />
            ) : (
              <Route path="/login" component={Login} />
            )}
          </Router>
        )
    }
}
function mapStateToProps(state) {
  return { state: state.login }
}
export default connect(mapStateToProps)(Routers)