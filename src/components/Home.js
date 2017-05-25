import React, { Component } from 'react';
import '../App.css';
import forest from '../forest.png';

class Home extends Component {
  render() {
    return (
        <div className="twitter">
            <h1>#EarthDay Twitter Feed Below</h1>
            <iframe frameBorder="0" width="550" height="500" src="http://rainforestpartnership.tweetwally.com/embed" target="_blank" scrolling="Auto"></iframe>
        </div>
    );
  }
}

export default Home;