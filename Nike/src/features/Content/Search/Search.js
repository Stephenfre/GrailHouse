import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import SearchedShoesDetails from "./SearchedShoesDetails";
import NavBar from "../../Nav/NavBar";

function Search(props) {
	if (props.searchShoesError) {
		return <div>Error: {props.searchShoesError}</div>;
	} else if (props.searchShoes) {
		return <h1>is loading</h1>;
	} else {
		return (
			<div className="App">
				<div className="container">
					<NavBar />
					<div className="trending-shoes-container">
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
