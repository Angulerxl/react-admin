import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Layouts from '@/views/layout'
import Login from '@/views/login'
// import Echarts from '@/views/echarts'
// import Set from '@/views/set'
// const history = useHistory()
// console.log(history,'====lishi')
// debugger
export default class Routers extends React.Component { 
  
    render() { 
        return (
          <Router>
            <Route path="/" exact render={() => <Redirect to="/layout" />} />
            {/* <Route path="/"  /> */}
            {/* <Route path="/Layouts" render={
              () => 
                <Layouts>
                  <Route path="/echarts" component={Echarts}></Route>
                  <Route path="/set" component={Set}></Route>
                </Layouts>
            }>
            </Route> */}
            <Route path="/layout" component={Layouts}></Route>
            {/* <Route path="/echarts" component={Echarts}></Route> */}
            {/* <Route path="/Layouts" component={Layouts}>
              <Route path="/echarts" component={Echarts}></Route>
              <Route path="/set" component={Set}></Route>
            </Route> */}
            <Route path="/login" component={Login} />
          </Router>
        )
    }
}
