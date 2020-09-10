import React, { Component } from 'react';
import FetchGallery from '../utils/FetchGallery';



class GalleryMode extends React.Component{

    render(){
        //const { match } = this.props.mode;
        //console.log(this.props.mode);
        if(!this.props.mode)
         return ""
        else
        return ( 
            <div className="container">
                {/* <FetchGallery/> */}
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 text-center">
            <div className="section-top-border">
                <h3>{this.props.mode}</h3>
                <div className="row gallery-item">
                <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="../../img/elements/g1.jpg" className="img-pop-up">
                            <div className="single-gallery-image" style={{background: 'url(../../img/elements/g1.jpg)'}}></div>
                        </a>
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


