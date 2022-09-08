import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	BgImageHomeDesktop,
	BgImageHomeMobile,
	BgImageHomeTablet,
} from '../assets/assets';
import { device } from '../utils/Device';
import { color } from '../utils/GlobalVar';

const Home = () => {
	return (
		<Container>
			<div>
				<h5>SO, YOU WANT TO TRAVEL TO</h5>

				<h1>SPACE</h1>

				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>

			<div>
				<NavLink to="/destination" className="font-bellefair cta">
					EXPLORE
				</NavLink>
			</div>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 7rem 24px 24px;
	min-height: 100vh;
	background-image: url(${BgImageHomeMobile});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;

	p {
		max-width: 444px;
	}

	.cta {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 150px;
		height: 150px;
		font-size: 20px;
		margin: 80px auto 0;
		color: ${color.bg};
		border-radius: 50%;
		background-color: ${color.textOne};
		transition: all 0.6s ease;

		&:hover {
			/* transition: outline 0.6s; */
			outline: 50px solid rgba(255, 255, 255, 0.1);
		}

		@media ${device.tablet} {
			width: 242px;
			height: 242px;
			font-size: 32px;

			&:hover {
				/* transition: outline 0.6s; */
				outline: 70px solid rgba(255, 255, 255, 0.1);
			}
		}

		@media ${device.laptop} {
			width: 274px;
			height: 274px;

			&:hover {
				/* transition: outline 0.6s; */
				outline: 90px solid rgba(255, 255, 255, 0.1);
			}
		}
	}

	@media ${device.tablet} {
		background-image: url(${BgImageHomeTablet});
	}

	@media ${device.laptop} {
		background-image: url(${BgImageHomeDesktop});
		background-position: right;
		align-items: flex-end;
		justify-content: space-around;
		flex-direction: row;
		padding-bottom: 15vh;
	}
`;
