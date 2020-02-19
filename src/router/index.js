import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '@/views/layout'
import Login from '@/views/login'

export default class Routers extends React.Component { 
    render() { 
        return (
          <Router>
            <Route path="/" component={Layout}>
              {/* <IndexRoute component={Layout} /> */}
              {/* <Route path="accounts" component={Accounts} /> */}
            </Route>
            <Route path="/login" component={Login} />
          </Router>
        )
    }
}
