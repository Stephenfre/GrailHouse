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
						<div className="add-to-closet">
							<Button onClick={(e) => e.stopPropagation}>ADD TO CLOSET</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TopTenShoes));
