import React, { Component } from 'react';
import '../App.css';

class Subscribe extends Component {
  render() {
    return (
        <div className="subscribe">
          <form className="form-inline sub-form form-check mb-2 mr-sm-2 mb-sm-0">
              <input type="text" className="form-control form-control-lg" id="lgFormGroupInput" placeholder="Name" />
              <input type="email" className="form-control form-control-lg" id="lgFormGroupInput" placeholder="Email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
    );
  }
}

export default Subscribe;