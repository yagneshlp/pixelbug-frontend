import React, { Component } from 'react';
import YoutubePlayer from '../utils/AddYoutubeVideo';
import SocialIcons from './LandingComponents/SocialIcons';
import AuroraPreview from './LandingComponents/AuroraPreview';
import TeamPreview from './LandingComponents/TeamPreview';
import GalleryPreview from './LandingComponents/GalleryPreview';
import AboutPreview from './LandingComponents/AboutPreview';

class home extends React.Component{
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
                                        <h3 className="wow fadeInLeft fontSize50" data-wow-duration="1s" data-wow-delay="1s">Pixelbug</h3>
                                        {/* <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Pixelbug</p> */}
                                        {/* <iframe className ="landingVideo" width="560" height="315" src="https://www.youtube.com/embed/cXSEEQIevqk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe> */}
                                    </div>
                                    <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s" >The Official Photography and Videography club of <a className="alink" href="//nitt.edu" target="_blank">NIT Trichy</a></p>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>            
                <div className="about_area black_bg pb-2">
                    <AboutPreview/>
                    <div className="brand_area black_bg">                
                        <GalleryPreview/>
                        <TeamPreview/>
                        <AuroraPreview/>
                        <SocialIcons/>  
                    </div>                    
                </div>       
            </div>
        )
    }
}

export default home;