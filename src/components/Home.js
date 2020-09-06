import React, { Component } from 'react';
import $ from 'jquery';

class home extends React.Component{
    componentDidMount(){

        
    }
    render(){
        return (
           <div>

        <div className="slider_area">
            <div class="video-background">
                <div class="video-foreground">
                <iframe src="https://www.youtube.com/embed/cXSEEQIevqk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=cXSEEQIevqk" frameborder="0" allowfullscreen></iframe>
                </div>
                
            </div>
            <div className="single_slider  align-items-center d-flex overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-12 text-center">
                            <div className="slider_text text-center">
                                <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">Pixelbug</h3>
                                {/* <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Pixelbug</p> */}
                                {/* <iframe className ="landingVideo" width="560" height="315" src="https://www.youtube.com/embed/cXSEEQIevqk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe> */}
                            </div>
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s" >The Official Photography and Videography club of <a className="alink" href="//nitt.edu" target="_blank">NIT Trichy</a></p>
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
                    <div className="col-lg-5 col-md-6">
                        <div className="about_info pl-68">
                            <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Hi there!</h4>
                            <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">Elit ipsum laboris fugiat officia tempor amet labore consectetur enim nulla minim. Qui quis occaecat duis eiusmod qui anim pariatur exercitation. Ea excepteur fugiat dolore aliquip nostrud aliqua pariatur.</p>
                            <a href="#" className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Learn more</a>                           
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
                                    <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">12 Feb, 2020</h4>
                                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Green Avenue, New York</h3>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees from around the world.</p>
                                    <a href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Buy Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

     
           </div>
        )
    }
}

export default home;