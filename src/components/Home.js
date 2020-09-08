import React, { Component } from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import YoutubePlayer from '../utils/AddYoutubeVideo';
import { Link } from 'react-router-dom';

class home extends React.Component{
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
           <div>

        <div className="slider_area">
            <div class="video-background">
                <div class="video-foreground" >
                    <div id="player">
                    <YoutubePlayer/>
                    </div>
            </div>
                
            </div>
            <div className="single_slider  align-items-center d-flex overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-12 text-center">
                            <div className="slider_text text-center mb-0">
                                <h3 className="wow fadeInLeft fontSize50" data-wow-duration="1s" data-wow-delay="12s">Pixelbug</h3>
                                {/* <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Pixelbug</p> */}
                                {/* <iframe className ="landingVideo" width="560" height="315" src="https://www.youtube.com/embed/cXSEEQIevqk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe> */}
                            </div>
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="12.5s" >The Official Photography and Videography club of <a className="alink" href="//nitt.edu" target="_blank">NIT Trichy</a></p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
      
        <div className="about_area black_bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center mb-80">
                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" ></h3>

                            
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="about_thumb">
                            <div className="shap_3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                                <img src="img/shape/shape_3.svg" alt=""/>
                            </div>
                            <div className="thumb_inner  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <img src="img/about/about.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-5 col-md-6">
                        <div className="section_title pl-68 text-center" >
                            <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">About us</h4>
                            <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">← GROUP PHOTO COMES HERE<br/>Qui quis occaecat duis eiusmod qui anim pariatur exercitation. Ea excepteur fugiat dolore aliquip nostrud aliqua pariatur.<br/> BELOW LINK TAKES TO ABOUT PAGE </p><br/>
                            <Link to="/about" ><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Learn more</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand_area black_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_title text-center mb-30">
                                <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Our Works</h4>
                                <p>Reprehenderit duis tempor aliqua ex velit eu labore excepteur id laborum esse.</p>
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
                                        <img src="img/performer/1.png" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/performer/2.png" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/performer/3.png" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/performer/4.png" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/performer/1.png" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/performer/2.png" alt=""/>
                                    </div>                            
                            </OwlCarousel>
                            <div id="navContainer"></div>

                            <Link to="/gallery"><a className="boxed-btn3  wow fadeInLeft text-center" data-wow-duration="1s" data-wow-delay=".7s">View our gallery</a></Link>
                            
                            </div>
                        </div>
                    </div>
 
                </div>
               
               <div className="container pt-50" > 
                     <div className="row align-items-center mt-30">                    
                        <div  className="col-lg-5 col-md-6">
                            <div className="section_title pl-68 text-center" >
                                <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">The Team</h4>
                                <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s"><br/>So who are these pixies working together as Pixelbug?</p><br/> 
                                <Link to="/members" ><a className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Show me!</a></Link>                           
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 pt-3">
                            <div className="about_thumb">
                            <OwlCarousel
                                className="brand_active"
                                autoplay={true}
                                loop={true}
                                items={1}
                                dots={false}
                                autoplaySpeed={200}
                                animateOut={'fadeOut'}
                                animateIn= {'fadeIn'} 
                            >
                                <div className="single_brand text-center">
                                        <img src="img/team/1.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/team/2.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/team/3.jpg" alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src="img/team/4.jpg" alt=""/>
                                    </div>
                            </OwlCarousel>
                            </div>
                        </div>
                    </div> 
               </div>
               <footer class="footer ">
                    <div class="footer_top pb-0">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-8">
                                    <div class="footer_widget">
                                        <div class="address_details text-center">
                                            <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Aurora</h3>
                                            <h5 class="wow fadeInUp italicizee" data-wow-duration="1s" data-wow-delay=".4s">The celebration of everything pixel</h5><br/>
                                            <OwlCarousel
                                                className="brand_active"
                                                autoplay={true}
                                                loop={true}
                                                items={2}
                                                dots={false}
                                                autoplaySpeed={200}
                                                animateOut={'fadeOut'}
                                                animateIn= {'fadeIn'} 
                                            >
                                                <div className="single_brand text-center">
                                                        <img src="img/team/1.jpg" alt=""/>
                                                    </div>
                                                    <div className="single_brand text-center">
                                                        <img src="img/team/2.jpg" alt=""/>
                                                    </div>
                                                    <div className="single_brand text-center">
                                                        <img src="img/team/3.jpg" alt=""/>
                                                    </div>
                                                    <div className="single_brand text-center">
                                                        <img src="img/team/4.jpg" alt=""/>
                                                    </div>
                                            </OwlCarousel>
                                            <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees from around the world.</p>
                                            <Link to="/aurora"><a class="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Know more!</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
            
        </div>
       
        </div>
        )
    }
}

export default home;