import React, { Component } from 'react';
import '../App.css';
import logos from '../images/partners.png';

class Partners extends Component {
  render() {
    return (
        <div className="container">
            <h3 className="Header">Partners</h3>
            <p>World Rainforest Day is a colloborative effort to encourage worldwide awareness and action to save one of the earth’s most precious resources, our rainforest. Together with our partners we will continue to spread awareness, take action and work with local communities to help protect and preserve our Rainforest.</p>
            <br />
            <img className="partners" src={logos} alt="Second slide" />
        </div>
    );
  }
}

export default Partners;