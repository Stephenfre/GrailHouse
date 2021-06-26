import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import questionMarkCircle from "@iconify/icons-majesticons/question-mark-circle";

import NavBar from "../Nav/NavBar";
import TrendingShoesCard from "./TrendingShoesCard";
import { getShoes } from "../../actions";
import SkeletonCards from "./Skeletons/SkeletonCards";
import "./TrendingShoes.css";
import TrendingBackground from "../../Svgs/TrendingBackground.svg";

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
						<div>
							<Icon icon={questionMarkCircle} />
						</div>
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
