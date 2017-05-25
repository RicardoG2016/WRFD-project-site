import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../styles/Nav.css';
import logo from '../logo.png';

import About from './About';
import Actions from './Actions';
import Blog from './Blog';
import Home from './Home';

class Nav extends Component {
  render() {
    return (
      <div>
            <div className="navbar navbar-default main-menu">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/home" className="navbar-brand"><img src={logo} alt="logo" /></Link>
                        <a className="navbar-brand" href="/"></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about"><a className="">About</a></Link></li>
                            <li><Link to="/actions"><a className="">Get Involved</a></Link></li>
                            <li><Link to="/blog"><a className="">Blog</a></Link></li>
                            <li><button className="donate btn-lg btn-primary btn"><a href="https://rainforestpartnership.org/partner-with-us/donation/">Donate</a></button></li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Nav;
