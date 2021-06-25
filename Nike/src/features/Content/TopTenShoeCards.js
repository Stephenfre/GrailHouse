import React from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { selectShoe } from "../../actions";

import "./TopTenShoeCards.css";

function TopTenShoes(props) {
	let history = useHistory();

	const clickHandler = (id) => {
		props.selectShoe(id);
		history.push(`/details/${id}`);
	};

	return (
		<div className="trending-shoes-card">
			<div className="trending-shoes" onClick={(e) => clickHandler(props.id)}>
				<div className="trending-shoes-img">
					<img src={props.thumbnail} alt="shoe pic" />
				</div>
				<div className="trending-shoes-wrap">
					<div className="trending-shoes-details">
						<p>{props.shoeName}</p>
						<div className="trending-prices">
							<p> Lowest Price</p>

							<p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${props.lowestPrice}</p>
						</div>
						<div className="trending-got-them"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		shoes: state.shoes,
	};
};

const mapDispatchToPros = {
	selectShoe,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TopTenShoes));
