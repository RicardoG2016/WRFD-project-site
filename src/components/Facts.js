import React, { Component } from 'react';
import '../App.css';

class Facts extends Component {
  render() {
    return (
      <div id="about">
          <div className="row">
              <div className="col-md-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="facts">
                    <h5 className="hidden-xs-down l-content">Facts</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p>Facts facts facts.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Facts;