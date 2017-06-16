import React, { Component } from 'react';
import '../App.css';

import bean from '../images/products/bean.png';
import nomeat from '../images/nomeat.png';
import no from '../images/n.png';
import trees from '../images/trees.png';
import oil from '../images/oil2.png';
import salad from '../images/salad.png';
import give from '../images/d.png';


class Tips extends Component {

componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
      <div className="container">
              <div className="row space">
                  <div className="col-lg-12">
                      <h3 style={{textAlign: 'center'}} className="text-muted">Act Now</h3>
                  </div>
                  <br />
                  <br />
              </div>
              <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <img className="card-img-top no" src={salad} alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">Meatless Monday</h4>
                        <p className="card-text text-muted">Cattle farming contributes to deforestation. Eat a meatless meal for a week</p>
                        <a href="https://rainforestpartnership.org/the-beef-industry-and-deforestation/" className="btn btn-primary tip-btn">Learn More</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card">
                      <img className="card-img-top oil" src={oil} alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">Pass on Palm Oil</h4>
                        <p className="card-text text-muted">Rainforests are being cleared to expand palm plantations. Choose products that use alternative oils. </p>
                        <a href="https://rainforestpartnership.org/oil-palm-plantations-create-barriers-rainforest-butterflies/" className="btn btn-primary tip-btn">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <br />
              <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <img className="card-img-top" src={give} alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">Support Rainforest Protectors</h4>
                        <p className="card-text text-muted">Your dollars make a difference. Contribute to organizations dedicated to preserving our rainforests.</p>
                        <a href="https://rainforestpartnership.org/partner-with-us/donation/" className="btn btn-primary tip-btn">Learn More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <img className="card-img-top" src={trees} alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">Take a Deep Breath</h4>
                        <p className="card-text text-muted">Rainforests are the lungs of the planet. Breathe deeply and thank the rainforest for cleaning our air.</p>
                        <a href="https://rainforestpartnership.org/the-carbon-sink/" className="btn btn-primary tip-btn">Learn More</a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          );
        }
      }

export default Tips;
