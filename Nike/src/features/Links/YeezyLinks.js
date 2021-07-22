import React from "react";
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
	return <ListItem button component="a" {...props} />;
}

export default function YeezyLinks() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Yeezy Boost 350" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Yeezy Boost 380" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Yeezy Boost 500" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Yeezy Boost 700" />
				</ListItemLink>
			</List>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Yeezy Boost 750" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Nike Yeezy" />
				</ListItemLink>
			</List>
		</div>
	);
}
