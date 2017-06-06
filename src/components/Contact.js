import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
        <div>
          <div className="row">
              <div className="col-sm-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="contact">
                    <h5 className="hidden-xs-down l-content">Contact Us</h5>
                  </div>
                </div>
              </div>
              <div className="contact-form col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                 <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                  </div>
                  <div className="form-group">
                    <textarea type="text" className="form-control" id="message" placeholder="Message" />
                  </div>
                  <button type="submit" className="donate btn-lg btn-secondary btn">Submit</button>
                </form>
              </div>
          </div>
      </div>
    );
  }
}

export default Contact;


