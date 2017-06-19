import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logos from '../images/logos/partners.png';

class Partners extends Component {
  render() {
    return (
        <div className="container partner-section">
            <h3 className="Header">Partners</h3>
            <p>Rainforest Partnership would like to thank our collaborating partners for helping us launch the inaugural World Rainforest Day. Together, we aim to inform and activate an ongoing, ever increasing global response for protecting rainforests.</p>
            <img className="partners" src={logos} alt="partner logos" />
            <p style={{textAlign: "center", fontSize: "18px"}}>Interested in becoming a partner?<Link to="/become_a_partner"> Find out how.</Link></p>        
        </div>
    );
  }
}

export default Partners;