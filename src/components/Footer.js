import React, { Component } from 'react';
import '../App.css';
import insta from '../images/logos/instagram.png';
import fb from '../images/logos/fb.png';
import tw from '../images/logos/twitter.png';
import yt from '../images/logos/youtube.png';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <div className="container">
            <div className="col-md-4 col-sm-4 col-xs-4 left-footer">
              <h4 className="footer-header">Social</h4>
              <a href="https://www.instagram.com/worldrainforestday/"><img className="social" src={insta} alt="instagram" /></a>
              <a href="http://www.facebook.com"><img className="social" src={fb} alt="facebook" /></a>
              <a href="http://www.twitter.com"><img className="social" src={tw} alt="twitter" /></a>
              <a href="http://www.youtube.com"><img className="social" src={yt} alt="youtube" /></a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 center-footer">
                <h4 className="footer-header">Basics</h4>
                <h4><Link to="/about">About</Link></h4>
                <h4><Link to="/about">Learn More</Link></h4>
                <h4><Link to="/action">Take Action</Link></h4>
                <a href="https://rainforestpartnership.org/partner-with-us/donation/"><h4>Donate</h4></a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 right-footer">
                <h4 className="footer-header">Contact Us</h4>
                <Link to="/contact"><h4>Email</h4></Link>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;