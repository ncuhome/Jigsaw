import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jigsaw from './pages/jigsaw'

function Routers() {
  return (
    <Router>
      <Route path="/jigsaw/" component={Jigsaw} />
    </Router>
  )
}

export default Routers
