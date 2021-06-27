import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "./HomePage/HomePage.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
}));

export default function TopTenHoverBox() {
	const classes = useStyles();

	return (
		<div
			className={classes.root}
			style={{
				width: "20%",
				height: "13%",
				zIndex: 9999,
				position: "absolute",
				bottom: "20.5rem",
				left: "25rem",
			}}
		>
			<Paper
				elevation={2}
				style={{
					width: "100%",
					height: "100%",
					// fontWeight: "600",
					margin: "0",
					textAlign: "center",
				}}
			>
				<p style={{ fontSize: "21px", padding: "19px" }}>
					The 'Most Popular' products are a curated collection of our best selling items.
				</p>
			</Paper>
		</div>
	);
}
