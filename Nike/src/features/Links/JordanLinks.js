import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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

export default function JordanLinks({ shoeName }) {
	const classes = useStyles();

	// const clickHandler = (shoeName) => {
	// 	history.push(`/${shoeName}`);
	// };

	return (
		<div className={classes.root}>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan1`}>
					<ListItemText primary="Jordan 1" />
				</ListItemLink>
				<ListItemLink to={`/jordan2`}>
					<ListItemText primary="Jordan 2" />
				</ListItemLink>
				<ListItemLink to={`/jordan3`}>
					<ListItemText primary="Jordan 3" />
				</ListItemLink>
				<ListItemLink to={`/jordan4`}>
					<ListItemText primary="Jordan 4" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan5`}>
					<ListItemText primary="Jordan 5" />
				</ListItemLink>
				<ListItemLink to={`/jordan6`}>
					<ListItemText primary="Jordant 6" />
				</ListItemLink>
				<ListItemLink to={`/jordan7`}>
					<ListItemText primary="Jordan 7" />
				</ListItemLink>
				<ListItemLink to={`/jordan8`}>
					<ListItemText primary="Jordan 8" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan9`}>
					<ListItemText primary="Jordan 9" />
				</ListItemLink>
				<ListItemLink to={`/jordan10`}>
					<ListItemText primary="Jordan 10" />
				</ListItemLink>
				<ListItemLink to={`/jordan11`}>
					<ListItemText primary="Jordan 11" />
				</ListItemLink>
				<ListItemLink to={`/jordan12`}>
					<ListItemText primary="Jordan 12" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan13`}>
					<ListItemText primary="Jordan 13" />
				</ListItemLink>
				<ListItemLink to={`/jordan14`}>
					<ListItemText primary="Jordan 14" />
				</ListItemLink>
				<ListItemLink to={`/jordan15`}>
					<ListItemText primary="Jordan 15" />
				</ListItemLink>
				<ListItemLink to={`/jordan16`}>
					<ListItemText primary="Jordan 16" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan17`}>
					<ListItemText primary="Jordan 17" />
				</ListItemLink>
				<ListItemLink to={`/jordan18`}>
					<ListItemText primary="Jordan 18" />
				</ListItemLink>
				<ListItemLink to={`/jordan19`}>
					<ListItemText primary="Jordan 19" />
				</ListItemLink>
				<ListItemLink to={`/jordan20`}>
					<ListItemText primary="Jordan 20" />
				</ListItemLink>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<ListItemLink to={`/jordan21`}>
					<ListItemText primary="Jordan 21" />
				</ListItemLink>
				<ListItemLink to={`/jordan22`}>
					<ListItemText primary="Jordan 22" />
				</ListItemLink>
				<ListItemLink to={`/jordan23`}>
					<ListItemText primary="Jordan 23" />
				</ListItemLink>
				<ListItemLink to={`/jordan`}>
					<ListItemText primary="More Jordans" />
				</ListItemLink>
			</List>
		</div>
	);
}
