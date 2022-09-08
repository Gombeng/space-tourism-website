import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	BgImageDestinationDesktop,
	BgImageDestinationMobile,
	BgImageDestinationTablet,
	ImageMoon,
} from '../assets/assets';
import { device } from '../utils/Device';
import { color } from '../utils/GlobalVar';

const Destination = () => {
	return (
		<Container>
			<div>
				<h5 className="mb-1">
					<span>01</span> PICK YOUR DESTINATION
				</h5>

				<img src={ImageMoon} alt="Moon" />
			</div>

			<div>
				<div className="menu">
					<NavLink
						to="/destination"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						MOON
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						MARS
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						EUROPA
					</NavLink>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'link active' : 'link')}
					>
						TITAN
					</NavLink>
				</div>

				<h2 style={{ margin: '28px 0 5px' }}>MOON</h2>
				<p>
					See our planet as you’ve never seen it before. A perfect relaxing trip
					away to help regain perspective and come back refreshed. While you’re
					there, take in some history by visiting the Luna 2 and Apollo 11
					landing sites.
				</p>

				<hr className="my-2" />

				<div className="d-flex">
					<div className="mb-2">
						<p style={{ marginBottom: '12px' }} className="subheading-2">
							AVG. DISTANCE
						</p>
						<p className="subheading-1">384,400 KM</p>
					</div>
					<div>
						<p style={{ marginBottom: '12px' }} className="subheading-2">
							EST. TIME TRAVEL
						</p>
						<p className="subheading-1">3 DAYS</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Destination;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
    margin: 0 auto;
	padding: 7rem 24px 24px;
	min-height: 100vh;
    max-width: 1600px;
	background-image: url(${BgImageDestinationMobile});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
    position: relative;
    /* z-index: -9; */

	h5 {
		@media ${device.tablet} {
			position: absolute;
			left: 40px;
		}

		@media ${device.tablet} {
			left: 8%;
		}
	}

	img {
		width: 170px;
		margin: 32px 0 26px;

		@media ${device.tablet} {
			padding-top: 24px;
			margin: 60px 0 53px;
			width: 300px;
		}

		@media ${device.desktop} {
			padding-top: 34px;
			margin: 97px 0;
			width: 445px;
		}
	}

	.menu {
		& > a:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.link {
		color: ${color.textSec} !important;
		transition: 0.3s;
		padding-bottom: 8px;
		font-size: 14px;

		@media ${device.tablet} {
			font-size: 16px;
		}

		&:hover {
			border-bottom: 3px solid rgba(255, 255, 255, 0.5);
		}

		&.active {
			color: ${color.textOne};
			border-bottom: 3px solid white;
		}
	}

	span {
		font-weight: bolder;
		margin-right: 12px;
		opacity: 0.4;
	}

	p {
		max-width: 573px;

		@media ${device.laptop} {
			max-width: 444px;
		}
	}

	.d-flex {
		@media ${device.tablet} {
			display: flex;
			justify-content: space-evenly;
		}

		@media ${device.laptop} {
			justify-content: start;

			& > div:nth-child(1) {
				margin-right: 89px;
			}
		}
	}

	@media ${device.tablet} {
		padding: 120px 24px 24px;
		background-image: url(${BgImageDestinationTablet});
	}

	@media ${device.laptop} {
		padding: 150px 24px 24px;
		background-image: url(${BgImageDestinationDesktop});
		background-position: right;
		align-items: center;
		justify-content: space-around;
		flex-direction: row;
		/* padding-bottom: 15vh; */
	}

	@media ${device.desktop} {
		padding: 160px 24px 24px;
	}
`;
