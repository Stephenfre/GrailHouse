import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

import NavBar from "../../Nav/NavBar";
import SearchCta from "./SearchCta";
import SearchResultsForm from "./SearchResultsForm";
import SearchedShoesDetails from "./SearchedShoesDetails";
import SkeletonCards from "../Skeletons/SkeletonCards";
import Footer from "../../Footer/Footer";
import "./Search.css";

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 15px;
	text-align: center;
`;

function Search(props) {
	return (
		<div className="container">
			<NavBar />
			<SearchCta />
			<div className="search-content">
				<div className="title-details">
					<div
						style={{
							width: "75%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div className="search-links-results-details">
							<StyledLinks to="/">HOME</StyledLinks>
							{" / "}
							<StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
							{" / "}
							<StyledLinks to="">JORDAN 1</StyledLinks>
							<div>
								<h3>Search resuls for ""</h3>
							</div>
						</div>
						<div className="search-bar-details">
							<SearchResultsForm search={SearchResultsForm} />
							<Icon icon={gridIcon} style={{ width: "4rem", height: "3rem" }} />
							<Icon icon={menuIcon} style={{ color: "CECECE", width: "2.8rem", height: "3rem" }} />
						</div>
					</div>
				</div>
				<div className="search-shoes-container">
					<div className="search-options"></div>
					<div className="search-shoes-content">
						{props.searchShoes && <SkeletonCards />}
						{!props.searchShoes &&
							props.searchResults.map((shoe, i) => (
								<SearchedShoesDetails
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
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		searchShoes: state.searchShoes,
		searchShoesError: state.searchShoesError,
		searchResults: state.searchResults,
	};
};

const mapDispatchToProps = (state) => {
	return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
