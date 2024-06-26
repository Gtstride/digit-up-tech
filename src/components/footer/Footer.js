/** @format */

import React from 'react';
import footer from '../../img/w-logoo.png';

const Footer = () => {
	const today = new Date();

	return (
		<>
			<footer>
				<div className='footer-wrapper section-padding'>
					<div className='container'>
						<div className='row'>
							<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
								<a href='index.html'>
									<img src={footer} alt='digituP' height={150} />
								</a>
								<p className='footer-content'>Get to know more about us, and how we can work together to achieve your goals.</p>
							</div>
							{/* /.col-xs-12 .col-sm-3 .col-md-3 */}
							<div className='wow zoomIn col-xs-12 col-sm-3 col-md-3'>
								<p className='footer-heading'>Check Out</p>
								<ul className='footermenu'>
									<li>
										<a data-scroll data-options='{ "easing": "easeInQuad" }' href='#about'>
											about us
										</a>
									</li>
									<li>
										<a data-scroll data-options='{ "easing": "easeInQuad" }' href='#services'>
											services
										</a>
									</li>
									<li>
										<a data-scroll data-options='{ "easing": "easeInQuad" }' href='#team'>
											team
										</a>
									</li>
									{/* <li>
										<a data-scroll data-options='{ "easing": "easeInQuad" }' href='#product'>
											portfolio
										</a>
									</li> */}
									<li>
										<a data-scroll data-options='{"easing": "easInQuad"}' href='#contact'>
											contact
										</a>
									</li>
								</ul>
							</div>
							{/* /.col-xs-12 .col-sm-3 .col-md-3 */}
							<div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
								<p className='footer-heading'>find us</p>
								<ul className='footercontact'>
									<li>
										<i className='flaticon-mainpage' />
										<span>address:</span> 11, Adekoya College road,Ogba - Lagos
									</li>
									<li>
										<i className='flaticon-phone16' />
										<span>phone:</span>
										<a href='tel:88 02 8714612'> +234 803 214 5534</a>
									</li>
									<li>
										<i className='flaticon-email21' />
										<span>e-mail:</span>
										<a href='mailto:support@themerole.com'> info@digitup.com</a>
									</li>
									<li>
										<i className='flaticon-world91' />
										<span>web:</span>
										<a href='http://themerole.com'> www.digitup.com</a>
									</li>
								</ul>
								<i className='flaticon-home78' />
							</div>
							{/* <li>
										<a
											data-scroll
											data-options='{ "easing": "easeInQuad" }'
											href='#product'
										>
											product
										</a>
									</li> */}
							{/* /.col-xs-12 .col-sm-3 .col-md-3 */}
							{/* <div className='wow zoomIn col-xs-12 col-sm-6 col-md-3'>
								<p className='footer-heading'>recent posts</p>
								<ul className='footerblog'>
									<li>
										<a href='blog-sidebar.html'>The Green Fields of Spring</a>
										<p>13th Jun 2014</p>
									</li>
									<li>
										<a href='blog-sidebar.html'>This is a Video Post</a>
										<p>18th Nov 2014</p>
									</li>
									<li>
										<a href='blog-sidebar.html'>Satisfaction Lies in the Effort</a>
										<p>13th Jun 2014</p>
									</li>
								</ul>
							</div> */}
							{/* /.col-xs-12 .col-sm-3 .col-md-3 */}
						</div>
						{/* /.row */}
					</div>
					{/* /.container */}
				</div>
				<div className='footer-bottom'>
					<div className='container'>
						<div className='row'>
							<div className='wow zoomIn col-xs-12'>
								<p>
									All rights reserved &copy; Copyright{' '}
									<span>
										<i>
											<b> Digit-uP </b>
										</i>
									</span>
									{today.getFullYear()}
									{/* <a href='http://themerole.com'>themerole</a> */}
								</p>
								<div className='backtop  pull-right'>
									<i className='fa fa-angle-up back-to-top' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<nav id='menu'>
				<ul>
					<li>
						<a href='#0'>home</a>
					</li>
					<li>
						<a href='#about'>about us</a>
					</li>
					<li>
						<a href='#services'>services</a>
					</li>
					<li>
						<a href='#team'>team</a>
					</li>

					<li>
						<a href='#product'>Portfolio</a>
					</li>
					{/* <li><a href='#blog'>blog</a>
						<ul>
							<li><a href='blog-full-width.html'>full width blog</a></li>
							<li><a href='blog-sidebar.html'>sidebar blog</a></li>
						</ul>
					</li> */}
					<li>
						<a href='#contact'>contact</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Footer;
