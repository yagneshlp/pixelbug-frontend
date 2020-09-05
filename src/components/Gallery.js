import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class gallery extends React.Component{
    render(){
        return (   
            <div className="black_bg">
                <div className="bradcam_area ">
                <div className="single_bradcam d-flex align-items-center bradcam_bg_1 overlay pt-150">
                    <div className="col-lg-12 col-md-auto">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-auto"> 
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                <div className="col-xl-12 text-center">
                                    <div className="bradcam_text text-center">              
                                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Gallery</h3>                                        
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-auto text-center">
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s"> Browse images by</p>
                            <div className="container performar_area noPadding">                           
                                <div className="row justify-content-center">
                                
                                    <div className="col-lg-9 col-md-6">
                                        <div className="row memberRow text-center" >
                                        
                                            <div className="col-lg-6 col-md-4">
                                            <Link to="/gallery/photos/category">
                                                <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">                                
                                                    <div className="performer_heading">
                                                        <h4><span>Categories</span></h4>                                   
                                                    </div>
                                                    <div data-tilt className="thumb">
                                                        <img src="img/performer/1.png" alt=""/>
                                                    </div>
                                                </div></Link>
                                            </div>
                                            <div className="col-lg-6 col-md-4">
                                            <Link to="/gallery/photos/fests">
                                                <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                                
                                                    <div className="performer_heading">
                                                        <h4><span>Fests</span></h4>                                  
                                                    </div>
                                                    <div data-tilt className="thumb">
                                                        <img src="img/performer/2.png" alt=""/>
                                                    </div>
                                                </div></Link>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>     
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


