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

export default function MoreSneakLinks() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Asics" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="New Balance" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Reebok" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Vans" />
				</ListItemLink>
			</List>
			<List component="nike-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="A Bathing Ape" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Converse" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Puma" />
				</ListItemLink>
			</List>
		</div>
	);
}
