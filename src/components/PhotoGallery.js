import React, { Component } from 'react';
import GalleryMode from "./GalleryMode";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class photoGallery extends React.Component{

    render(){
        const { match } = this.props;       
        return ( 
           <div>
                <div className="bradcam_area">
                    <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage imageBGworks">
                        <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-xl-12 text-center">
                                        <div className="bradcam_text text-center">              
                                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Photography</h3>                                            
                                        </div>
                                        <p className="  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Choose the Year</p>
                                        <Link to="/gallery/photos/2012"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2012</a></Link>
                                        <Link to="/gallery/photos/2013"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2013</a></Link>
                                        <Link to="/gallery/photos/2014"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2014</a></Link>
                                        <Link to="/gallery/photos/2015"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2015</a></Link>
                                        <Link to="/gallery/photos/2016"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2016</a></Link>
                                        <Link to="/gallery/photos/2017"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2017</a></Link>
                                        <Link to="/gallery/photos/2018"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2018</a></Link>
                                        <Link to="/gallery/photos/2019"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2019</a></Link>
                                        <Link to="/gallery/photos/2020"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">2020</a></Link>
                                        {
                                            match.params.mode ? 
                                            <svg class="arrows">
                                                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                                                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                                                <path class="a3" d="M0 40 L30 72 L60 40"></path>
                                            </svg> 
                                            : ""
                                        }
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>         
                <GalleryMode mode={match.params.mode}/>               
            </div> 
    )
    }
}

export default withRouter(photoGallery);


