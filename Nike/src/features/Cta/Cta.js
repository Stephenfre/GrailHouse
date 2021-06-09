import React from "react";
import "./Cta.css";
import GrailBackground from "../../GrailBackground.svg";
import Search from "../Content/Search/Search";

export default function Cta() {
	return (
		<div className="cta-img">
			<img src={GrailBackground} alt="cta-logo" />
			{/* <Search /> */}
		</div>
	);
}
