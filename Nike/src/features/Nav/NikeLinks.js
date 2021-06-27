import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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

export default function NikeLinks() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Air Force 1" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Air Max" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Dunks" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Kobe" />
				</ListItemLink>
			</List>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="LeBron" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Off-White" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Kyrie" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="More Nikes" />
				</ListItemLink>
			</List>
		</div>
	);
}
