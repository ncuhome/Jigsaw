import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import Home from './pages/home'
import New from './pages/new'
import Room from './pages/room'
import Join from './pages/join'
import Sort from './pages/sort'
import Result from './pages/result'
import { connect } from 'react-redux'

const RoutesList = [
  {
    path: "/",
    component: Home,
    auth: true,
  },
  {
    path: "/jigsaw/",
    component: Jigsaw,
    auth: true,
  },
  {
    path: "/login/",
    component: Login,
    auth: false,
  },
  {
    path: "/home/",
    component: Home,
    auth: true,
  },
  {
    path: "/new/",
    component: New,
    auth: true,
  },
  {
    path: "/room/",
    component: Room,
    auth: true,
  },
  {
    path: "/join/",
    component: Join,
    auth: true,
  },
  {
    path: "/sort/",
    component: Sort,
    auth: true,
  },
  {
    path: "/result/",
    component: Result,
    auth: true,
  },
  {
    path: "*",
    component: Home,
    auth: true
  }
];

function Routers({status}) {
  return (
    <Router>
      <Switch>
        {
          RoutesList.map((item, index) => (
            <Route key={index} exact path={item.path} render={props =>
              (!item.auth ? (<item.component {...props} />) :
                (status ? <item.component {...props} /> :
                    <Redirect to={{
                      pathname: '/login/',
                      state: { from: props.location }
                    }}/>)
              )
            }/>
          ))
        }
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    status: state.login.status,
  }
};

export default connect(mapStateToProps)(Routers)
