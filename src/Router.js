import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import Home from './pages/home'
import NewPage from './pages/new'
import RoomPage from './pages/room'

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jigsaw/" component={Jigsaw} />
        <Route path="/login/" component={Login} />
        <Route path="/home/" component={Home} />
        <Route path="/new/" component={NewPage} />
        <Route path="/room/" component={RoomPage} />
        <Route component={Home} />
      </Switch>
    </Router>
  )
}

export default Routers
