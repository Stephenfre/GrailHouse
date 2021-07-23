import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		height: "13rem",
		backgroundColor: theme.palette.background.paper,
	},
}));

function ListItemLink(props) {
	return <ListItem button component={Link} {...props} />;
}

export default function AdidasLinks() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/yeezy`}>
					<ListItemText primary="Yeezy" />
				</ListItemLink>
				<ListItemLink to={`/pharrell`}>
					<ListItemText primary="Pharrell" />
				</ListItemLink>
				<ListItemLink to={`/nmd`}>
					<ListItemText primary="NMD" />
				</ListItemLink>
				<ListItemLink to={`/ultraboost`}>
					<ListItemText primary="Ultra Boost" />
				</ListItemLink>
			</List>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/yeezy`}>
					<ListItemText primary="More Adidas" />
				</ListItemLink>
			</List>
		</div>
	);
}
