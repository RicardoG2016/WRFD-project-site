import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Nav.css';
import wrd from '../images/logos/wrd.png';

class Nav extends Component {

componentDidMount(){
  window.scrollTo(0, 0);
}

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
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/worldrainforestday">World Rainforest Day</Link></li>
                        <li><Link to="/rainforestpartnership">Rainforest Partnership</Link></li>
                        <li><Link to="/rainforestfacts">Rainforest Facts</Link></li>
                        <li><a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-pressrelease/press.pdf">Press Release</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Take Action <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/act">Act Now</Link></li>
                        <li><Link to="/twitter">Share</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><span><Link to="/donate"><button className="navdo donate btn-lg btn-secondary btn">Donate</button></Link></span></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}

export default Nav;

