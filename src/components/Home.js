import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../App.css';
import Blog from './Blog';
import Twitter from './Twitter';
import two from '../images/scenes/b.png';
import Partners from './Partners';
import Purpose from './Purpose';
import Contact from './Contact';
import Action from './Action';
import Subscribe from './Subscribe';
import Footer from './Footer';

class Home extends Component {
  render() {

    return (
        <div>
            <div className="Homepage">
                <div className="HomeContent">
                    <h4>Let's Celebrate the Rainforest</h4>
                    <h1>World Rainforest Day</h1>
                    <hr />
                    <h3>June 22 2017</h3>
                </div>
                <div>
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
