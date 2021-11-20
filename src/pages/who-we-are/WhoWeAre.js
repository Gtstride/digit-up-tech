/** @format */

import React from 'react';

const WhoWeAre = () => {
	return (
		<section id='about' className='who-we-are section-padding'>
			<div className='container'>
				<div className='row'>
					<div className='wow zoomIn col-xs-12 col-lg-12 text-center p-padding'>
						<h1 className='section-title'>who we are</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
							venenatis lectus sed sollicitudin. Duis in odio ex. Sed elementum varius
							enim. In vel tincidunt lorem. Donec gravida felis vitae ipsum pharetra
							maximus.
						</p>
					</div>
					<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3 text-center'>
						<div className='icon-circle'>
							<i class='fa fa-eye' aria-hidden='true'></i>
						</div>
						<div className='who-we-are-content text-center'>
							<h2>Vision</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
								venenatis lectus sed sollicitudin.{' '}
							</p>
						</div>
					</div>
					<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3 text-center'>
						<div className='icon-circle'>
							{/* <i className='fa fa-laptop' /> */}
							<i class='fa fa-bullseye' aria-hidden='true'></i>
						</div>
						<div className='who-we-are-content text-center'>
							<h2>mission</h2>
							<p>
								Customize your website, to enable even the least tech person to navigate
								and get answers to their questions without needing to talk to anyone.
							</p>
						</div>
					</div>
					<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3 text-center'>
						<div className='icon-circle'>
							{/* <i className='fa flaticon-christmas128' /> */}
							<i class='fa fa-dot-circle-o' aria-hidden='true'></i>
						</div>
						<div className='who-we-are-content text-center'>
							<h2>objective</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
								venenatis lectus sed sollicitudin.{' '}
							</p>
						</div>
					</div>
					<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3 text-center'>
						<div className='icon-circle'>
							{/* <i className='fa fa-code' /> */}
							<i class='fa fa-lightbulb-o' aria-hidden='true'></i>
						</div>
						<div className='who-we-are-content text-center'>
							<h2>Goals</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
								venenatis lectus sed sollicitudin.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
