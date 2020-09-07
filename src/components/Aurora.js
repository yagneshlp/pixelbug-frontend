import React, { Component } from 'react';
import {appendScript} from '../utils/AppendScript';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class aurora extends React.Component{
    
    componentDidMount () {
    }
    render(){
        return (   
            <div>
                <div className="bradcam_area ">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Aurora</h3>
                                </div>
                                <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                           Adipisicing enim adipisicing exercitation labore quis culpa anim elit sint reprehenderit pariatur in. Sit consequat fugiat duis cupidatat sunt nulla ullamco excepteur laboris sit sit aliquip excepteur ut. Officia proident enim elit nisi dolore irure velit Lorem irure non tempor elit ut. Excepteur labore incididunt mollit quis est. Aliquip quis non ad duis nulla mollit exercitation commodo aute anim est laboris.                                            
                                        </p>                                        
                                    </div>
                                </section>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        <div className="brand_area black_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Sponsor Logos</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand_wrap">
                        <OwlCarousel
                            className="brand_active"
                            autoplay={true}
                            loop={true}
                            items={5}                       
                            nav
                        >
                             <div className="single_brand text-center">
                                    <img src="img/brand/1.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/2.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/3.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/4.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/5.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/1.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/2.png" alt=""/>
                                </div>
                           
                        </OwlCarousel>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="footer_widget">
                                    <div className="address_details text-center">
                                        <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">1 Feb, 2020</h4>
                                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Green Avenue, New York</h3>
                                        <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees from around the world.</p>
                                        <a href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </footer>
    
        </div>
   )
    }
}

export default aurora;


