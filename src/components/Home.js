import React, { Component } from 'react';
import '../App.css';
import Blog from './Blog';
import forest from '../forest.png';

class Home extends Component {
  render() {

    return (
        <div>
            <div className="Homepage">
                <div className="HomeContent">
                    <h1>World Rainforest Day</h1>
                    <hr />
                    <h2>June 22 2017</h2>
                </div>
                <div>
                <button className="HomeButton one" >Learn More</button>
                <button className="HomeButton sec" >Take Action</button>
                <button className="HomeButton third" >Donate</button>
                </div>
            </div>

        <Blog />
        </div>
    );
  }
}

export default Home;
