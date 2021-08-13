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

export default function NikeLinks() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nike-links-list" style={{ width: "50%" }}>
                <ListItemLink to={"/airforce"}>
                    <ListItemText primary="Air Force 1" />
                </ListItemLink>
                <ListItemLink to={"/airmax"}>
                    <ListItemText primary="Air Max" />
                </ListItemLink>
                <ListItemLink to={"/dunks"}>
                    <ListItemText primary="Dunks" />
                </ListItemLink>
                <ListItemLink to={"/kobe"}>
                    <ListItemText primary="Kobe" />
                </ListItemLink>
            </List>
            <List component="nike-links-list" style={{ width: "50%" }}>
                <ListItemLink to={"/leborn"}>
                    <ListItemText primary="LeBron" />
                </ListItemLink>
                <ListItemLink to={"/offwhite"}>
                    <ListItemText primary="Off-White" />
                </ListItemLink>
                <ListItemLink to={"/kyrie"}>
                    <ListItemText primary="Kyrie" />
                </ListItemLink>
                <ListItemLink to={"/nike"}>
                    <ListItemText primary="More Nikes" />
                </ListItemLink>
            </List>
        </div>
    );
}
