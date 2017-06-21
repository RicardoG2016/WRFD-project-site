import React, { Component } from 'react';
import '../App.css';

class Video extends Component {
  
componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
      <div className="video">
        <h3 className="Header">Stop the Burning</h3>
        <iframe className="yt-video" src="https://www.youtube.com/embed/iPdp-_ZwMTU?ecver=2" frameBorder="0" allowFullScreen></iframe>
      </div>

      
    );
  }
}

export default Video;


