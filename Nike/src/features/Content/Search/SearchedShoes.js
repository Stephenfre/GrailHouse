import React from "react";

export default function SearchedShoes(props) {
	return (
		<div className="alltrending">
			<div className="alltrending-shoes">
				<div className="alltrending-shoes-img">
					<img src={props.thumbnail} alt="shoe pic" />
				</div>
				<div className="alltrending-shoes-details">
					<p>{props.shoeName}</p>
					<p>${props.retailPrice}</p>
				</div>
			</div>
		</div>
	);
}
