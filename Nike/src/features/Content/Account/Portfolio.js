import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Portfolio.css";
import Footer from "../../Footer/Footer";

export default function Profile() {
	return (
		<div className="main-container">
			<NavBar />
			<div className="portfolio">
				<SideNavBar />
				<div className="portfolio-content">
					<div>
						<h2>Portfolio</h2>
					</div>
					<h2>Coming Soon!</h2>
				</div>
			</div>
			<Footer />
		</div>
	);
}
