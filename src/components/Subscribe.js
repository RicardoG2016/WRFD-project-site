import React, { Component } from 'react';
import '../App.css';

class Subscribe extends Component {
  render() {
    return (
        <div className="subscribe">
          <span className="Header">Subscribe</span>
          <br/>
          <br/>
          <form action="https://formspree.io/worldrainforestday@rainforestpartnership.org" method="POST" className="form-inline sub-form form-check mb-2 mr-sm-2 mb-sm-0">
              <input type="text" name="_gotcha" style={{display:'none'}} />
              <input type="hidden" name="_subject" value="New Subscriber!" />
              <input type="email" className="form-control form-control-lg" id="lgFormGroupInput" name="_replyto" placeholder="Email" />
              <button type="submit" className="btn-lg btn-secondary">Stay in touch</button>
          </form>
        </div>
    );
  }
}

export default Subscribe;