import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import menuApi from '@/apis/menu'
let { list:routes } = menuApi.data
// import Echarts from '@/views/echarts'
// import Set from '@/views/set'
// const routes = [
//   {
//     path: '/',
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     component: () => <h2>Home</h2>
//   },
//   {
//     path: '/bubblegum',
//     sidebar: () => <div>bubblegum!</div>,
//     component: () => <Echarts/>
//   },
//   {
//     path: '/shoelaces',
//     sidebar: () => <div>shoelaces!</div>,
//     component: () =><Set/>
//   }
// ]
console.log(routes[0].component,'===000')
console.log(routes[1].component, '===111')
export default class Layout extends Component { 
  handleLink() { 
    console.log(this.props, '===')
    this.props.history.replace('/set')
  }
  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              padding: '10px',
              width: '40%',
              background: '#f0f0f0'
            }}
          >
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/echarts">Bubblegum</Link>
              </li>
              <li onClick={this.handleLink.bind(this)}>
                set
                {/* <Link to="/set">Shoelaces</Link> */}
              </li>
            </ul>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.component />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
