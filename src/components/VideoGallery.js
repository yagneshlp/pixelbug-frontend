import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FetchVideo from '../utils/FetchVideo';

class videoGallery extends React.Component{
    render(){
        return ( 
        <div>
                 <div className="bradcam_area">
                    <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage imageBGworks">
                        <div className="container">
                                <div className="row align-items-center justify-content-center">
                                <div className="col-xl-12">
                                    <div className="bradcam_text text-center">     
                                            <h3 className="wow fadeInRight fontSize40" data-wow-duration="1s" data-wow-delay=".3s">Videography</h3>
                                    </div>
                                    <svg class="arrows">
                                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                                    </svg>
                                    <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        Video provides an opportunity to marry the power of ideas to the power of images <br/> Scroll down to see our video portfolio                                         
                                        </p>                                       
                                    </div>
                                </section>          
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                           <FetchVideo/>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="blog_right_sidebar">
                                <aside className="single_sidebar_widget search_widget">
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder='Search Keyword'
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Search Keyword'"/>
                                                <div className="input-group-append">
                                                    <button className="btn" type="button"><i className="ti-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="submit">Search</button>
                                    </form>
                                </aside>

                                <aside className="single_sidebar_widget post_category_widget">
                                    <h4 className="widget_title">Category</h4>
                                    <ul className="list cat-list">
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Resaurant food</p>
                                                <p>(37)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Travel news</p>
                                                <p>(10)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Modern technology</p>
                                                <p>(03)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Product</p>
                                                <p>(11)</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Inspiration</p>
                                                <p>21</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex">
                                                <p>Health Care (21)</p>
                                                <p>09</p>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>

                                <aside className="single_sidebar_widget popular_post_widget">
                                    <h3 className="widget_title">Recent Post</h3>
                                    <div className="media post_item">
                                        <img src="img/post/post_1.png" alt="post"/>
                                        <div className="media-body">
                                            <a href="single-blog.html">
                                                <h3>From life was you fish...</h3>
                                            </a>
                                            <p>January 12, 2019</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="img/post/post_2.png" alt="post"/>
                                        <div className="media-body">
                                            <a href="single-blog.html">
                                                <h3>The Amazing Hubble</h3>
                                            </a>
                                            <p>02 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="img/post/post_3.png" alt="post"/>
                                        <div className="media-body">
                                            <a href="single-blog.html">
                                                <h3>Astronomy Or Astrology</h3>
                                            </a>
                                            <p>03 Hours ago</p>
                                        </div>
                                    </div>
                                    <div className="media post_item">
                                        <img src="img/post/post_4.png" alt="post"/>
                                        <div className="media-body">
                                            <a href="single-blog.html">
                                                <h3>Asteroids telescope</h3>
                                            </a>
                                            <p>01 Hours ago</p>
                                        </div>
                                    </div>
                                </aside>
                                <aside className="single_sidebar_widget tag_cloud_widget">
                                    <h4 className="widget_title">Tag Clouds</h4>
                                    <ul className="list">
                                        <li>
                                            <a href="#">project</a>
                                        </li>
                                        <li>
                                            <a href="#">love</a>
                                        </li>
                                        <li>
                                            <a href="#">technology</a>
                                        </li>
                                        <li>
                                            <a href="#">travel</a>
                                        </li>
                                        <li>
                                            <a href="#">restaurant</a>
                                        </li>
                                        <li>
                                            <a href="#">life style</a>
                                        </li>
                                        <li>
                                            <a href="#">design</a>
                                        </li>
                                        <li>
                                            <a href="#">illustration</a>
                                        </li>
                                    </ul>
                                </aside>


                                <aside className="single_sidebar_widget instagram_feeds">
                                    <h4 className="widget_title">Instagram Feeds</h4>
                                    <ul className="instagram_row flex-wrap">
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_5.png" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_6.png" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_7.png" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_8.png" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_9.png" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="img-fluid" src="img/post/post_10.png" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </aside>


                                <aside className="single_sidebar_widget newsletter_widget">
                                    <h4 className="widget_title">Newsletter</h4>

                                    <form action="#">
                                        <div className="form-group">
                                            <input type="email" className="form-control" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required/>
                                        </div>
                                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                            type="submit">Subscribe</button>
                                    </form>
                                </aside>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
   )
    }
}

export default videoGallery;


