import React, { Component } from 'react';
import '../App.css';

class Tips extends Component {
  render() {
    return (
      <div id="about">
          <div className="row">
              <div className="col-md-6 col-2 bg-inverse text-white py-2 d-flex align-items-center justify-content-center" id="left">
                <div className="l-sec">
                  <div className="tips">
                    <h5 className="hidden-xs-down l-content">Tips</h5>
                  </div>
                </div>
              </div>
              <div className="col offset-2 offset-sm-6 py-2 text-muted"  id="text">
                <p>Blue bottle celiac disrupt, minim authentic banjo magna fam ethical consequat in hashtag keytar adaptogen. Before they sold out sed enim, blog hoodie kinfolk asymmetrical ugh put a bird on it fugiat succulents occupy ullamco. Reprehenderit mixtape semiotics exercitation, gastropub photo booth sunt art party cillum neutra minim la croix fashion axe roof party distillery. Duis craft beer reprehenderit synth yr. Officia photo booth post-ironic drinking vinegar, nisi ugh adaptogen mollit exercitation blue bottle salvia sriracha banjo poutine. Etsy crucifix tacos, affogato schlitz kombucha tofu mustache. Velit mollit locavore asymmetrical ugh.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default Tips;