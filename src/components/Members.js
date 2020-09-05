import React, { Component } from 'react';


class members extends React.Component{
    render(){
        return (           
        <div className="performar_area black_bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title mb-80 ">
                        <h3 className="wow fadeIn justify-content-center" data-wow-duration="1s" data-wow-delay=".3s">Members</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="row memberRow" >
                        <div className="col-lg-6 col-md-6">
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src="img/performer/1.png" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Mr. Zosoldos</h4>
                                    <span>Acoustic drum</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                <div data-tilt className="thumb">
                                    <img src="img/performer/2.png" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Protik Hasan</h4>
                                    <span>Acoustic drum</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                <div data-tilt className="thumb">
                                    <img src="img/performer/3.png" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Salmon Vicky</h4>
                                    <span>Acoustic drum</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div   className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                <div data-tilt className="thumb">
                                    <img src="img/performer/4.png" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Filaris Habol</h4>
                                    <span>Acoustic drum</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src="img/performer/1.png" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Mr. Zosoldos</h4>
                                    <span>Acoustic drum</span>
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

export default members;