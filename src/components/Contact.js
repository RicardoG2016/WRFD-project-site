import React, { Component } from 'react';
import '../App.css';
import insta from '../images/logos/instagram.png';
import fb from '../images/logos/fb.png';
import tw from '../images/logos/twitter.png';
import yt from '../images/logos/youtube.png';
import { Link } from 'react-router-dom';

class Contact extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div id="contact">
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="contact">
                    <h5 className="hidden-xs-down l-content">Contact Us</h5>
                  </div>
                </div>
              </div>
              <div className="contact-form col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <h3>Lets Talk</h3>
                <br/>
                <p>World Rainforest Day is a collaborative global effort envisioned and organized by Rainforest Partnership.</p>
                <p>Rainforest Partnership is an international nonprofit dedicated to protecting tropical rainforests, by working directly with rainforest communities to sustainably develop products found in the forest, giving the community a stake in keeping their forests intact.</p>
                <p>Learn more about Rainforest Partnership and how you can support our work engaging rainforest communities to preserve the rainforest.</p>
                <br/>
                <hr/>
                <h4>Social</h4>
                <div>
                  <a href="https://www.instagram.com/worldrainforestday/"><img className="social" src={insta} alt="instagram" /></a>
                  <a href="http://www.facebook.com"><img className="social" src={fb} alt="facebook" /></a>
                  <a href="http://www.twitter.com"><img className="social" src={tw} alt="twitter" /></a>
                  <a href="http://www.youtube.com"><img className="social" src={yt} alt="youtube" /></a>
                </div>
                <hr/>
                <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-pressrelease/press.pdf"><h4>Press Release</h4></a>
                <hr/>
                <h4>Email</h4>
                <br/>

                 <form action="https://formspree.io/worldrainforestday@rainforestpartnership.org" method="POST">
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" name="_replyto" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="message" name="message" placeholder="Message" />
                  </div>
                  <button type="submit" className="donate btn-lg btn-secondary btn">Submit</button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
          </div>
      </div>
    );
  }
}

export default Contact;


