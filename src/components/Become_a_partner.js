import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Become_a_partner extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div id="contact">
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="partner">
                    <h5 className="hidden-xs-down l-content">Become a Partner</h5>
                  </div>
                </div>
              </div>
              <div className="contact-form col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p style={{fontWeight: "bold", fontSize: "20px"}}>With a goal of fostering increased individual and collective global action throughout the year, June 22 is envisioned to become a day of celebration and bring attention to the importance of rainforests.</p>
                <br/>
                <p><span style={{fontWeight: "bolder", fontSize: "18px"}} >Contact delainey@rainforestpartnership.org</span> if you are interested in becoming a collaborating partner or would like to receive a digital toolkit.</p>
                <br/>
                <p>See below for more actions to take:</p>
                <ul>
                  <li>Use the <a href="https://twitter.com/intent/tweet?button_hashtag=WorldRainforestDay">#WorldRainforestDay</a> hashtag in all digital communications</li>
                  <li>Follow us on social media:
                    <ul>
                      <li>Twitter: <a href="https://twitter.com/Rainforest_Day">@rainforest_day</a></li>
                      <li>Instagram: <a href="https://www.instagram.com/worldrainforestday/">@worldrainforestday</a></li>
                      <li>Facebook: <a href="https://www.facebook.com/worldrainforestday/">@worldrainforestday</a></li>
                    </ul>
                  </li>
                  <li>Share with respective partners and other like organizations and invite them to promote World Rainforest Day</li>
                  <li>Encourage your followers to also take these simple actions or the ones listed on our site <Link to="/act">here.</Link></li>
                </ul>
                <br/>
              </div>
          </div>
      </div>
    );
  }
}

export default Become_a_partner;






