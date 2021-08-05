import React, { useState } from "react";
import { withRouter, Link, useParams } from "react-router-dom";
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
import SearchPaginate from "./SearchPaginate";
import SideBar from "../SideBar/SideBar";
import TrendingShoesCard from "../TrendingShoes/TrendingShoesCard";

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 15px;
	text-align: center;
`;

function Search({ searchResults, searchShoes }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [shoesPerPage] = useState(16);
	const [isViewActive, setIsViewActive] = useState(false);

	// Get Current Shoes
	const indexofLastShoe = currentPage * shoesPerPage;
	const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
	const currentShoes = searchResults.slice(indexOfFirstShoe, indexofLastShoe);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	let { shoeName } = useParams();

	console.log(shoeName);

	return (
		<div className="main-container">
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
							<StyledLinks to={`/${shoeName}`}>{shoeName}</StyledLinks>
							<div>
								<h3>Search results for ""</h3>
							</div>
						</div>
						<div className="search-bar-details">
							<SearchResultsForm search={SearchResultsForm} />
							<Icon
								icon={gridIcon}
								onClick={() => setIsViewActive(!isViewActive)}
								style={
									isViewActive
										? { color: "CECECE", width: "2.5rem", height: "2.5rem" }
										: { color: "000000", width: "2.5rem", height: "2.5rem" }
								}
							/>
							<Icon
								icon={menuIcon}
								onClick={() => setIsViewActive(!isViewActive)}
								className={`menu-list-icon ${isViewActive ? "active" : "inactive"}`}
								style={
									isViewActive
										? { color: "000000", width: "2rem", height: "3rem" }
										: { color: "CECECE", width: "2rem", height: "3rem" }
								}
							/>
						</div>
					</div>
				</div>
				<div className="search-shoes-container">
					<div className="search-options">
						<h3>FILTER</h3>
						<SideBar />
					</div>
					<div className="search-shoes-content">
						{searchShoes && <SkeletonCards />}
						{!searchShoes &&
							currentShoes.map((shoe, i) => (
								<TrendingShoesCard
									key={i}
									id={shoe._id}
									thumbnail={shoe.thumbnail}
									shoeName={shoe.shoeName}
									lowestPrice={shoe.lowestPrice}
									styleId={shoe.styleID}
									type="trending"
									isViewActive={isViewActive}
								/>
							))}
					</div>
				</div>
			</div>
			<SearchPaginate shoesPerPage={shoesPerPage} totalShoes={searchResults.length} paginate={paginate} />
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