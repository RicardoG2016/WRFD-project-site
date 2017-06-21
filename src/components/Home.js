import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import Partners from './Partners';
import Purpose from './Purpose';
import Subscribe from './Subscribe';
import Video from './Video';

class Home extends Component {

  componentDidMount(){
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
                    <h4>Because the World Can't Wait</h4>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="btn-section">
                    <Link to="/worldrainforestday"><button className="HomeButton one" ><span>Learn More</span></button></Link>
                    <Link to="/act"><button className="HomeButton one" ><span>Take Action</span></button></Link>
                    <Link to="/donate"><button className="HomeButton third" ><span>Donate</span></button></Link>
                </div>
            </div>
            <div>
                <Purpose />
                <hr/>
                <Video />
                <br/>
                <br/>
                <br/>
                <hr/>
                <br/>
                <Partners />
                <br/>
                <Subscribe />
            </div>
        </div>
    );
  }
}

export default Home;
