/** @format */

import React from 'react';
import digit from '../../img/logo1-noBG.png';

const Header = () => {
	return (
		<>
			<header className='header-part'>
				<div id='home' className='wrapper'>
					{/* Fixed navbar */}
					<div className='navi navbar-default' role='navigation'>
						<div className='container'>
							<div className='navbar-header page-scroll'>
								<a href='#menu'>
									<button type='button' data-effect='st-effect-1' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
										<span className='sr-only'>Toggle navigation</span>
										<span className='icon-bar' />
										<span className='icon-bar' />
										<span className='icon-bar' />
									</button>
								</a>
								<a className='navbar-brand' href='index.html'>
									<img src={digit} alt='Digit-uP' height={150} />
								</a>
							</div>

							<div id='navbar' className='navbar-collapse collapse pull-right hidden-xs'>
								<ul className='nav navbar-nav navbar-right'>
									<li>
										<a className='page-scroll' href='#home'>
											Home
										</a>
									</li>
									<li>
										<a className='page-scroll' href='#about'>
											About us
										</a>
									</li>
									<li>
										<a className='page-scroll' href='#services'>
											Services
										</a>
									</li>
									{/* <li>
										<a className='page-scroll' href='#product'>
											Portfolio
										</a>
									</li> */}
									<li>
										<a className='page-scroll' href='#team'>
											team
										</a>
									</li>
									<li>
										<a className='page-scroll' href='#contact'>
											Contact
										</a>
									</li>
									<li>
										<i className='search fa fa-search search-btn' />
										<div className='search-open' style={{ display: 'none' }}>
											<div className='input-group animated fadeInDown'>
												<input type='text' className='form-control' placeholder='Search' />
												<span className='input-group-btn'>
													<button className='btn-u' type='button'>
														Go
													</button>
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
