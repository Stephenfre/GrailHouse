import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../../Nav/NavBar";
import Footer from "../../Footer/Footer";

import "./DetailPage.css";

const StyledLinks = styled(Link)`
	padding: 5px;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
	color: white;
	background: black;
	width: 22%;
	padding: 1rem;
	border-radius: 5px;
	border: none;
	&:hover {
		background: rgb(41, 41, 41);
		color: rgb(235, 235, 235);
	}
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`;

export default function Details(props) {
	const [shoeDetails, setShoeDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [detailsTabActive, setDetailsTabActive] = useState(false);
	// const [pricesTabActive, setPricesTabActive] = useState(false);

	// const tabClick = () => {
	// 	setTabActive(tabActive);
	// };

	let { styleId } = useParams();

	// console.log("prices", shoeDetails.resellPrices.flightClub);

	//* FETCH HERE
	useEffect(() => {
		axios
			.get(`http://localhost:5000/id/${styleId}/prices`)
			.then((response) => {
				console.log("", response);
				setIsLoading(true);
				if (response.data) {
					console.log(response.data);
					setShoeDetails(response.data);
				} else {
					setTimeout(() => {
						console.log("waited", response.data);
						setShoeDetails(response.data);
					}, 10000);
					setIsLoading(true);
				}
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, [styleId]);

	if (shoeDetails.length < 1) {
		return (
			<div>
				<h1>loading...</h1>
			</div>
		);
	} else {
		return (
			<div className="container">
				<NavBar />
				<div className="shoe-details-container" style={{ marginTop: "200px" }}>
					<div className="shoe-details-content">
						<div className="shoe-img">
							<img src={shoeDetails.thumbnail} alt="shoe pic" />
						</div>
						<div className="shoe-details">
							<h2>{shoeDetails.shoeName}</h2>
							<div className="shoe-img-mobile">
								<img src={shoeDetails.thumbnail} alt="shoe pic" />
							</div>
							<div className="details-prices-tabs">
								<div className="tabs">
									<button
										onClick={() => setDetailsTabActive(!detailsTabActive)}
										className={`details-tab ${!detailsTabActive ? "active" : ""}`}
									>
										<h5>DETAILS</h5>
									</button>
									<button
										onClick={() => setDetailsTabActive(!detailsTabActive)}
										className={`prices-tab ${detailsTabActive ? "active" : ""}`}
									>
										<h5>PRICES</h5>
									</button>
								</div>

								<div className="details-box">
									<div className={`details-description ${!detailsTabActive ? "active" : "inactive"}`}>
										<p>{shoeDetails.description}</p>
									</div>
									<div className={`prices-prices ${detailsTabActive ? "active" : "inactive"}`}>
										{shoeDetails.resellPrices.flightClub}
									</div>
								</div>
							</div>
							<span style={{ fontSize: "9px", margin: "30px 207px 0 0" }}>
								{shoeDetails.styleID} {shoeDetails.colorway} {shoeDetails.releaseDate}
							</span>
							<div
								className="add-btn"
								style={{
									width: "87%",
									display: "flex",
									justifyContent: "flex-end",
									alignItems: "center",
								}}
							>
								<StyledLinks>Add to closet</StyledLinks>
							</div>
						</div>
					</div>
					{/* <SimilarShoes /> */}
				</div>
				<Footer />
			</div>
		);
	}
}
