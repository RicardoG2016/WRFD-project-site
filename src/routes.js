import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Action from './components/Action';
import Donate from './components/Donate';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Twitter from './components/Twitter';
import Tips from './components/Tips';
import WRD from './components/WRD';
import Rp from './components/Rp';
import Facts from './components/Facts';
import Partners from './components/Partners';
import Become_a_partner from './components/Become_a_partner';
import Footer from './components/Footer';

const Routes = () => (
  <Router >
    <div>
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/action" component={Action}/>
      <Route path="/about" component={About}/>
      <Route path="/donate" component={Donate}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/twitter" component={Twitter}/>
      <Route path="/act" component={Tips}/>
      <Route path="/worldrainforestday" component={WRD}/>
      <Route path="/partners" component={Partners}/>
      <Route path="/become_a_partner" component={Become_a_partner}/>
      <Route path="/rainforestpartnership" component={Rp}/>
      <Route path="/rainforestfacts" component={Facts}/>
      <Route path="/" component={Footer}/>
    </div>
  </Router>
)

export default Routes;
