import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import NavBar from "../Nav/NavBar";
import TrendingShoesCard from "./TrendingShoesCard";
import { getShoes } from "../../actions";

import "./TrendingShoes.css";
import TrendingBackground from "../../TrendingBackground.svg";
import GrailHouse from "../../GrailHouse.svg";
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

	if (props.gettingShoesError) {
		return <div>Error: {props.gettingShoesError}</div>;
	} else if (props.gettingShoes) {
		return (
			<div className="loader-container">
				<div className="loader">
					<div className="loader-logo">
						<img src={GrailHouse} alt="logo" />
					</div>
					<div className={classes.root}>
						<LinearProgress color="secondary" />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="app">
				<div className="container">
					<NavBar />
					<div className="cta-trending-img">
						<img src={TrendingBackground} alt="cta-logo" />
					</div>
					<div className="alltrending-content">
						<div className="title-alltrending">
							<h1>Results</h1>
						</div>
						<div className="alltrending-shoes-container">
							<div className="options"></div>
							<div className="alltrending-shoes-content">
								{props.trendingShoes.map((shoe, i) => (
									// console.log(shoe._id)
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
	}
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
