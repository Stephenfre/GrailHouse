import React from "react";
import { Link } from "react-router-dom";

import "./SideNavBar.css";

export default function myAccount() {
	return (
		<div className="side-nav">
			<div className="my-account-sidebar-nav">
				<ul>
					<li>
						<Link to="/account/profile">Profile</Link>
					</li>
					<li>
						<Link to="/account/closet">Closet</Link>
					</li>
					<li>
						<Link to="/account/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/account/settings">Settings</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
