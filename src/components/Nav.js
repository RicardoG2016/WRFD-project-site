import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Nav.css';
import wrd from '../images/logos/wrd.png';

class Nav extends Component {
  render() {
    return (
        <div className="bs-component main-menu">
          <nav className="navbar navbar-default">
            <div className="container-fluid nav-con">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/home" className="navbar-brand">
                    <img src={wrd} alt="logo" />
                </Link>
                <span className="nav navbar-nav navbar-left"><Link className="logo-text" to="/home">World Rainforest Day</Link></span>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><span><a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="navdo donate btn-lg btn-secondary btn">Donate</button></a></span></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

export default Nav;

