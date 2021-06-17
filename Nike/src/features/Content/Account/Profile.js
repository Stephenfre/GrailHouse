import React from "react";
import { Link } from "react-router-dom";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Profile.css";

export default function Profile() {
	return (
		<div className="container">
			<NavBar />
			<div className="profile">
				<SideNavBar />
				<div className="profile-content">
					<div className="title">
						<h2>Profile</h2>
					</div>
					<div className="profile-info">
						<div className="username-shoesize">
							<div className="profile-username">
								Username: <br /> Stephen Freeman
							</div>
							<div className="profile-shoesize">
								Shoe Size: <br /> 11.5 - 12
							</div>
						</div>
						<div className="email-password">
							<div className="profile-Email">
								Email: <br /> stephen.freeman.dev@gmail.com
							</div>
							<div className="profile-reset-password">
								Reset Password: <br />
								<Link to="">Reset Password</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
