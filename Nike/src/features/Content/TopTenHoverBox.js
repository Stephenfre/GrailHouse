import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "./HomePage.css";

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
		<div className={classes.root} style={{ width: "55%", height: "75%", zIndex: 9999, marginLeft: "5px" }}>
			<Paper
				elevation={2}
				style={{
					width: "100%",
					height: "100%",
					fontWeight: "600",
					padding: "5px 0 0 0",
					margin: "0",
					textAlign: "center",
				}}
			>
				<p style={{ fontSize: "13px" }}>
					The 'Most Popular' products are a curated collection of our best selling items.
				</p>
			</Paper>
		</div>
	);
}
