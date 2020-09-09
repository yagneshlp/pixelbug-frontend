import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class GalleryMode extends React.Component{

    render(){
        //const { match } = this.props.mode;
        console.log(this.props.mode);
        if(!this.props.mode)
         return ""
        else
        return ( 
           <div>
                <div className="bradcam_area">
                    <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage">
                        <div className="container">
                                <div className="row align-items-center justify-content-center">
                                <div className="col-xl-12 text-center">
                                    <div className="bradcam_text text-center">              
                                    <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">{this.props.mode}</h3>                                        
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

export default GalleryMode;


