import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPreview extends React.Component{
    render(){
        return (   
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="about_thumb">
                            <div className="thumb_inner  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <img src="img/about.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-5 col-md-6">
                        <div className="section_title pl-68 text-center" >
                            <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">About us</h4>
                            <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">A battalion of engineers shooting away with Japanese weapons</p><br/>
                            <Link to="/about" ><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Learn more</a></Link>
                        </div>
                    </div>
                </div>
            </div>
   )
    }
}

export default AboutPreview;


