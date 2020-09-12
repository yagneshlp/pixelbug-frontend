import React, { Component } from 'react';


class equipments extends React.Component{
    render(){
        return (
            <div className="">
            <div className="container">
                <div className="section-top-border">
                <div className="section_title text-center mb-80  wow fadeInRight " data-wow-duration="1s" data-wow-delay=".3s">
                            <h3 className="blackText">Equipment</h3>
                        </div>
				<div className="row">
					<div className="col-md-4">
						<div className="single-defination">
                        <img className="mb-20 equipImage" src="https://pixelbug-website.s3.ap-south-1.amazonaws.com/equipments/drone.jpg" alt=""/>
							<h3 className="mb-20">Drone</h3>
							<p>The eagle of cameras, that presents to us the view of God. The DJI Mavic Mini is the perfect creative and compact companion unlocking a striking new angle to fall in love with our college. We thank Scient Lab and RECAL to have sponsored in procuring and unlocking opportunities.</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-defination">
                        <img className="mb-20 equipImage" src="img/program_details/1.png" alt=""/>
							<h3 className="mb-20">Camera</h3>
							<p>Standing true to our word that passion is the sole requirement for this club, our camera provides a first touch to our beloved comrades, opening their gateways to a new world through the viewfinder. The Canon 700D is just the perfect tool for that - simple, yet very capable. </p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-defination">
                        <img className="mb-20 equipImage" src="https://pixelbug-website.s3.ap-south-1.amazonaws.com/equipments/gimbal.jpg" alt=""/>
							<h3 className="mb-20">Gimbal</h3>
							<p>The pursuit for smooth, buttery shots is never ending. A jitterless, continuous scene not only provides a treat to the eye, but also entices the viewer, making the experience much more surreal. The Zhiyun Weebill S equips us with the ability to take a grip on the narrative.</p>
						</div>
					</div>
				</div>
			</div>
            </div>
        </div>
        )
    }
}

export default equipments;