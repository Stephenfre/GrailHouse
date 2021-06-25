import React from "react";
import "./SearchCta.css";
import SearchCta from "../../../Svgs/SearchCta.svg";
export default function Cta() {
	return (
		<div className="cta-img">
			<img src={SearchCta} alt="cta-logo" />
		</div>
	);
}
