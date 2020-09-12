import React from 'react';
import Timeline from './Timeline.js';
import Equipments from './Equipments.js';

class about extends React.Component {
    render(){
        return(<div>
            {/* Main about text comes here */}
            <div className="bradcam_area">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay pt-150 imageBGaboutus">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">About</h3>
                                </div>
                                <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        We are a group of engineers who take a break from engineering by doing more. As the <strong>official photography and videography club of NITT</strong>, Pixelbug has documented just about every headline event that takes place in the vast campus of NITT, including Festember and Pragyan. Since the club's establishment in 2012, we have grown from a platoon of 20 to a battalion of 60 photographers. Producing quality content, time and again through hard work and talent, the club has earned a reputation for its top-tier work. Pixelbug has been recognized and featured by reputed organizations such as National Geographic.
                                        </p>
                                        <p></p>
                                        <p className="sample-text">
                                        We, at Pixelbug are passionate about what we do and love doing it. Be it standing in the sun for hours on end for that one perfect frame, or setting up cameras in the tightest spaces to get that sweet angle, every one of us is united by the passion and love we have for the art of capturing the magical moments. Attempting to freeze the shadows of time and capturing the best memories, one frame at a time.
                                        </p>
                                    </div>
                                </section>
                            </div>
                            </div>
                    </div>
                </div>
            </div>    
            <Timeline/>
            <Equipments/>
        </div>           
           
        )
    }
}

export default about;