import React, { Component } from 'react';
import '../App.css';
import insta from '../images/logos/instagram.png';
import fb from '../images/logos/fb.png';
import tw from '../images/logos/twitter.png';
import yt from '../images/logos/youtube.png';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <div className="container">
            <div className="col-xl-12 left-footer">
              <span>© 2017 WorldRainforestDay</span>
              <a href="https://www.instagram.com/worldrainforestday/"><img className="social" src={insta} alt="instagram" /></a>
              <a href="https://www.facebook.com/worldrainforestday/"><img className="social" src={fb} alt="facebook" /></a>
              <a href="https://twitter.com/Rainforest_Day"><img className="social" src={tw} alt="twitter" /></a>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;