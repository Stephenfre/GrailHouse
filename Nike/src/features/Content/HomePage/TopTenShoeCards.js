import React from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import { selectShoe } from "../../../actions";
import "./TopTenShoeCards.css";

const Button = styled.button`
	text-decoration: none;
	background: black;
	color: white;
	font-size: 10px;
	padding: 0rem;
	height: 70%;
	width: 100%;
	border-radius: 5px;
	border: none;
	text-align: center;
`;

function TopTenShoeCards(props) {
	let history = useHistory();

	const clickHandler = (id) => {
		props.selectShoe(id, "top ten");
		history.push(`/details/${id}`);
	};

	return (
		<div className="topten-shoes-card">
			<div className="topten-shoes" onClick={(e) => clickHandler(props.id)}>
				<div className="topten-shoes-img">
					<img src={props.thumbnail} alt="shoe pic" />
				</div>
				<div className="topten-shoes-wrap">
					<div className="topten-shoes-details">
						<p>{props.shoeName}</p>
						<div className="topten-shoes-prices">
							<p> Lowest Price</p>

							<p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${props.lowestPrice}</p>
						</div>
						<div className="add-to-closet">
							<Button>ADD TO CLOSET</Button>
						</div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TopTenShoeCards));
