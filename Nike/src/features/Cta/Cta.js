import React from "react";
import "./Cta.css";
import GrailBackground from "../../GrailBackground.svg";

export default function Cta() {
	return (
		<div className="cta-img">
			<img src={GrailBackground} alt="cta-logo" />
		</div>
	);
}
