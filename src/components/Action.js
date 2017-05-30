import React, { Component } from 'react';
import '../App.css';

class Action extends Component {
  render() {
    return (
      <div>
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center action" id="left">
                  <h5 className="hidden-xs-down l-content">Take Action</h5>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <div>
                  <h3 className="action-text">Events</h3>
                  <p>Local Meetup are a great way to meet people in your community who share the same passion to help save our planet and it's Rainforest. </p>
                  <span><a href="https://rainforestpartnership.org/partner-with-us/"><button className="ev-btn btn-lg btn-secondary btn">Events</button></a></span>
                </div>
                <div>
                  <h3 className="action-text">Spread Awareness</h3>
                  <p>Let the world know you care, share on any of our social media below.</p>
                  <p><a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></p>
                  <span><a href="https://rainforestpartnership.org/partner-with-us/"><button className="sa-btn btn-lg btn-secondary btn">Share</button></a></span>
                </div>
                <div>
                  <h3 className="action-text">Volunteer</h3>
                  <p>Further, inspiration and ideas of what you could do on World Rainforest Day can be found on our Featured Projects page. Once you have decided on a project be sure to register your project.</p>
                  <span><a href="https://rainforestpartnership.org/partner-with-us/"><button className="vol-btn btn-lg btn-secondary btn">Volunteer</button></a></span>
                </div>
                <div>
                  <h3 className="action-text">Donate</h3>
                  <p>Donations fund Rainforest Partnership, the NGO who created World Rainforest Day to celebrate the importance of our Rainforest.</p> 
                  <p>In their 10th year they're continuing their commitment to saving the world's Rainforest by strengthen their partnerships with local communities, governments, universities and volunteers to save the world's Rainforest.</p>
                  <span><a href="https://rainforestpartnership.org/partner-with-us/donation/"><button className="donate do-btn btn-lg btn-secondary btn">Donate</button></a></span>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Action;
