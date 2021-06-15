import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../Nav/NavBar";
import Cta from "../Cta/Cta";
import TopTenShoeCards from "./TopTenShoeCards";
import { getTenShoes } from "../../actions";

import "./HomePage.css";
import GrailHouse from "../../GrailHouse.svg";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledLinks = styled(Link)`
	text-decoration: none;
	background: black;
	color: white;
	font-size: 18px;
	padding: 1rem;
	width: 11%;
	border-radius: 5px;
	border: none;
	text-align: center;
	&:hover {
		background: rgb(41, 41, 41);
		color: rgb(235, 235, 235);
	}
`;

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		width: "100%",
// 		"& > * + *": {
// 			marginTop: theme.spacing(2),
// 		},
// 	},
// }));

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getTenShoes();
	}

	render() {
		// const {classes} = this.props;

		if (this.props.gettingTenShoesError) {
			return <div>Error: {this.props.gettingTenShoesError}</div>;
		} else if (this.props.gettingTenShoes) {
			return (
				<div className="loader-container">
					<div className="loader">
						<div className="loader-logo">
							<img src={GrailHouse} alt="logo" />
						</div>
						{/* <div className={classes.root}>
                            <LinearProgress color="secondary" />
                        </div> */}
					</div>
				</div>
			);
		} else {
			return (
				<div className="app">
					<div className="container">
						<NavBar />
						<Cta />
						<div className="content">
							<div className="title-trending">
								<h1>Trending</h1>
							</div>
							<div className="trending-shoes-container">
								{this.props.shoes.map((shoe, i) => (
									<TopTenShoeCards
										key={i}
										id={shoe._id}
										thumbnail={shoe.thumbnail}
										shoeName={shoe.shoeName}
										lowestPrice={shoe.lowestPrice}
									/>
								))}
							</div>
							<div
								style={{
									width: "100%",
									height: "6rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<StyledLinks to="trendingshoes" className="trending-btn">
									All Trending Shoes
								</StyledLinks>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
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
