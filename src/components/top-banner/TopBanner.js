/** @format */

import React from 'react';
import slider0 from '../../img/slider/image.png';
import slider1 from '../../img/slider/slider_img_01.jpg';
import slider02 from '../../img/slider/slider_img_02.jpg';
import slider03 from '../../img/slider/slider_img_03.jpg';
import slider04 from '../../img/slider/slider_img_04.png';
import mobile from '../../img/slider/cyber.png';
import html from '../../img/slider/training.png';
import css from '../../img/slider/css.png';
import js from '../../img/slider/js.png';
import btn from '../../img/slider_button.png';

const TopBanner = () => {
	return (
		<div className='tp-banner-container'>
			<div className='tp-banner'>
				<ul>
					{/* SLIDE  */}
					<li data-transition='fade' data-slotamount={25} data-masterspeed={2500} data-thumb={slider1} data-saveperformance='off'>
						{/* MAIN IMAGE */}
						<img src={slider04} alt='fullslide2' data-bgposition='center center' data-kenburns='on' data-duration={12000} data-ease='Power0.easeInOut' data-bgfit={115} data-bgfitend={100} data-bgpositionend='center center' />
						<div
							className='tp-caption very_large_text lfb ltt skewfromrightshort fadeout tp-resizeme head-tag'
							data-x={637}
							data-y={200}
							data-speed={1500}
							data-start={4500}
							data-easing='Power3.easeInOut'
							data-splitin='chars'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={300}
							style={{
								zIndex: 5,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								color: '#fff',
							}}
						>
							<h1>OUR THINKING</h1>
						</div>
						{/* LAYERS */}
						<div
							className='tp-caption very_large_text lfb ltt skewfromrightshort fadeout tp-resizeme'
							data-x={637}
							data-y={282}
							data-speed={1500}
							data-start={5500}
							data-easing='Power3.easeInOut'
							data-splitin='chars'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={300}
							style={{
								zIndex: 5,
								maxWidth: 'auto',
								maxHeight: 'auto',
								fontSize: 55,
								whiteSpace: 'nowrap',
								color: '#f9844c',
							}}
						>
							<h1>YOUR PRODUCT</h1>
						</div>
						<div className='tp-caption lft randomrotate customout' data-x='left' data-y='center' data-voffset={110} data-customout='x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;' data-speed={800} data-start={2000} data-easing='Back.easeOut' data-endspeed={500} data-endeasing='Power4.easeIn' data-captionhidden='on' style={{ zIndex: 9 }}>
							<img src={mobile} alt='' data-ww={550} data-hh={490} />
						</div>
						<div className='tp-caption lfl randomrotate tp-resizeme' data-x={60} data-y='bottom' data-voffset={-70} data-speed={800} data-start={3000} data-easing='Back.easeOut' data-endspeed={500} data-endeasing='Power4.easeIn' data-captionhidden='on' style={{ zIndex: 9 }}>
							<img src={html} alt='' data-ww={125} data-hh={160} />
						</div>
						<div className='tp-caption randomrotate tp-resizeme' data-x={210} data-y='bottom' data-voffset={-70} data-speed={800} data-start={4000} data-easing='Back.easeOut' data-endspeed={500} data-endeasing='Power4.easeIn' data-captionhidden='on' style={{ zIndex: 9 }}>
							<img src={css} alt='' data-ww={125} data-hh={160} />
						</div>
						<div className='tp-caption sfr randomrotate tp-resizeme' data-x={360} data-y='bottom' data-voffset={-70} data-speed={800} data-start={5000} data-easing='Back.easeOut' data-endspeed={500} data-endeasing='Power4.easeIn' data-captionhidden='on' style={{ zIndex: 9 }}>
							<img src={js} alt='' data-ww={125} data-hh={160} />
						</div>
						{/* LAYER NR. 2 */}
						<div
							className='tp-caption lfl tp-resizeme'
							data-x={637}
							data-y={365}
							data-speed={1000}
							data-start={8000}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title second-title'>get what you desire</h2>
						</div>
						{/* LAYER NR. 3 */}
						<div
							className='tp-caption  lfl tp-resizeme'
							data-x={637}
							data-y={420}
							data-speed={1000}
							data-start={8600}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title second-title'>Lean on us for your bespoke training / web services</h2>
						</div>
						{/* LAYER NR. 4 */}
						<div
							className='tp-caption  lfl tp-resizeme'
							data-x={637}
							data-y={475}
							data-speed={1000}
							data-start={9400}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title second-title'>Get the training you deserve, the website that befits your organization or you!</h2>
						</div>
						{/* LAYER NR. 5 */}
						<div
							className='tp-caption lfr tp-resizeme start-button'
							data-x={637}
							data-y={540}
							data-speed={1000}
							data-start={10500}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<button
								type='button'
								className='btn btn-primary'
								style={{
									backgroundColor: '#000',
									border: '1px solid #e95e1d',
									color: '#f9844c',
								}}
							>
								Call Now
							</button>
						</div>
					</li>
					<li className='items' data-transition='slideleft' data-slotamount={1} data-masterspeed={1500} data-thumb={slider02} data-delay={13000} data-saveperformance='on'>
						{/* MAIN IMAGE */}
						<img src={slider02} alt='kenburns1' data-bgposition='left center' data-kenburns='on' data-duration={14000} data-ease='Linear.easeNone' data-bgfit={100} data-bgfitend={130} data-bgpositionend='right center' />
						{/* LAYERS */}
						{/* LAYER NR. 1 */}
						<div
							className='tp-caption very_large_text lfb ltt tp-resizeme head-tag'
							data-x='left'
							data-hoffset={20}
							data-y='center'
							data-voffset={-100}
							data-speed={600}
							data-start={500}
							data-easing='Power3.easeInOut'
							data-splitin='chars'
							data-splitout='chars'
							data-elementdelay='0.08'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								color: '#fff',
							}}
						>
							<h1>
								<span>Digit uP</span> : YOU TO THE WORLD
							</h1>
						</div>
						{/* LAYER NR. 2 */}
						<div
							className=' tp-caption  lfl tp-resizeme'
							data-x={-100}
							data-y={340}
							data-speed={500}
							data-start={1500}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title'>Get Your BeSpoke Web App Delivered On-time</h2>
						</div>
						{/* LAYER NR. 3 */}
						<div
							className='tp-caption  lfl tp-resizeme'
							data-x={-100}
							data-y={400}
							data-speed={1000}
							data-start={2000}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title'> Learn from the Experts &amp; become One</h2>
						</div>
						{/* LAYER NR. 4 */}
						<div
							className='tp-caption  lfl tp-resizeme'
							data-x={-100}
							data-y={460}
							data-speed={2000}
							data-start={2500}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<h2 className='small-title'>Tripple Sales &amp;</h2>
						</div>
						{/* LAYER NR. 5 */}
						<div
							className='tp-caption lfr tp-resizeme'
							data-x='right'
							data-hoffset={100}
							data-y='bottom'
							data-voffset={-90}
							data-speed={3000}
							data-start={4000}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								color: '#f9844c',
							}}
						>
							<button
								style={{
									backgroundColor: 'black',
									fontSize: '50',
									border: '1px solid #e95e1d',
									color: '#f9844c',
								}}
								type='button'
								className='btn btn-primary buy-btn'
							>
								call now
							</button>
						</div>
					</li>
					<li className='items' data-transition='slidevertical' data-slotamount={1} data-masterspeed={1500} data-thumb={slider03} data-delay={13000} data-saveperformance='off'>
						{/* MAIN IMAGE */}
						<img
							// src={slider03}
							src={slider0}
							alt='kenburns1'
							data-bgposition='left center'
							data-kenburns='on'
							data-duration={14000}
							data-ease='Linear.easeNone'
							data-bgfit={100}
							data-bgfitend={130}
							data-bgpositionend='right center'
						/>
						{/* LAYERS */}
						{/* LAYER NR. 1 */}
						<div
							className='tp-caption very_large_text lfb ltt tp-resizeme head-tag'
							data-x='center'
							data-hoffset={0}
							data-y='center'
							data-voffset={-160}
							data-speed={1200}
							data-start={1700}
							data-easing='Power3.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.05'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 2,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								textAlign: 'center',
							}}
						>
							<h1>
								<span>We create those </span> amazing <br />
								memories that last
							</h1>
						</div>
						{/* LAYER NR. 2 */}
						<div
							className='tp-caption  lfl tp-resizeme small-text'
							data-x='center'
							data-hoffset={0}
							data-y='center'
							data-voffset={-60}
							data-speed={1500}
							data-start={2000}
							data-easing='Power1.easeInOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={300}
							style={{
								zIndex: 3,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								color: '#f9844c',
							}}
						>
							<p>Nothing like learning from those who already know these things and how the system works,</p>
						</div>
						{/* LAYER NR. 3 */}
						<div
							className='tp-caption  lfl tp-resizeme small-text'
							data-x='center'
							data-hoffset={0}
							data-y='center'
							data-voffset={-30}
							data-speed={1500}
							data-start={2000}
							data-easing='Power1.easeInOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={300}
							style={{
								zIndex: 3,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
								color: '#f9844c',
							}}
						>
							<p>we are here to walk you you all the way, to the top, till those big dreams become a reality.</p>
						</div>
						{/* LAYER NR. 4 */}
						<div
							className='tp-caption lfr tp-resizeme start-button'
							data-x='center'
							data-hoffset={-90}
							data-y='center'
							data-voffset={33}
							data-speed={2000}
							data-start={3500}
							data-easing='Power4.easeInOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={1000}
							data-endeasing='Power1.easeOut'
							style={{
								zIndex: 3,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<button type='button' className='btn btn-danger' style={{ backgroundColor: 'transparent' }}>
								see More
							</button>
						</div>
						{/* LAYER NR. 5 */}
						<div
							className='lfr tp-caption tp-resizeme start-button'
							data-x='center'
							data-hoffset={90}
							data-y='center'
							data-voffset={33}
							data-speed={2500}
							data-start={4000}
							data-easing='Power4.easeInOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.1'
							data-endelementdelay='0.1'
							data-endspeed={1000}
							data-endeasing='Power1.easeOut'
							style={{
								zIndex: 3,
								maxWidth: 'auto',
								maxHeight: 'auto',
								whiteSpace: 'nowrap',
							}}
						>
							<button
								type='button'
								className='btn btn-primary'
								style={{
									backgroundColor: '#000',
									border: '1px solid #e95e1d',
									color: '#f9844c',
								}}
							>
								call now
							</button>
						</div>
						{/* LAYER NR. 6 */}
						<div
							className='tp-caption tp-resizeme lfb randomrotate down-arrow'
							data-x='center'
							data-hoffset={0}
							data-y='center'
							data-voffset={230}
							data-speed={2200}
							data-start={5500}
							data-easing='Power4.easeOut'
							data-splitin='none'
							data-splitout='none'
							data-elementdelay='0.01'
							data-endelementdelay='0.1'
							data-endspeed={500}
							data-endeasing='Power4.easeIn'
							style={{
								zIndex: 3,
								maxWidth: 50,
								maxHeight: 50,
								whiteSpace: 'nowrap',
							}}
						>
							<i className='scroll-bottom'>
								<img src={btn} alt='arrow-down.png' className='img-responsive' />
							</i>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TopBanner;
