import React, { Component } from 'react';
import '../App.css';
import bean from '../images/products/bean.png';
import f_1 from '../images/scenes/f_1.png';
import f_2 from '../images/scenes/f_2.png';
import f_3 from '../images/scenes/f_3.png';
import f_5 from '../images/scenes/f_4.png';
import f_6 from '../images/scenes/f_6.png';
import bf from '../images/animals/butterfly-2.png';
import bf3 from '../images/animals/butterfly-3.png';
import h_1 from '../images/scenes/home.png';
import h_2 from '../images/scenes/home_2.png';
import h_3 from '../images/scenes/home_3.png';


class Images extends Component {
  render() {
    return (
        <div className="container">
        <div className="row space">
            <div className="col-lg-12">
                <h3 className="Header">Gallery</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={f_1} alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={f_2} alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={f_3} alt="" />
                </a>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={h_1} alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={h_2} alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src={h_3} alt="" />
                </a>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
                </a>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://placehold.it/750x450" alt="" />
                </a>
            </div>
        </div>
    </div>
    );
  }
}

export default Images;