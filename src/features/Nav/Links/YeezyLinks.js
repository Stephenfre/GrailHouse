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

export default function YeezyLinks() {
    const classes = useStyles();

    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/yeezy350">
                    <li className="mobile-nav-li"> Yeezy Boost 350 </li>
                </Link>
                <Link to="/yeezy380">
                    <li className="mobile-nav-li"> Yeezy Boost 380 </li>
                </Link>
                <Link to="/yeezy500">
                    <li className="mobile-nav-li"> Yeezy Boost 500</li>
                </Link>
                <Link to="/yeezy700">
                    <li className="mobile-nav-li"> Yeezy Boost 700 </li>
                </Link>
                <Link to="/yeezy750">
                    <li className="mobile-nav-li"> Yeezy Boost 750 </li>
                </Link>
                <Link to="/airyeezy">
                    <li className="mobile-nav-li"> Air Yeezy</li>
                </Link>
                <Link to="/yeezy">
                    <li className="mobile-nav-li"> All Yeezy's </li>
                </Link>
            </ul>
        </div>
    );
}
