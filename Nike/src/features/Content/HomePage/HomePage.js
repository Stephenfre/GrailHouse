import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import questionMarkCircle from "@iconify/icons-majesticons/question-mark-circle";
import LogRocket from "logrocket";

import { getTenShoes } from "../../../actions";
import NavBar from "../../Nav/NavBar";
import Cta from "../../Cta/Cta";
import TopTenShoeCards from "./TopTenShoeCards";
import TopTenHoverBox from "../TopTenHoverBox";
import SkeletonCards from "../Skeletons/SkeletonCards";
import Footer from "../../Footer/Footer";
import "./HomePage.css";

LogRocket.init("c7rsta/grail-house");

LogRocket.identify("1891", {
	name: "Stephen Freeman Jr.",
	email: "setphen.freeman.dev@gmail.com",

	// Add your own custom user variables here, ie:
	subscriptionType: "pro",
});

const StyledLinks = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 17px;
	width: 100%;
	text-align: center;
	@media only screen and (max-width: 600px) {
		font-size: 15px;
	}
`;

function HomePage({ getTenShoes, shoes, gettingTenShoes }) {
	const [hover, setHover] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [shoesPerPage] = useState(8);

	// Get Current Shoes
	const indexofLastShoe = currentPage * shoesPerPage;
	const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
	const currentShoes = shoes.slice(indexOfFirstShoe, indexofLastShoe);

	useEffect(() => {
		getTenShoes();
	}, [getTenShoes]);

	return (
		<div className="container">
			<NavBar />
			<Cta />
			<div className="content">
				<div className="title-topten">
					<div className="title-hover-icon">
						<h1>Most Popular</h1>

						<Icon
							icon={questionMarkCircle}
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
						/>
						{hover && <TopTenHoverBox />}
					</div>
					<div className="topten-link-con">
						<StyledLinks to="trendingshoes" className="trending-btn">
							SEE ALL
						</StyledLinks>
					</div>
				</div>
				<div className="topten-shoes-container">
					{gettingTenShoes && <SkeletonCards />}
					{!gettingTenShoes &&
						currentShoes.map((shoe, i) => (
							<TopTenShoeCards
								key={i}
								id={shoe._id}
								thumbnail={shoe.thumbnail}
								shoeName={shoe.shoeName}
								lowestPrice={shoe.lowestPrice}
								type="shoes"
							/>
						))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		shoes: state.shoes,
		gettingTenShoes: state.gettingTenShoes,
		gettingTenShoesError: state.gettingTenShoesError,
	};
};

const mapDispatchToPros = {
	getTenShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(HomePage));
