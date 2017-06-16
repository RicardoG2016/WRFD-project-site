import React, { Component } from 'react';
import '../App.css';

class Donate extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div id="contact">
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="donate-img">
                    <h5 className="hidden-xs-down l-content">Donate</h5>
                  </div>
                </div>
              </div>
              <div className="contact-form col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <h3>Help Save The Rainforests Around the World</h3>
                <br/>
                <p>By donating to Rainforest Partnership or any other organization or effort that protects  these precious ecosystems.</p>
                <p>The forests and the world thanks you!</p>
                <div className="center-btn">
                  <a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="dd navdo donate btn-lg btn-secondary btn">Donate</button></a>
                </div>
                <br/>
              </div>
          </div>
      </div>
    );
  }
}

export default Donate;