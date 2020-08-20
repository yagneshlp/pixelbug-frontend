import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">

        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="index.html">home</a></li>
                                                <li><a href="performer.html">Performer</a></li>
                                                
                                                <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="about.html">about</a></li>
                                                        <li><a href="Program.html">Program</a></li>
                                                        <li><a href="Venue.html">Venue</a></li>
                                                        <li><a href="elements.html">elements</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">blog <i className="ti-angle-down"></i></a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">blog</a></li>
                                                        <li><a href="single-blog.html">single-blog</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="buy_tkt">
                                        <div className="book_btn d-none d-lg-block">
                                            <a href="#">Buy Tickets</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <div className="slider_area">
            <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-12">
                            <div className="slider_text text-center">
                                <div className="shape_1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                    <img src="img/shape/shape_1.svg" alt=""/>
                                </div>
                                <div className="shape_2 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                                    <img src="img/shape/shape_2.svg" alt=""/>
                                </div>
                                <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">12 Feb, 2020</span>
                                <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">Concert  2020</h3>
                                <p className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">Green Avenue, New York</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="performar_area black_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title mb-80">
                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Performer</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div data-tilt className="thumb">
                                        <img src="img/performer/1.png" alt=""/>
                                    </div>
                                    <div className="performer_heading">
                                        <h4>Mr. Zosoldos</h4>
                                        <span>Acoustic drum</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                    <div data-tilt className="thumb">
                                        <img src="img/performer/2.png" alt=""/>
                                    </div>
                                    <div className="performer_heading">
                                        <h4>Protik Hasan</h4>
                                        <span>Acoustic drum</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <div data-tilt className="thumb">
                                        <img src="img/performer/3.png" alt=""/>
                                    </div>
                                    <div className="performer_heading">
                                        <h4>Salmon Vicky</h4>
                                        <span>Acoustic drum</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div   className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                    <div data-tilt className="thumb">
                                        <img src="img/performer/4.png" alt=""/>
                                    </div>
                                    <div className="performer_heading">
                                        <h4>Filaris Habol</h4>
                                        <span>Acoustic drum</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about_area black_bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center mb-80">
                            <h3 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s" >About Program</h3>
                            <p className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s" >The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="about_thumb">
                            <div className="shap_3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">
                                <img src="img/shape/shape_3.svg" alt=""/>
                            </div>
                            <div className="thumb_inner  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <img src="img/about/about.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="about_info pl-68">
                            <h4 className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">It’s time to book your seat</h4>
                            <p  className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".6s">The event regularly attracts a diverse range of attendees from around the world, across different professions, and with different levels of experience transform your business.</p>
                            <a href="#" className="boxed-btn3  wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s">Buy Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="program_details_area detials_bg_1 overlay2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80  wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <h3>Program Details</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="program_detail_wrap">
                            <div className="single_propram">
                                <div className="inner_wrap">
                                    <div className="circle_img"></div>
                                    <div className="porgram_top">
                                        <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                        <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                    </div>
                                    <div className="thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <img src="img/program_details/1.png" alt=""/>
                                    </div>
                                    <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                </div>
                            </div>
                            <div className="single_propram">
                                <div className="inner_wrap">
                                    <div className="circle_img"></div>
                                    <div className="porgram_top">
                                        <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                        <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                    </div>
                                    <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                        <img src="img/program_details/2.png" alt=""/>
                                    </div>
                                    <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                </div>
                            </div>
                            <div className="single_propram">
                                <div className="inner_wrap">
                                    <div className="circle_img"></div>
                                    <div className="porgram_top">
                                        <span className=" wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                        <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                    </div>
                                    <div className="thumb  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                        <img src="img/program_details/3.png" alt=""/>
                                    </div>
                                    <h4 className=" wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                </div>
                            </div>
                            <div className="single_propram">
                                <div className="inner_wrap">
                                    <div className="circle_img"></div>
                                    <div className="porgram_top">
                                        <span className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">3.00-4.00pm</span>
                                        <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".4s">12 Feb 2020</h4>
                                    </div>
                                    <div className="thumb wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">
                                        <img src="img/program_details/4.png" alt=""/>
                                    </div>
                                    <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">Mr. Zosoldos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="brand_area black_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <h4 className="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">Sponsor Logos</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand_wrap">
                            <div className="brand_active owl-carousel">
                                <div className="single_brand text-center">
                                    <img src="img/brand/1.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/2.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/3.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/4.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/5.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/1.png" alt=""/>
                                </div>
                                <div className="single_brand text-center">
                                    <img src="img/brand/2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="footer_widget">
                                <div className="address_details text-center">
                                    <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">12 Feb, 2020</h4>
                                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Green Avenue, New York</h3>
                                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">The event regularly attracts a diverse range of attendees from around the world.</p>
                                    <a href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">Buy Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

      </div>
    )
  }
}


export default App;
