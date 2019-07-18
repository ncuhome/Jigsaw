import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jigsaw from './pages/jigsaw'
import Login from './pages/login'
import HomePage from './pages/homepage'

function Routers() {
  return (
    <Router>
      <Route path="/jigsaw/" component={Jigsaw} />
      <Route path="/login/" component={Login} />
      <Route path="/home/" component={HomePage} />
    </Router>
  )
}

export default Routers
