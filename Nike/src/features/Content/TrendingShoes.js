import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import PropTypes from "prop-types";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import Skeleton from "@material-ui/lab/Skeleton";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import NavBar from "../Nav/NavBar";
import TrendingShoesCard from "./TrendingShoesCard";
import { getShoes } from "../../actions";
import SkeletonCards from "./Skeletons/SkeletonCards";

import "./TrendingShoes.css";
import TrendingBackground from "../../Svgs/TrendingBackground.svg";
import GrailHouse from "../../Svgs/GrailHouse.svg";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

function TrendingShoes(props) {
	const classes = useStyles();
	const { getShoes } = props;

	useEffect(() => {
		getShoes();
	}, [getShoes]);

	// if (props.gettingShoesError) {
	// 	return <div>Error: {props.gettingShoesError}</div>;
	// } else if (props.gettingShoes) {
	// 	return (
	// 		<div className="app">
	// 			<div className="container">
	// 				<NavBar />
	// 				<div className="cta-trending-img">
	// 					<img src={TrendingBackground} alt="cta-logo" />
	// 				</div>
	// 				<div className="trending-content">
	// 					<div className="title-trending">
	// 						<h1>Results</h1>
	// 					</div>
	// 					<div className="trending-shoes-container">
	// 						<div className="options"></div>
	// 						<div className="trending-shoes-content">
	// 							hi
	// 							{!props.gettingShoes && [1, 2, 3, 4, 5].map((n) => <SkeletonShoes key={n} />)}
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// } else {
	return (
		<div className="app">
			<div className="container">
				<NavBar />
				<div className="cta-trending-img">
					<img src={TrendingBackground} alt="cta-logo" />
				</div>
				<div className="trending-content">
					<div className="title-trending">
						<h1>Results</h1>
					</div>
					<div className="trending-shoes-container">
						<div className="options"></div>
						<div className="trending-shoes-content">
							{props.gettingShoes && <SkeletonCards />}
							{!props.gettingShoes &&
								props.trendingShoes.map((shoe, i) => (
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
			</div>
		</div>
	);
	// }
}

const mapStateToProps = (state) => {
	return {
		trendingShoes: state.trendingShoes,
		gettingShoes: state.gettingShoes,
		gettingShoesError: state.gettingShoesError,
	};
};

const mapDispatchToPros = {
	getShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TrendingShoes));
