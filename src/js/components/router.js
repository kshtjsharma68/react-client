import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import SignIn from './Login/login';

class Routers extends Component {
	render() {
		return (
			<Router >
				<Route path='/' component={SignIn} />
				<Route path='/login' component={SignIn} />
			</Router>
			);
	}
}

export default Routers;