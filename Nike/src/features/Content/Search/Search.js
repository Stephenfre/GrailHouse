import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import { Icon, InlineIcon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

import NavBar from "../../Nav/NavBar";
import SearchCta from "./SearchCta";
import SearchResultsForm from "./SearchResultsForm";
import SearchedShoesDetails from "./SearchedShoesDetails";
import "./Search.css";

function Search(props) {
	if (props.searchShoesError) {
		return <div>Error: {props.searchShoesError}</div>;
	} else if (props.searchShoes) {
		return (
			<div className="app">
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
									<Link to="/">HOME</Link>
									{" / "}
									<Link to="/trendingshoes">SNEAKERS</Link>
									{" / "}
									<Link to="">JORDAN 1</Link>
									<div>
										<h3>Search resuls for ""</h3>
									</div>
								</div>
								<div className="search-bar-details">
									<SearchResultsForm search={SearchResultsForm} />
									<Icon icon={gridIcon} style={{ width: "4rem", height: "3rem" }} />
									<Icon
										icon={menuIcon}
										style={{ color: "CECECE", width: "2.8rem", height: "3rem" }}
									/>
								</div>
							</div>
						</div>
						<div className="search-shoes-container">
							<div className="search-options"></div>
							<div className="search-shoes-content">
								{/* {props.searchResults.map((shoe, i) => (
									<SearchedShoesDetails
										key={i}
										id={shoe._id}
										thumbnail={shoe.thumbnail}
										shoeName={shoe.shoeName}
										lowestPrice={shoe.lowestPrice}
									/>
								))} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="app">
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
									<Link to="/">HOME</Link>
									{" / "}
									<Link to="/trendingshoes">SNEAKERS</Link>
									{" / "}
									<Link to="">JORDAN 1</Link>
									<div>
										<h3>Search resuls for ""</h3>
									</div>
								</div>
								<div className="search-bar-details">
									<SearchResultsForm search={SearchResultsForm} />
									<Icon icon={gridIcon} style={{ width: "4rem", height: "3rem" }} />
									<Icon
										icon={menuIcon}
										style={{ color: "CECECE", width: "2.8rem", height: "3rem" }}
									/>
								</div>
							</div>
						</div>
						<div className="search-shoes-container">
							<div className="search-options"></div>
							<div className="search-shoes-content">
								{props.searchResults.map((shoe, i) => (
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
				</div>
			</div>
		);
	}
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
