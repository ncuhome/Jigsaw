import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import HomePage from './pages/homepage'

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jigsaw/" component={Jigsaw} />
        <Route path="/login/" component={Login} />
        <Route path="/home/" component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  )
}

export default Routers
