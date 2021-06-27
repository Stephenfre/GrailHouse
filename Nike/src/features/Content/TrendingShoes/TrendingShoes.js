import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

import { getShoes } from "../../../actions";
import NavBar from "../../Nav/NavBar";
import SkeletonCards from "../Skeletons/SkeletonCards";
import TrendingShoesCard from "./TrendingShoesCard";
import TrendingBackground from "../../../Svgs/TrendingBackground.svg";
import SearchResultsForm from "../Search/SearchResultsForm";
import "./TrendingShoes.css";
import "../Search/Search.css";

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 15px;
	text-align: center;
`;

function TrendingShoes(props) {
	const { getShoes } = props;

	useEffect(() => {
		getShoes();
	}, [getShoes]);

	return (
		<div className="app">
			<div className="container">
				<NavBar />
				<div className="cta-trending-img">
					<img src={TrendingBackground} alt="cta-logo" />
				</div>
				<div className="trending-content">
					<div className="title-details" style={{ width: "84%" }}>
						<div
							style={{
								width: "75%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "1.5rem",
							}}
						>
							<div className="search-links-results-details">
								<StyledLinks to="/">HOME</StyledLinks>
								{" / "}
								<StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
							</div>
							<div className="search-bar-details">
								<SearchResultsForm search={SearchResultsForm} />
								<Icon icon={gridIcon} style={{ width: "2.5rem", height: "2.5rem" }} />
								<Icon icon={menuIcon} style={{ color: "CECECE", width: "2rem", height: "3rem" }} />
							</div>
						</div>
					</div>
					<div className="trending-shoes-container">
						<div className="options"></div>
						<div className="trending-shoes-content">
							{props.gettingShoes && <SkeletonCards />}
							{!props.gettingShoes &&
								props.trendingShoes.map((shoe, i) => (
									<TrendingShoesCard
										key={i}
										id={shoe._id}
										thumbnail={shoe.thumbnail}
										shoeName={shoe.shoeName}
										lowestPrice={shoe.lowestPrice}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		trendingShoes: state.trendingShoes,
		gettingShoes: state.gettingShoes,
		gettingShoesError: state.gettingShoesError,
	};
};

const mapDispatchToPros = {
	getShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TrendingShoes));
