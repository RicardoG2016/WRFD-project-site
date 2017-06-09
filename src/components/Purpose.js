import React, { Component } from 'react';
import '../App.css';
import bean from '../images/products/bean.png';
import f_11 from '../images/scenes/air_river.png';
import f_10 from '../images/scenes/f_10.png';
import f_8 from '../images/scenes/f_8.png';
import f_7 from '../images/scenes/f_7.png';
import f_4 from '../images/scenes/f_4.png';
import bf from '../images/animals/butterfly-1.png';

class Purpose extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="Header">Together We Can Save the Rainforest</h3>
        <div className="row featurette">
          <div className="col-md-5 intro">
            <h2 className="featurette-heading text-muted"></h2>
            <p className="lead text-muted">World Rainforest Day is a collaborative effort to raise awareness and encourage action to save one of the earth’s most precious resources, our rainforest.</p>
            <p className="lead text-muted">Rainforests are home to most of Earth’s plant and animal life. By absorbing carbon dioxide, they play a critical role in addressing climate change. Yet every hour nearly 4,500 acres of rainforests are lost forever due to illegal logging, mining, agriculture, fires, and oil drilling.</p>
            <p className="lead text-muted">Learn how you can help protect this precious resource. Take action on World Rainforest Day, share your commitment online, and encourage others to join in this important effort.</p>
            <p className="lead text-muted">Because the World Can’t Wait</p>
            <p className="lead text-muted">Share how you’re helping to save the world’s rainforests</p>
            <p className="lead text-muted">#WorldRainforestDay</p>
          </div>
          <div className="col-md-7">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
                <li data-target="#myCarousel" data-slide-to="5"></li>
                <li data-target="#myCarousel" data-slide-to="6"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="first-slide" src={f_10} alt="First slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={bf} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={bean} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_4} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_11} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_8} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_7} alt="Third slide" />
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

// <hr className="divider"/>

//       <div className="row featurette">
//         <div className="col-md-5 col-md-push-7">
//           <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
//           <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
//         </div>
//         <div className="col-md-7 col-md-pull-5">
//           <img className="featurette-image img-responsive center-block" src={b} alt="Generic placeholder image" />
//         </div>
//       </div>

// <hr className="divider"/>

//       <div className="row featurette">
//         <div className="col-md-5">
//           <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
//           <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
//         </div>
//         <div className="col-md-7">
//           <img className="featurette-image img-responsive center-block" src={c} alt="Generic placeholder image" />
//         </div>
//       </div>