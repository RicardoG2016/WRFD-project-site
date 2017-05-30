import React, { Component } from 'react';
import '../App.css';

class Blog extends Component {
  render() {
    return (
        <div className="container">
          <div className="twitter">
            <h1>Celebrate <a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></h1>
            <iframe frameBorder="0" width="550" height="500" src="http://rainforestpartnership.tweetwally.com/embed" target="_blank" scrolling="Auto"></iframe>
          </div>
        </div>
    );
  }
}

export default Blog;