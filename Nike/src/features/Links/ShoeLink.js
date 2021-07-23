import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

import NavBar from "../Nav/NavBar";
import SearchCta from "../Content/Search/SearchCta";
import SkeletonCards from "../Content/Skeletons/SkeletonCards";
// import SearchedShoesDetails from "../Content/Search/SearchedShoesDetails";
import TrendingShoesCard from "../Content/TrendingShoes/TrendingShoesCard";
import SearchResultsForm from "../Content/Search/SearchResultsForm";
import LinksPagination from "./LinksPagination";
import SideBar from "../Content/SideBar/SideBar";
import Footer from "../Footer/Footer";

// import "./ShoeLink.css";

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 15px;
	text-align: center;
`;

export default function ShoeLink() {
	const [searchedShoes, setSearchedShoes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [shoesPerPage] = useState(16);

	// Get Current Shoes
	const indexofLastShoe = currentPage * shoesPerPage;
	const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
	const currentShoes = searchedShoes.slice(indexOfFirstShoe, indexofLastShoe);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	let { shoeName } = useParams();

	let url = `http://localhost:5000/search/${shoeName}`;

	useEffect(() => {
		const fetchShoes = async () => {
			setIsLoading(true);
			await axios
				.get(url)
				.then((response) => {
					console.log(response);
					if (response.data) {
						console.log(response.data);
						setSearchedShoes(response.data);
						setIsLoading(false);
					} else {
						setTimeout(() => {
							console.log("waited", response.data);
							setSearchedShoes(response.data);
						}, 4000);
						setIsLoading(false);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchShoes();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="container">
			<NavBar />
			<SearchCta />
			<div className="trending-content">
				<div className="title-details">
					<div className="title-links-filters-view">
						<div className="search-links-results-details">
							<StyledLinks to="/">HOME</StyledLinks>
							{" / "}
							<StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
							{" / "}
							<StyledLinks to={`/${shoeName}`}>{shoeName}</StyledLinks>
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
						{isLoading && <SkeletonCards />}
						{!isLoading &&
							currentShoes.map((shoe, i) => (
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
			<LinksPagination shoesPerPage={shoesPerPage} totalShoes={searchedShoes.length} paginate={paginate} />
			<Footer />
		</div>
	);
}
