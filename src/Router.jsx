import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import Home from './pages/home'
import NewPage from './pages/new'
import RoomPage from './pages/room'
import JoinPage from './pages/join'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
  },
  {
    path: "/home/",
    component: Home,
    auth: true,
  },
  {
    path: "/new/",
    component: NewPage,
    auth: true,
  },
  {
    path: "/room/",
    component: RoomPage,
    auth: true,
  },
  {
    path: "/join/",
    component: JoinPage,
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

export default  connect(mapStateToProps)(Routers)
