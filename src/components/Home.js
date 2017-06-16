import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Twitter from './Twitter';
import Partners from './Partners';
import Purpose from './Purpose';

class Home extends Component {

  componentDidMount(){
    console.log('home');
    window.scrollTo(0, 0)
  }

  render() {
    return (
        <div id="home">
            <div className="Homepage">
                <div className="HomeContent">
                    <h1>World Rainforest Day</h1>
                    <hr />
                    <h3>June 22 2017</h3>
                    <br/>
                    <h4>Because the world can't wait</h4>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="btn-section">
                    <Link to="/about"><button className="HomeButton one" ><span>Learn More</span></button></Link>
                    <Link to="/action"><button className="HomeButton one" ><span>Take Action</span></button></Link>
                    <a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="HomeButton third" ><span>Donate</span></button></a>
                </div>
            </div>
            <div>
                <Purpose />
                <br/>
            </div>
        </div>
    );
  }
}

export default Home;
