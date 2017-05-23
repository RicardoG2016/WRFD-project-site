import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';

class Routes extends Component {
  render() {

    const b = {
      backgroundColor: "grey"
    }

    return (
      <Router history={browserHistory}>
        <Route component={Nav}>
          <Route path="/" component={LandingPage} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
