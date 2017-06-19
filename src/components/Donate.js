import React, { Component } from 'react';
import '../App.css';
import rp from '../images/logos/rp.png';
import bo from '../images/logos/bonobo.png';

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
                <h3 className="donate-header">Help Save Rainforests Around the World</h3>
                <br/>
                <p>Help support the organizations below that are supporting WorldRainforestDay and are committed to protecting Rainforests and it's inhabitants.</p>
                <p>The forests and the world thanks you!</p>
                <div className="center-btn">
                  <a href="https://rainforestpartnership.org/partner-with-us/donation/"><img className="do-img" src={rp} /></a>
                  <a href="http://www.bonobo.org/"><img className="do-img" src={bo} /></a>
                </div>
                <br/>
              </div>
          </div>
      </div>
    );
  }
}

export default Donate;