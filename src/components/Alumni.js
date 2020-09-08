import React, { Component} from 'react';
import FetchAlumni from '../utils/FetchAlumni';
import FetchMembers from '../utils/FetchMembers';
import { Link } from 'react-router-dom';
// url: https://spreadsheets.google.com/feeds/cells/1uZKWSdclB9FGCNGpoKsdwcChwhjfJm-c5P8tRrYGP6c/1/public/full?alt=json

class members extends React.Component{    

    render(){
        return (           
        <div className="performar_area black_bg">
             <div className="bradcam_area">
                <div className="single_bradcam pt-50">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Members</h3>
                                </div>      
                                <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        They are our wonderful alumni, Forever on our <i class="fa fa-heart-o" aria-hidden="true"></i>                                            
                                        </p>                                       
                                    </div>
                                </section>                          
                            </div>
                            </div>
                    </div>
                </div>
            </div>    
        <div className="container core">           
            <div className="row justify-content-center">
                <div className="col-lg-6 memberFitContent">
                    <FetchAlumni/>
                    <FetchMembers memberType="alumni" />                    
                </div>
            </div>
        </div>
    </div>

    

        )
    }
}

export default members;