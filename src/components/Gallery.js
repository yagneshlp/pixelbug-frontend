import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class gallery extends React.Component{
    render(){
        return (    <div className="bradcam_area fullpage ">
        <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage">
            <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="bradcam_text text-center">              
                                <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Gallery</h3>
                                <Link to="/gallery/photos"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Photography</a></Link>
                                <span></span>
                                <Link to="/gallery/videos"><a  className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Videography</a></Link>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>         

                            

   )
    }
}

export default gallery;


