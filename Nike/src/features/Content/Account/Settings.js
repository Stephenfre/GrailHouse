import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Settings.css";

export default function Profile() {
	return (
		<div className="container">
			<NavBar />
			<div className="settings">
				<SideNavBar />
				<div className="settings-content">
					<div>
						<h2>Settings</h2>
					</div>
					<p>Dark Mode</p>
					<button>on/off</button>
				</div>
			</div>
		</div>
	);
}
