import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import NavBar from "../../Nav/NavBar";
import DetailsSkeleton from "../Skeletons/DetailsSkeleton";
import Footer from "../../Footer/Footer";
import FlightClub from "../../../Svgs/Flightclub.svg";
import StockX from "../../../Svgs/StockX.svg";
import Goat from "../../../Svgs/Goat.svg";
import StadiumGoods from "../../../Svgs/StadiumGoods.svg";

import "./Details.css";

const StyledLinks = styled(Link)`
	padding: 5px;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
	color: white;
	background: black;
	width: 100%;
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
	const [isLoading, setIsLoading] = useState(true);
	const [detailsTabActive, setDetailsTabActive] = useState(false);
	let { styleId } = useParams();

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
			<div className="container">
				<NavBar />
				<DetailsSkeleton />
				<Footer />
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
										<hr className="hr0" />
										<hr className="hr1" />
										<hr className="hr2" />
										<hr className="hr3" />
										<div className="sizes">
											<ul className="logo-row-ul">
												<li className="prices-logo-li">
													<h4 style={{ fontSize: "18px", fontWeight: "700" }}>Sizes</h4>
												</li>

												<li className="prices-logo-li">
													<a href="https://www.flightclub.com/">
														<img src={FlightClub} alt="flight club logo" />
													</a>
												</li>

												<li className="prices-logo-li">
													<a href="https://www.stockx.com/">
														<img src={StockX} alt="Stock X logo" />
													</a>
												</li>

												<li className="prices-logo-li">
													<a href="https://www.goat.com/">
														<img src={Goat} alt="Goat logo" />
													</a>
												</li>

												<li className="prices-logo-li">
													<a href="https://www.stadiumgoods.com/">
														<img src={StadiumGoods} alt="Stadium Goods logo" />
													</a>
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">7</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["7"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["7"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["7"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["7"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">8</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["8"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["8"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["8"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["8"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">9</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["9"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["9"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["9"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["9"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">10</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["10"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["10"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["10"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["10"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">11</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["11"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["11"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["11"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["11"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">12</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["12"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["12"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["12"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["12"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">12</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["12"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["12"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["12"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["12"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">13</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["13"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["13"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["13"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["13"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">14</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["14"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["14"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["14"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["14"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">15</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["15"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["15"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["15"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["15"]}
												</li>
											</ul>
											<ul className="size-row-ul">
												<li className="prices-li">16</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.flightClub["16"]}
												</li>

												<li className="prices-li">${shoeDetails.resellPrices.stockX["16"]}</li>

												<li className="prices-li">${shoeDetails.resellPrices.goat["16"]}</li>

												<li className="prices-li">
													${shoeDetails.resellPrices.stadiumGoods["16"]}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<span
								style={
									!detailsTabActive
										? { fontSize: "9px", margin: "19px 210px 0 0" }
										: { fontSize: "9px", margin: "49px 210px 0 0" }
								}
							>
								{shoeDetails.styleID} | {shoeDetails.colorway} | {shoeDetails.releaseDate}
							</span>
							<div
								className="add-btn"
								style={{
									width: "70%",
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
