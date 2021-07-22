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
import SearchedShoesDetails from "../Content/Search/SearchedShoesDetails";
import SearchResultsForm from "../Content/Search/SearchResultsForm";
import LinksPagination from "./LinksPagination";
import SideBar from "../Content/SideBar/SideBar";
import Footer from "../Footer/Footer";

import "./ShoeLink.css";

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
			<div className="shoelinks-content">
				<div className="shoelinks-title-details">
					<div
						style={{
							width: "75%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div className="shoelinks-links-results-details">
							<StyledLinks to="/">HOME</StyledLinks>
							{" / "}
							<StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
							{" / "}
							<StyledLinks to="">JORDAN 1</StyledLinks>
						</div>
						<div className="shoelinks-searchbar-details">
							<SearchResultsForm search={SearchResultsForm} />
							<Icon icon={gridIcon} style={{ width: "4rem", height: "3rem" }} />
							<Icon icon={menuIcon} style={{ color: "CECECE", width: "2.8rem", height: "3rem" }} />
						</div>
					</div>
				</div>
				<div className="shoelinks-shoes-container">
					<div className="shoelinks-options">
						<h3>FILTER</h3>
						<SideBar />
					</div>
					<div className="shoelinks-shoes-content">
						{isLoading && <SkeletonCards />}
						{!isLoading &&
							currentShoes.map((shoe, i) => (
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
			<LinksPagination shoesPerPage={shoesPerPage} totalShoes={searchedShoes.length} paginate={paginate} />
			<Footer />
		</div>
	);
}
