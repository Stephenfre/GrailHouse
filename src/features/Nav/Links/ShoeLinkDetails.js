import React from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { selectShoe } from "../../../actions";

// import "./Link.css";

function ShoeLinkDetails(props) {
	let history = useHistory();

	const clickHandler = (id) => {
		props.selectShoe(id, props.type);
		history.push(`details/${id}`);
	};
	return (
		<div className="link-shoes" onClick={(e) => clickHandler(props.id)}>
			<div className="link-shoes-details">
				<div className="link-shoes-details-img">
					<img src={props.thumbnail} alt="shoe pic" />
				</div>
				<div className="link-shoes-details-wrap">
					<div className="link-shoes-details-details">
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

const mapStateToProps = (state) => {
	return {
		shoes: state.shoes,
	};
};

const mapDispatchToPros = {
	selectShoe,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ShoeLinkDetails));