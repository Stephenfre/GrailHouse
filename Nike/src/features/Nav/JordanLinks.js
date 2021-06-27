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

export default function JordanLinks() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 1" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 2" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 3" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 4" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 5" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordant 6" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 7" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 8" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 9" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 10" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 11" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 12" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 13" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 14" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 15" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 16" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 17" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 18" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 19" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 20" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink href="">
					<ListItemText primary="Jordan 21" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 22" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="Jordan 23" />
				</ListItemLink>
				<ListItemLink href="">
					<ListItemText primary="More Jordans" />
				</ListItemLink>
			</List>
		</div>
	);
}
