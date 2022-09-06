import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	BgImageHomeDesktop,
	BgImageHomeMobile,
	BgImageHomeTablet,
} from '../assets/assets';
import { device } from '../utils/Device';
import { color, fontfamily } from '../utils/GlobalVar';

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
	padding: 24px;
	min-height: 100vh;
	background-image: url(${BgImageHomeMobile});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;

	.cta {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		color: ${color.bg};
		margin: 80px auto 0;
		background-color: ${color.textOne};
		border-radius: 50%;
		width: 150px;
		height: 150px;
		transition: all 0.6s ease;

		&:hover {
			/* transition: outline 0.6s; */
			outline: 50px solid #24262f;
		}
	}

	@media ${device.tablet} {
		background-image: url(${BgImageHomeTablet});
	}

	@media ${device.desktop} {
		background-image: url(${BgImageHomeDesktop});
		background-position: right;
	}
`;
