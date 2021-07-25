import React, { useEffect, useState } from "react";
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
import Pagination from "./Pagination/Pagination";
import SideBar from "../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import "./TrendingShoes.css";
import "../Search/Search.css";

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 15px;
	text-align: center;
`;

function TrendingShoes({ getShoes, shoes, gettingShoes }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [shoesPerPage] = useState(16);

	// Get Current Shoes
	const indexofLastShoe = currentPage * shoesPerPage;
	const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
	const currentShoes = shoes.slice(indexOfFirstShoe, indexofLastShoe);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	useEffect(() => {
		getShoes();
	}, [getShoes]);

	return (
		<div className="container">
			<NavBar />
			<div className="cta-trending-img">
				<img src={TrendingBackground} alt="cta-logo" />
			</div>
			<div className="trending-content">
				<div className="title-details">
					<div className="title-links-filters-view">
						<div className="search-links-results-details">
							<StyledLinks to="/">HOME</StyledLinks>
							{" / "}
							<StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
						</div>
						<div className="options-mobile">filter</div>
						<div className="search-bar-details">
							<SearchResultsForm search={SearchResultsForm} />
							<Icon icon={gridIcon} style={{ width: "2.5rem", height: "2.5rem" }} />
							<Icon icon={menuIcon} style={{ color: "CECECE", width: "2rem", height: "3rem" }} />
						</div>
					</div>
				</div>
				<div className="trending-shoes-container">
					<div className="options">
						<h3>FILTER</h3>
						<SideBar />
					</div>
					<div className="trending-shoes-content">
						{gettingShoes && <SkeletonCards />}
						{!gettingShoes &&
							currentShoes.map((shoe, i) => (
								<TrendingShoesCard
									key={i}
									id={shoe._id}
									thumbnail={shoe.thumbnail}
									shoeName={shoe.shoeName}
									lowestPrice={shoe.lowestPrice}
									type="trending"
								/>
							))}
					</div>
				</div>
			</div>
			<Pagination shoesPerPage={shoesPerPage} totalShoes={shoes.length} paginate={paginate} />
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		shoes: state.shoes,
		gettingShoes: state.gettingShoes,
		gettingShoesError: state.gettingShoesError,
	};
};

const mapDispatchToPros = {
	getShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TrendingShoes));
