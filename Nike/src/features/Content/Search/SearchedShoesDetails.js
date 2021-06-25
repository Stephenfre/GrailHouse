import React from "react";
import "./Search.css";

export default function SearchedShoesDetails(props) {
	return (
		<div className="searched-shoes">
			<div className="searched-shoes-details">
				<div className="searched-shoes-details-img">
					<img src={props.thumbnail} alt="shoe pic" />
				</div>
				<div className="searched-shoes-details-wrap">
					<div className="searched-shoes-details-details">
						<p>{props.shoeName}</p>
						<div className="prices">
							<p>Lowest Price</p>
							<p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${props.lowestPrice}</p>
						</div>
						<div className="got-them"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
