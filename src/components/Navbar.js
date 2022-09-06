import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/Device';
import { color } from '../utils/GlobalVar';
import { IconClose, IconMenu, Logo } from '../assets/assets';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<Container>
			<NavLink to="/" className="nav-logo">
				<img src={Logo} alt="Logo" />
			</NavLink>

			<div className="nav-icon">
				<img
					onClick={handleClick}
					src={click ? IconClose : IconMenu}
					alt={click ? 'Close' : 'Menu'}
				/>
			</div>

			<div className={click ? 'nav-text nav-menu active' : 'nav-menu'}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
				>
					<span>00</span>
					HOME
				</NavLink>
				<NavLink
					to="/destination"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
				>
					<span>01</span>
					DESTINATION
				</NavLink>
				<NavLink
					to="/crew"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
				>
					<span>02</span>
					CREW
				</NavLink>
				<NavLink
					to="/tech"
					className={({ isActive }) => (isActive ? 'link active' : 'link')}
				>
					<span>03</span>
					TECHNOLOGY
				</NavLink>
			</div>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 24px 0;
	position: fixed;
	width: 100%;
	text-align: left;

	.nav-logo {
		img {
			width: 40px;
		}
	}

	.nav-icon {
		cursor: pointer;
		z-index: 999;

		img {
			width: 24px;
		}

		@media ${device.tablet} {
			display: none;
		}
	}

	.nav-menu {
		.link {
			color: ${color.textOne};
		}

		span {
			font-weight: bolder;
			margin-right: 12px;

			@media ${device.tablet} {
				display: none;
			}
		}

		@media ${device.tabletmax} {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: -100vh;
			right: 0;
			width: 70%;
			height: 100vh;
			padding: 153px 1px 2rem 2rem;
			background: rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(30px);
			transition: 0.6s;
			z-index: 99;

			.link {
				padding: 16px 0;
				transition: 0.3s;

				&:hover,
				&.active {
					border-right: 5px solid white;
				}
			}

			&.active {
				top: 0;
			}
		}
	}
`;
