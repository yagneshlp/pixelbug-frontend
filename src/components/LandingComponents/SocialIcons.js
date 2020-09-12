import React, { Component } from 'react';


class SocialIcons extends React.Component{
    render(){
        return (   
            <div className="socialCenter">
                <div className="section_title pl-68 text-center" >
                                <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Social media</h4>
                                <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s"><br/>... is where we thrive. Follow us !</p><br/>                                
                </div>
                    <div className="wrapper">
                        <a href="https://www.facebook.com/pixelbug.nitt" target="_blank" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                            <div className="containerSocial container--facebook">
                                <div className="box box--left box--front">
                                    <i className="ion ion-social-facebook"></i>
                                    <span className="count">
                                        12 K				
                                    </span>
                                </div>		
                                <span className="follow follow--left">
                                    Like
                                </span>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/pixelbug.nitt/" target="_blank" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                            <div className="containerSocial container--instagram">
                                <div className="box box--middle">
                                    <i className="ion ion-social-instagram"></i>
                                    <span className="count">
                                        3 K
                                    </span>
                                </div>
                                <span className="follow follow--right">
                                    Follow
                                </span>
                            </div>
                        </a>


                        <a href="https://www.youtube.com/channel/UCk6CC_UHtZznz2y0u5iIrNQ" target="_blank" className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                            <div className="containerSocial container--youtube">
                                <div className="box box--middle">
                                    <i className="ion ion-social-youtube"></i>	
                                    <span className="count">
                                        529				
                                    </span>
                                </div>
                                <span className="follow follow--middle">
                                    Subscribe
                                </span>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/company/pixelbug-nittrichy/" target="_blank"  className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                            <div className="containerSocial container--linkedin">
                                <div className="box box--right">
                                    <i className="ion ion-social-linkedin"></i>	
                                    <span className="count">
                                       		
                                    </span>
                                </div>
                                <span className="follow follow--middle">
                                    Follow
                                </span>
                            </div>
                        </a>


                       
                    </div>
                </div>
   )
    }
}

export default SocialIcons;


