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

// function Link(props) {
// 	return <ListItem button component="a" {...props} />;
// }

export default function JordanLinks({ shoeName }) {
	const classes = useStyles();

	// const clickHandler = (shoeName) => {
	// 	history.push(`/${shoeName}`);
	// };

	return (
		<div className={classes.root}>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link to={`/jordan1`}>
					<ListItemText primary="Jordan 1" />
				</Link>
				<Link ink to={`/jordan2`}>
					<ListItemText primary="Jordan 2" />
				</Link>
				<Link ink to={`/jordan3`}>
					<ListItemText primary="Jordan 3" />
				</Link>
				<Link ink to={`/jordan4`}>
					<ListItemText primary="Jordan 4" />
				</Link>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link ink to={`/jordan5`}>
					<ListItemText primary="Jordan 5" />
				</Link>
				<Link ink to={`/jordan6`}>
					<ListItemText primary="Jordant 6" />
				</Link>
				<Link ink to={`/jordan7`}>
					<ListItemText primary="Jordan 7" />
				</Link>
				<Link ink to={`/jordan8`}>
					<ListItemText primary="Jordan 8" />
				</Link>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link ink to={`/jordan9`}>
					<ListItemText primary="Jordan 9" />
				</Link>
				<Link ink to={`/jordan10`}>
					<ListItemText primary="Jordan 10" />
				</Link>
				<Link ink to={`/jordan11`}>
					<ListItemText primary="Jordan 11" />
				</Link>
				<Link ink to={`/jordan12`}>
					<ListItemText primary="Jordan 12" />
				</Link>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link ink to={`/jordan13`}>
					<ListItemText primary="Jordan 13" />
				</Link>
				<Link ink to={`/jordan14`}>
					<ListItemText primary="Jordan 14" />
				</Link>
				<Link ink to={`/jordan15`}>
					<ListItemText primary="Jordan 15" />
				</Link>
				<Link ink to={`/jordan16`}>
					<ListItemText primary="Jordan 16" />
				</Link>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link ink to={`/jordan17`}>
					<ListItemText primary="Jordan 17" />
				</Link>
				<Link ink to={`/jordan18`}>
					<ListItemText primary="Jordan 18" />
				</Link>
				<Link ink to={`/jordan19`}>
					<ListItemText primary="Jordan 19" />
				</Link>
				<Link ink to={`/jordan20`}>
					<ListItemText primary="Jordan 20" />
				</Link>
			</List>
			<List component="jordan-links-list" style={{ width: "50%" }}>
				<Link ink to={`/jordan21`}>
					<ListItemText primary="Jordan 21" />
				</Link>
				<Link ink to={`/jordan22`}>
					<ListItemText primary="Jordan 22" />
				</Link>
				<Link ink to={`/jordan23`}>
					<ListItemText primary="Jordan 23" />
				</Link>
				<Link ink to={`/jordan`}>
					<ListItemText primary="More Jordans" />
				</Link>
			</List>
		</div>
	);
}
