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
                <h3>Let's Talk</h3>
                <br/>
                <p>Rainforest Partnership envisioned and launched World Rainforest Day to be a collaborative effort in raising awareness about rainforests.</p>
                <p>We invite and welcome partnerships and innovative approaches from like-minded entities and individuals around the globe.</p>
                <p>Help us launch the inaugural World Rainforest Day.</p>
                <p style={{fontStyle:"italic", fontWeight: "bold"}}>Because the World Can’t Wait…</p>
                <br/>
                <hr/>
                <h4>Social</h4>
                <div>
                  <a href="https://www.instagram.com/worldrainforestday/"><img className="social" src={insta} alt="instagram" /></a>
                  <a href="https://www.facebook.com/worldrainforestday/"><img className="social" src={fb} alt="facebook" /></a>
                  <a href="https://twitter.com/Rainforest_Day"><img className="social" src={tw} alt="twitter" /></a>
                </div>
                <hr/>
                <a href="https://s3.us-east-2.amazonaws.com/worldrainforestday-pressrelease/press.pdf"><h4>Press Release</h4></a>
                <hr/>
                <Link to="/become_a_partner"><h4>Become a Partner</h4></Link>
                <hr/>
                <h4 style={{paddingBottom: "10px"}}>Contact Us:</h4>
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


