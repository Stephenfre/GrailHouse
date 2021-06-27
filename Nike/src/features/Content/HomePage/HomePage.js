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
`;

function HomePage(props) {
	const [hover, setHover] = useState(false);

	const { getTenShoes } = props;

	useEffect(() => {
		getTenShoes();
	}, [getTenShoes]);

	return (
		<div className="app">
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
						<div
							style={{
								width: "10%",
								height: "6rem",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<StyledLinks to="trendingshoes" className="trending-btn">
								SEE ALL
							</StyledLinks>
						</div>
					</div>
					<div className="topten-shoes-container">
						{props.gettingTenShoes && <SkeletonCards />}
						{!props.gettingTenShoes &&
							props.shoes.map((shoe, i) => (
								<TopTenShoeCards
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
