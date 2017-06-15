import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Action from './components/Action';
import Blog from './components/Blog';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Twitter from './components/Twitter';
import Tips from './components/Tips';
import WRD from './components/WRD';
import Rp from './components/Rp';
import Img from './components/Img';
import Help from './components/Help';
import Volunteer from './components/Volunteer';
import Facts from './components/Facts';
import Partners from './components/Partners';
import Footer from './components/Footer';

const Routes = () => (
  <Router >
    <div>
      <Route path="/" component={Nav}/>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/action" component={Action}/>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/twitter" component={Twitter}/>
      <Route path="/act" component={Tips}/>
      <Route path="/wrd" component={WRD}/>
      <Route path="/partners" component={Partners}/>
      <Route path="/rp" component={Rp}/>
      <Route path="/gallery" component={Img}/>
      <Route path="/help" component={Help}/>
      <Route path="/volunteer" component={Volunteer}/>
      <Route path="/rainforestfacts" component={Facts}/>
      <Route path="/" component={Footer}/>
    </div>
  </Router>
)

export default Routes;
