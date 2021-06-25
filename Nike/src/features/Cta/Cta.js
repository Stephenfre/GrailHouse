import React from "react";
import "./Cta.css";
import GrailBackground from "../../GrailBackground.svg";
import SearchForm from "../Content/Search/SearchForm";

export default function Cta() {
	return (
		<div className="cta-img">
			<img src={GrailBackground} alt="cta-logo" />
			<div className="search-bar">
				<SearchForm search={SearchForm} />
			</div>
		</div>
	);
}
