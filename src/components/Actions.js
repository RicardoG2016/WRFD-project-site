import React, { Component } from 'react';
import '../App.css';
import a from '../images/scenes/f_1.png';
import b from '../images/scenes/f_11.png';
import c from '../images/scenes/f_3.png';
import d from '../images/scenes/f_9.png';

class Actions extends Component {
  render() {
    return (
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="first-slide" src={d} alt="First slide" />
            </div>
            <div className="item">
              <img className="second-slide" src={a} alt="Second slide" />
            </div>
            <div className="item">
              <img className="third-slide" src={c} alt="Third slide" />
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Actions;