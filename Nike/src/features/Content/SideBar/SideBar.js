import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		position: "relative",
		overflow: "auto",
		maxHeight: 300,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	listSection: {
		backgroundColor: "inherit",
	},
	ul: {
		backgroundColor: "inherit",
		padding: 0,
	},
}));

export default function SideBar() {
	const classes = useStyles();
	const [openBrand, setOpenBrand] = useState(false);
	const [openModel, setOpenModel] = useState(false);
	const [openYear, setOpenYear] = useState(false);
	const [checked, setChecked] = useState([]);
	const [brandList] = useState([
		{
			id: 1,
			brand: "Nike",
		},
		{
			id: 2,
			brand: "Jordan",
		},
		{
			id: 3,
			brand: "Adidas",
		},
		{
			id: 4,
			brand: "Asics",
		},
		{
			id: 5,
			brand: "Other Sneakers",
		},
	]);

	const handleClickBrand = () => {
		setOpenBrand(!openBrand);
	};
	const handleClickModel = () => {
		setOpenModel(!openModel);
	};
	const handleClickYear = () => {
		setOpenYear(!openYear);
	};

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<div>
			<List>
				<ListItem button onClick={handleClickBrand}>
					<ListItemText primary="BRAND" />
					{openBrand ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openBrand} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<List className={classes.root}>
								{brandList.map((value) => {
									const labelId = `checkbox-list-label-${value}`;

									return (
										<ListItem
											key={value}
											role={undefined}
											dense
											button
											onClick={handleToggle(value)}
										>
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={checked.indexOf(value) !== -1}
													tabIndex={-1}
													disableRipple
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</ListItemIcon>
											<ListItemText id={labelId} primary={`${value.brand}`} />
										</ListItem>
									);
								})}
							</List>
						</ListItem>
					</List>
				</Collapse>
			</List>

			<List>
				<ListItem button onClick={handleClickModel}>
					<ListItemText primary="MODEL" />
					{openModel ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openModel} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<List className={classes.root}>
								{brandList.map((value) => {
									const labelId = `checkbox-list-label-${value}`;

									return (
										<ListItem
											key={value}
											role={undefined}
											dense
											button
											onClick={handleToggle(value)}
										>
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={checked.indexOf(value) !== -1}
													tabIndex={-1}
													disableRipple
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</ListItemIcon>
											<ListItemText id={labelId} primary={`${value.brand}`} />
										</ListItem>
									);
								})}
							</List>
						</ListItem>
					</List>
				</Collapse>
			</List>

			<List>
				<ListItem button onClick={handleClickYear}>
					<ListItemText primary="YEAR" />
					{openYear ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={openYear} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem button className={classes.nested}>
							<List className={classes.root}>
								{[0, 1, 2, 3].map((value) => {
									const labelId = `checkbox-list-label-${value}`;

									return (
										<ListItem
											key={value}
											role={undefined}
											dense
											button
											onClick={handleToggle(value)}
										>
											<ListItemIcon>
												<Checkbox
													edge="start"
													checked={checked.indexOf(value) !== -1}
													tabIndex={-1}
													disableRipple
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</ListItemIcon>
											<ListItemText id={labelId} primary={`Line item ${value + 1}`} />
										</ListItem>
									);
								})}
							</List>
						</ListItem>
					</List>
				</Collapse>
			</List>
		</div>
	);
}
