import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Actions from './components/Actions';
import Blog from './components/Blog';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={Nav}/>
      <Route path="/home" component={Home}/>
      <Route path="/actions" component={Actions}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
    </div>
  </Router>
)

export default Routes;
