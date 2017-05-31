import React, { Component } from 'react';
import '../App.css';
import bean from '../images/products/bean.png';
import tree_frog from '../images/animals/tree_frog.png';
import f_11 from '../images/scenes/air_river.png';
import f_10 from '../images/scenes/f_10.png';
import f_8 from '../images/scenes/f_8.png';
import f_7 from '../images/scenes/f_7.png';
import f_4 from '../images/scenes/f_4.png';
import river from '../images/scenes/river.png';
import jag from '../images/animals/jaguar.png';
import bf from '../images/animals/butterfly-1.png';

class Purpose extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="Header">World Rainforest Day</h3>
        <div className="row featurette">
          <div className="col-md-5">
            <h2 className="featurette-heading text-muted"></h2>
            <br />
            <p className="lead text-muted">World Rainforest Day is a colloborative effort to encourage worldwide awareness and action to save one of the earth’s most precious resources, our rainforest.</p>
            <p className="lead text-muted">Climate change presents an unpredictable and catastrophic future for rainforest ecosystems. Rainforest communities are experiencing the true ramifications of climate change with dramatic weather events increasing and deforestation devastating communities and biodiversity. The world needs to gain a better understanding of the value of rainforests before it is too late.</p>
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
                <li data-target="#myCarousel" data-slide-to="7"></li>
                <li data-target="#myCarousel" data-slide-to="8"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img className="first-slide" src={river} alt="First slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={tree_frog} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="second-slide" src={bean} alt="Second slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_7} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_4} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={jag} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_8} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_10} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={f_11} alt="Third slide" />
                </div>
                <div className="item">
                  <img className="third-slide" src={bf} alt="Third slide" />
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