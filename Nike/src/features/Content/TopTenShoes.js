import React from "react";
import "./TopTenShoes.css";

export default function TopTenShoes(props) {
	return (
		<div className="trending-shoes">
			<div className="trending-shoes-img">
				<img src={props.thumbnail} alt="shoe pic" />
			</div>
			<div className="trending-shoes-wrap">
				<div className="trending-shoes-details">
					<p>{props.shoeName}</p>
					<div className="trending-prices">
						<p>Lowest Price</p>
						<p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${props.retailPrice}</p>
					</div>
					<div className="trending-got-them"></div>
				</div>
			</div>
		</div>
	);
}
