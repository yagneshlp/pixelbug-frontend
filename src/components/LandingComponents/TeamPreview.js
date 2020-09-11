import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { production } from '../../var/Variables';

class TeamPreview extends React.Component{    
    render(){
        //var   production.bucketLink = "https://pixelbug-website.s3.ap-south-1.amazonaws.com"
        return (   
            <div className="container pt-50 pb-5" > 
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
                                        <img src={  production.bucketLink +"/team/1.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/2.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/3.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/4.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/5.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/6.jpg" } alt=""/>
                                    </div>
                                    <div className="single_brand text-center">
                                        <img src={  production.bucketLink +"/team/7.jpg" } alt=""/>
                                    </div>
                            </OwlCarousel>
                            </div>
                        </div>
                    </div> 
               </div>
   )
    }
}

export default TeamPreview;


