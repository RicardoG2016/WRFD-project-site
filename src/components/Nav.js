import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../styles/Nav.css';
import logo from '../logo.png';
import wrd from '../wrd.png';

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
                        <Link to="/home" className="navbar-brand">
                            <img src={wrd} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav navbar-left">
                            <li><Link to="/about">World Rainforest Day</Link></li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><span><a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="donate btn-lg btn-secondary btn">Donate</button></a></span></li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Nav;
