import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import NavBar from "../Nav/NavBar";
import SimilarShoes from "./SimilarShoes";
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
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography style={{ lineHeight: "2" }}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: "90%",
		height: "60%",
	},
}));

function DetailPage(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className="app">
			<div
				className="container"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<NavBar />
				<div className="shoe-details-content">
					<div className="shoe-img">
						<img src={props.selectedShoe.thumbnail} alt="shoe pic" />
					</div>
					<div className="shoe-details">
						<h2>{props.selectedShoe.shoeName}</h2>
						<div className={classes.root}>
							<AppBar position="static" color="default">
								<Tabs
									value={value}
									onChange={handleChange}
									indicatorColor="primary"
									textColor="primary"
									variant="fullWidth"
									aria-label="full width tabs example"
								>
									<Tab label="Details" {...a11yProps(0)} />
									<Tab label="Prices" {...a11yProps(1)} />
								</Tabs>
							</AppBar>
							<SwipeableViews
								axis={theme.direction === "rtl" ? "x-reverse" : "x"}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<TabPanel value={value} index={0} dir={theme.direction}>
									{props.selectedShoe.description}
								</TabPanel>
								<TabPanel value={value} index={1} dir={theme.direction}>
									{props.selectedShoe.lowestResellPrice.stockX}
								</TabPanel>
							</SwipeableViews>
						</div>
						<span style={{ width: "83%", fontSize: "9px" }}>
							{props.selectedShoe.styleID} {props.selectedShoe.colorway} {props.selectedShoe.releaseDate}
						</span>
						<div
							className="add-btn"
							style={{ width: "87%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}
						>
							<StyledLinks>Add to closet</StyledLinks>
						</div>
					</div>
				</div>
				<SimilarShoes />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		selectedShoe: state.selectedShoe,
	};
};

const mapDispatchToPros = {};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailPage));
