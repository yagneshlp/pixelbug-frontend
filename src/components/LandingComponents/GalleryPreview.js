import React from 'react';
import FetchGallery from '../../utils/FetchGallery';


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
                            <FetchGallery page="home"/>
                            {/* <Link to="/gallery"><a className="boxed-btn3  wow fadeInLeft text-center" data-wow-duration="1s" data-wow-delay=".7s">View our gallery</a></Link> */}
                            
                            </div>
                        </div>
                    </div>
 
                </div>
   )
    }
}

export default GalleryPreview;


