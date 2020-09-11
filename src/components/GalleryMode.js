import React, { Component } from 'react';
import FetchGallery from '../utils/FetchGallery';
import { withRouter } from 'react-router-dom';

class GalleryMode extends React.Component{

    render(){
        //const { match } = this.props.mode;
        console.log(this.props.mode);
        if(!this.props.mode)
         return ""
        else
        return ( 
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="section-top-border">
                            <h3>{this.props.mode}</h3>
                            <div className="col-12">
                                <FetchGallery page = {"gallery"} year = {this.props.mode}/>     
                            </div>                                           
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default withRouter(GalleryMode);


