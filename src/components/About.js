import React from 'react';
import Timeline from './Timeline.js';
import Equipments from './Equipments.js';

class about extends React.Component {
    render(){
        return(<div>
            {/* Main about text comes here */}
            <div className="bradcam_area">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay pt-150">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">About</h3>
                                </div>
                                <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                           Adipisicing enim adipisicing exercitation labore quis culpa anim elit sint reprehenderit pariatur in. Sit consequat fugiat duis cupidatat sunt nulla ullamco excepteur laboris sit sit aliquip excepteur ut. Officia proident enim elit nisi dolore irure velit Lorem irure non tempor elit ut. Excepteur labore incididunt mollit quis est. Aliquip quis non ad duis nulla mollit exercitation commodo aute anim est laboris.                                            
                                        </p>
                                        <p className="sample-text">
                                           Adipisicing enim adipisicing exercitation labore quis culpa anim elit sint reprehenderit pariatur in. Sit consequat fugiat duis cupidatat sunt nulla ullamco excepteur laboris sit sit aliquip excepteur ut. Officia proident enim elit nisi dolore irure velit Lorem irure non tempor elit ut. Excepteur labore incididunt mollit quis est. Aliquip quis non ad duis nulla mollit exercitation commodo aute anim est laboris.                                            
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