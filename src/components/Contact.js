import React, { Component } from 'react';


class contact extends React.Component{
    render(){
        return (   
            <div>
            <div className="bradcam_area">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Contact</h3>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>         
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"> 
                        <h2 className="contact-title">Contact us</h2>                          
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-mobile"></i></span>
                                <div className="media-body">
                                    <h3>+91 987654321</h3>
                                    {/* <p>Mon to Fri 9am to 6pm</p> */}
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>pixelbugnittrichy@gmail.com</h3>
                                    {/* <p>Send us your query anytime!</p> */}
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-location-arrow"></i></span>
                                <div className="media-body">
                                    <h3>NIT Trichy</h3>
                                    <p>Tanjavur Highway, 620015</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                        <h3 className="contact-title">For Event Coverage Requests, fill this form</h3>
                            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   )
    }
}

export default contact;


