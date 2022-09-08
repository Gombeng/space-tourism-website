import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Destination, Home } from '../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route index element={<Home />} />
				<Route exact path="/" element={<Home />} />
				<Route exact path="/destination" element={<Destination />} />
			</Switch>
		</Router>
	);
};

export default Routes;
