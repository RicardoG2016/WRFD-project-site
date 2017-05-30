import React, { Component } from 'react';
import '../App.css';

class Twitter extends Component {
  render() {
    return (
        <section className="container">
          <div className="twitter">
            <h3 className="Header">Happening Now: <a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></h3>
            <iframe frameBorder="0" width="100%" height="400px" src="http://rainforestpartnership.tweetwally.com/embed" target="_blank" scrolling="Auto"></iframe>
          </div>
        </section>
    );
  }
}

export default Twitter;