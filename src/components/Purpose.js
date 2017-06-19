import React, { Component } from 'react';
import '../App.css';
import bean from '../images/products/bean.png';
import f_4 from '../images/scenes/f_4.png';
import bf from '../images/animals/butterfly-1.png';


class Purpose extends Component {

  render() {
    return (
      <div className="container">
        <h3 className="Header">Together We Can Save the Rainforest</h3>
        <div className="row featurette">
          <div className="col-md-5 intro">
            <p className="lead text-muted">World Rainforest Day is a collaborative effort to raise awareness and encourage action created by Rainforest Partnership to save one of the earth’s most precious resources, our rainforest.</p>
            <p className="lead text-muted">Rainforests are home to most of Earth’s plant and animal life. By absorbing carbon dioxide, they play a critical role in addressing climate change. Yet every hour nearly 4,500 acres of rainforests are lost forever due to rampant logging, mining, ranching, fires, and oil drilling.</p>
            <p className="lead text-muted">Learn how you can help protect this precious resource. Take action on World Rainforest Day, share your commitment online, and encourage others to join in this important effort.</p>
            <p className="lead text-muted">Because the World Can’t Wait.</p>
            <p className="lead text-muted">Share how you’re helping to save the world’s rainforests</p>
            <p className="lead text-muted"><a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></p>
          </div>
          <div className="col-md-7">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="first-slide" src={f_4} alt="First slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={bf} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={bean} alt="Second slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Purpose;