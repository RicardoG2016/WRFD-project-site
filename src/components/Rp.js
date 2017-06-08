import React, { Component } from 'react';
import '../App.css';

class Rp extends Component {
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
                <p>There is a day for the endangered species, a day for the trees, and even a day for our Earth, and now there is a day for Rainforests. World Rainforest Day is a collaborative effort to encourage worldwide awareness and action to save one of the earth’s most precious resources, our rainforests.</p>
                <p>The Amazon Basin alone stores 400 million metric tons of CO2 per year – about 25% of all carbon stored on land, and it produces 20% of the world’s oxygen.</p>
                <p>Nearly 4,500 acres of rainforests are lost every hour from illegal logging, mining, agriculture, forest fires, and oil drilling, resulting in a lot more carbon in the atmosphere – and a lot less oxygen.</p>
                <p>Rainforest Partnership works directly with rainforest communities to sustainably develop products found in the forest, giving the community a stake in keeping their trees intact.</p>
                <p>When the trees are more valuable standing than cut, we can all breathe easier.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Rp;