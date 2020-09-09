import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class gallery extends React.Component{
    render(){
        return (    <div className="bradcam_area fullpage ">
        <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage">
            <div className="container">
                    <div className="row align-items-center text-center justify-content-center">
                    <div className="col-xl-12">
                        <div className="bradcam_text ">              
                                <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Gallery</h3>                        
                                
                        </div>
                              <section className="text-center">
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        Put together 60 hardworking and talented content creators together in a club working towards capturing the most amazing moments on campus or outside and imagine the outcome. Needless to say, Pixelbug has produced some vividly crisp and amazing content over the course of its functioning. <br/>Check out the tabs below to explore the fruits of our creativity and hard work.
                                        </p>      
                                        <br/>                                 
                                    </div>
                                <Link to="/gallery/photos"><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Photography</a></Link>
                                <p className="mb-20"></p>
                                <Link to="/gallery/videos"><a  className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Videography</a></Link>
                                </section>   
                    </div>
                    </div>
            </div>
        </div>
    </div>         

                            

   )
    }
}

export default gallery;


