import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import Home from './pages/home'
import NewPage from './pages/new'
import SelectPage from './pages/select'

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jigsaw/" component={Jigsaw} />
        <Route path="/login/" component={Login} />
        <Route path="/home/" component={Home} />
        <Route path="/new/" component={NewPage} />
        <Route path="/select/" component={SelectPage} />
        <Route component={Home} />
      </Switch>
    </Router>
  )
}

export default Routers
