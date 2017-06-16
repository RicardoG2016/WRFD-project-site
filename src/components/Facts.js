import React, { Component } from 'react';
import '../App.css';

import f1 from '../images/facts/1.png';
import f2 from '../images/facts/2.png';
import f3 from '../images/facts/3.png';
import f4 from '../images/facts/4.png';
import f5 from '../images/facts/5.png';
import f6 from '../images/facts/6.png';
import f7 from '../images/facts/7.png';
import f8 from '../images/facts/8.png';
import f9 from '../images/facts/9.png';
import f10 from '../images/facts/10.png';
import f11 from '../images/facts/11.png';
import f12 from '../images/facts/12.png';

class Facts extends Component {
  
componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
        <div className="container">
          <div className="row space">
              <div className="col-sm-12">
                  <h3 className="Header">Rainforest Facts</h3>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_1.jpg">
                      <img className="img-responsive" src={f1} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_2.jpg">
                      <img className="img-responsive" src={f2} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_3.jpg">
                      <img className="img-responsive" src={f3} alt="" />
                  </a>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_4.jpg">
                      <img className="img-responsive" src={f4} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_5.jpg">
                      <img className="img-responsive" src={f5} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_6.jpg">
                      <img className="img-responsive" src={f6} alt="" />
                  </a>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_7.jpg">
                      <img className="img-responsive" src={f7} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_8.jpg">
                      <img className="img-responsive" src={f8} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_9.jpg">
                      <img className="img-responsive" src={f9} alt="" />
                  </a>
              </div>
          </div>

          <div className="row">
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_10.jpg">
                      <img className="img-responsive" src={f10} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_11.jpg">
                      <img className="img-responsive" src={f11} alt="" />
                  </a>
              </div>
              <div className="col-md-4 portfolio-item">
                  <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-images/fact_img_12.jpg">
                      <img className="img-responsive" src={f12} alt="" />
                  </a>
              </div>
          </div>
    </div>
    );
  }
}

export default Facts;