import React, { Component } from 'react';
import '../App.css';

class Rp extends Component {
  
componentDidMount(){
  window.scrollTo(0, 0);
}

  render() {
    return (
      <div id="about">
          <div className="row">
              <div className="col-md-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="r-p">
                    <h5 className="hidden-xs-down l-content">Rainforest Partnership</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p>World Rainforest Day is a collaborative global effort envisioned and organized by the Rainforest Partnership. </p>
                <p>Rainforest Partnership is an international nonprofit dedicated to protecting tropical rainforests, by working directly with rainforest communities to sustainably develop products found in the forest, giving the community a stake in keeping their trees intact.</p>
                <p>Learn more about Rainforest Partnership and how you can support our work engaging rainforest communities to preserve the rainforest.</p>
                <p><a href="www.worldrainforestpartnership.com">Rainforest Partnership</a></p>
                <br/>
                <br/>
                <br/>
              </div>
          </div>
      </div>
    );
  }
}

export default Rp;