import React, { Component } from 'react';
import '../App.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
          <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/glacier.jpg" id="bgvid" playsinline autoPlay muted>
            <source src="http://thenewcode.com/assets/videos/glacier.webm" type="video/webm" />
            <source src="http://thenewcode.com/assets/videos/glacier.mp4" type="video/mp4" />
          </video>
      </div>
    );
  }
}

export default LandingPage;
