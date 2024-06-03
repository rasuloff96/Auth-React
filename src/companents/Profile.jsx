//Profile.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const { user } = useAuth0();

	return (
		<>
			<div className="container">
				<p className="userInfo" id="userInfo1">
					Name: {user.name}</p>
				<p className="userInfo" id="userInfo2">
					Given Name: {user.given_name}</p>
				<p className="userInfo" id="userInfo3">
					Family Name: {user.family_name}</p>
				<p className="userInfo" id="userInfo4">
					Email: {user.email}</p>
				<p className="userInfo" id="userInfo5">
					Sub: {user.sub}</p>
			</div>
		</>
	)
}

export default Profile