import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div>
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="about">
                    <h5 className="hidden-xs-down l-content">About</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p>There is a day for the endangered species, a day for the trees, and even a day for our Earth, and now there is a day for Rainforests. World Rainforest Day is a collaborative effort to encourage worldwide awareness and action to save one of the earth’s most precious resources, our rainforests.</p>
                <p>Climate change presents an unpredictable and catastrophic future for rainforest ecosystems. Rainforest communities are experiencing the true ramifications of climate change with dramatic weather events increasing and deforestation devastating communities and biodiversity. The world needs to gain a better understanding of the value of rainforests before it is too late.</p>
                <p>World Rainforest Day (WRD) will encourage global participation through community events, virtual collaborations, creative projects and educational initiatives all designed to celebrate the diversity of rainforests across the globe. World Rainforest Day will draw attention to rainforest communities, showcase innovative ideas and highlight the value of these critical ecosystems.</p>
                <p>It is our hope that WRD will serve as a day for people worldwide to come together by doing something positive for rainforests, taking the actions of individuals and combining their power to create a collective positive impact on rainforests and the climate worldwide.</p>
                <p>World Rainforest Day is the opportunity for everyone to join us as global citizens and join together to globalize for good.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default About;









