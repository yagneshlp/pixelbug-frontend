import React from 'react';
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
                                    </div>
                                    <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="1.5s" >The Official Photography and Videography club of <a className="alink" href="//nitt.edu" target="_blank" rel="noopener noreferrer">NIT Trichy</a></p>
                                    <svg class="arrows homepageArrow">
                                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                                    </svg>
                                </div>
                                
                            </div>
                        </div>                    
                    </div>
                </div>            
                <div className="about_area black_bg pb-2 pt-50">
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