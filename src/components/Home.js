import React, { Component } from 'react';
import '../App.css';
import Blog from './Blog';
import two from '../b.png';

class Home extends Component {
  render() {

    return (
        <div>
            <div className="Homepage">
                <div className="HomeContent">
                    <h3>Let's Celebrate the Rainforest</h3>
<br />
                    <h1>World Rainforest Day</h1>
                    <hr />
                    <h2>June 22 2017</h2>
                    
                    
                </div>
                <div>
                <button className="HomeButton one" ><span>Learn More</span></button>
                <button className="HomeButton sec" ><span>Take Action</span></button>
                <button className="HomeButton third" ><span>Donate</span></button>
                </div>
            </div>

        <Blog />
        </div>
    );
  }
}

export default Home;
