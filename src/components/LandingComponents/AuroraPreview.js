import React, { Component } from 'react';
import FetchGallery from '../../utils/FetchGallery';
import { Link } from 'react-router-dom';

class AuroraPreview extends React.Component{
    render(){
        return (   
            <footer class=" imageBGAurora overlay footer">
                    <div class="footer_top pb-5 pt-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12 col-md-12">
                                    <div class="footer_widget">
                                        <div class="address_details text-center">
                                            <h3 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Aurora</h3>
                                            <h5 class="wow fadeInUp italicizee" data-wow-duration="1s" data-wow-delay=".4s">The celebration of everything pixel</h5><br/>
                                            {/* <FetchGallery page="homeAurora" /> */}
                                         
                                                <FetchGallery page="homeAurora" />
                                                
                            
                                            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees.</p>
                                            <Link to="/aurora"><a className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Know more!</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
   )
    }
}

export default AuroraPreview;


