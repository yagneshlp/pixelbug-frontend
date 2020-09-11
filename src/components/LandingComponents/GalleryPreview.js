import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

class GalleryPreview extends React.Component{
    state = {
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            767:{
                items:2,
            },
            992:{
                items:3,
                nav:true
            },
            1200:{
                items:4,
            },
            1600:{
                items:5,
                nav:true
            }
        },
        navText:['<i class="ti-angle-left navWhiteIcon"></i>','<i class="ti-angle-right navWhiteIcon"></i>']
    }
    render(){
        return (   
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center mb-30">
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Our Works</h4>
                                <p>A picture is worth a thousand words. Here are some reasons as to why we are the best.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-20">
                        <div className="col-lg-12">
                            <div className=" text-center">
                            <OwlCarousel
                                className="brand_active"
                                autoplay={true}
                                loop={true}
                                items={4}                                
                                dots={false}
                                navText={this.state.navText}
                                navContainer={"#navContainer"}
                                responsive={this.state.responsive}  
                                autoplaySpeed={500}
                                animateOut={'fadeOut'}
                                animateIn= {'fadeIn'}                                         
                                nav
                            >
                                <div className="single_brand text-center">
                                        <img src="img/works/1.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/works/2.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/works/3.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/works/4.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/works/5.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/works/6.jpg" alt=""/>
                                    </div>  
                                    <div className="single_brand text-center">
                                        <img src="img/works/7.jpg" alt=""/>
                                    </div> 
                                    <div className="single_brand text-center">
                                        <img src="img/works/8.jpg" alt=""/>
                                    </div>          
                                    <div className="single_brand text-center">
                                        <img src="img/works/9.jpg" alt=""/>
                                    </div>                     
                            </OwlCarousel>
                            <div id="navContainer"></div>

                            <Link to="/gallery"><a className="boxed-btn3  wow fadeInLeft text-center" data-wow-duration="1s" data-wow-delay=".7s">View our gallery</a></Link>
                            
                            </div>
                        </div>
                    </div>
 
                </div>
   )
    }
}

export default GalleryPreview;


