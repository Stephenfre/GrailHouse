import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Closet.css";
import Footer from "../../Footer/Footer";

export default function Profile() {
	return (
		<div className="container">
			<NavBar />
			<div className="closet">
				<SideNavBar />
				<div className="closet-content">
					<div>
						<h2>Closet</h2>
					</div>
					<h2>Coming Soon!</h2>
				</div>
			</div>
			<Footer />
		</div>
	);
}
