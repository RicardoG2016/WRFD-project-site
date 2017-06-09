import React, { Component } from 'react';
import '../App.css';
import insta from '../images/logos/instagram.png';
import fb from '../images/logos/fb.png';
import tw from '../images/logos/twitter.png';
import yt from '../images/logos/youtube.png';
import mu from '../images/logos/meetup.png';
import rp from '../images/logos/rp.png';

class Action extends Component {
  render() {
    return (
      <div id="action">
          <div className="row">
              <div className="col-md-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="action">
                    <h5 className="hidden-xs-down l-content">Action</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p>Your actions will combine with the actions of others to create a collective positive impact on rainforests and the climate worldwide.</p>
                <p>Do something today to help save the rainforests. Because the world can’t wait.</p>
                <hr />
                <div>
                  <h3 className="action-text">Spread Awareness</h3>
                  <p>Show the world you care by sharing on our social media links below. Follow us to stay informed.</p>
                  <p><a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a></p>
                  <a href="https://www.instagram.com/worldrainforestday/"><img className="social" src={insta} alt="instagram" /></a>
                  <a href="http://www.facebook.com"><img className="social" src={fb} alt="facebook" /></a>
                  <a href="http://www.twitter.com"><img className="social" src={tw} alt="twitter" /></a>
                  <a href="http://www.youtube.com"><img className="social" src={yt} alt="youtube" /></a>
                </div>
                <hr />
                <div>
                  <h3 className="action-text">Volunteer</h3>
                  <p>Do you want to make a difference? If possible volunteer to help save the rainforest. </p>
                  <span><a href="https://rainforestpartnership.org/partner-with-us/"><button className="vol-btn btn-lg btn-secondary btn">Volunteer</button></a></span>
                </div>
                <hr />
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
