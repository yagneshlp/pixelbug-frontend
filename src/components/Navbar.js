import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render(){
      return (
          
        <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                  <Link to="/"> <img src="img/logo.png" alt="" /></Link>                                       
                                  
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <Link to="/"> <li><a>home</a></li></Link>  
                                            <Link to="/about"> <li><a>about us</a></li></Link>                                             
                                            <Link to="/members"> <li><a>members</a></li></Link>
                                            <Link to="/gallery"> <li><a>Works</a></li></Link> 
                                            {/* <li><a>Gallery <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                <li><Link to="/gallery/photos">Photo</Link> </li>
                                                <li><Link to="/gallery/videos">Video</Link> </li>                                              
                                                </ul>
                                            </li> */}
                                            <Link to="/aurora"> <li><a className="overlineDeco">Aurora</a></li></Link> 
                                            <Link to="/contact"> <li><a>Contact</a></li></Link>
                                           
                                        </ul>
                                    </nav>
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
      )
    }
}

export default Navbar;