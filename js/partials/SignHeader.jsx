import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBarLink from './NavBarLink';
import {signoutSuccess} from '../auth/authActions';
import {hashHistory} from 'react-router';
import authService from '../auth/auth.service';

@connect(
	state => ({
		loggedIn: state.auth.username,
		username: state.auth.username
	})
)
class SignHeader extends Component {

	constructor(props) {
		super(props);
	}

	signout() {
		let {dispatch} = this.props;

		authService.signout()
			.then(res => {
				dispatch(signoutSuccess());
				hashHistory.push('/signin');
			})
		// dispatch(signoutSuccess());
	}


	render() {
		
		let {loggedIn, username} = this.props;
		let signout = this.signout.bind(this);
		return (
				
				<ul className="nav navbar-nav float-right">
					{
						loggedIn && 
						[
							<li className="nav-item" key="username">
								<a className="nav-link">{username}</a>
							</li>,
							<li className="nav-item" key="signout" onClick={
								e => {
									e.preventDefault();
									signout();
								}
							}>
								<a className="nav-link">Signout</a>
							</li>
						]
					}
					{
						!loggedIn && 
						[
							<NavBarLink label="Signin" key="signin" url="/signin"></NavBarLink>,
							<NavBarLink label="Signup" key="signup" url="/signup"></NavBarLink>
						]
					}
				</ul>	
			);
	}
}


export default SignHeader;
