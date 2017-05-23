import React, { Component } from 'react';
import '../styles/Nav.css';
import logo from '../logo.png';

class Nav extends Component {
  render() {
    return (
      <div>
        <header id="home" className="header navbar-fixed-top">
            <div className="navbar navbar-default main-menu">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a  href="/" className="navbar-brand"><img src={logo} /></a>
                        <a className="navbar-brand" href="/"></a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about" className="">About</a></li>
                            <li><a href="#getinvolved" className="">Get Involved</a></li>
                            <li><a href="#blog" className="">Blog</a></li>
                            <li><button className="donate btn-lg btn-primary btn"><a href="#donate">Donate</a></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default Nav;
