import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Twitter from './Twitter';
import Partners from './Partners';
import Purpose from './Purpose';
import Footer from './Footer';

class Home extends Component {
  render() {

    return (
        <div id="home">
            <div className="Homepage">
                <div className="HomeContent">
                    <h4>Let's Celebrate the Rainforest</h4>
                    <h1>World Rainforest Day</h1>
                    <hr />
                    <h3>June 22 2017</h3>
                </div>
                <div className="btn-section">
                    <Link to="/about"><button className="HomeButton one" ><span>Learn More</span></button></Link>
                    <Link to="/action"><button className="HomeButton one" ><span>Take Action</span></button></Link>
                    <a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="HomeButton third" ><span>Donate</span></button></a>
                </div>
            </div>
            <div>
                <Purpose />
                <hr className="divider"/>
                <Partners />
                <hr className="divider"/>
                <Twitter />
                <br/>
                <br/>
                <br/>
                <Footer />
            </div>
        </div>
    );
  }
}

export default Home;
