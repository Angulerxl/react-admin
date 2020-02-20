import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from '@/views/layout'
import Login from '@/views/login'
// const history = useHistory()
// console.log(history,'====lishi')
// debugger
export default class Routers extends React.Component { 
  
    render() { 
        return (
          <Router >
            <Route path="/" exact render={() => <Redirect to="/layout" />} />
            <Route path="/layout" component={Layout} />
            <Route path="/login" component={Login} />
          </Router>
        )
    }
}
