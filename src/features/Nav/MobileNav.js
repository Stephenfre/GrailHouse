import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import NikeLinks from "./Links/NikeLinks";
import JordanLinks from "./Links/JordanLinks";
import AdidasLink from "./Links/AdidasLink";
import YeezyLinks from "./Links/YeezyLinks";
import MoreSneakLinks from "./Links/MoreSneakLinks";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    listItemText: {
        color: "black",
        fontSize: "24px",
    },
    sublinktext: {
        fontSize: "20px",
        color: "#afafaf",
    },
}));

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    overflow: auto;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 600px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
        top: -2;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 1.5rem;
        margin-top: 64px;
        transition: transform 0.3s ease-in-out;
        li {
            color: #afafaf;
        }
    }
    z-index: 9998;
`;

const StyledLinkBtn = styled(Link)`
    text-decoration: none;
    background: black;
    color: white;
    font-size: 18px;
    padding: 1rem;
    width: 89%;
    border-radius: 5px;
    border: none;
    text-align: center;

    &:hover {
        background: rgb(41, 41, 41);
        color: rgb(235, 235, 235);
        text-decoration: none;
    }
`;

const SubLinks = styled(Link)`
    text-decoration: none;
    color: #afafaf;
    font-size: 20px;
`;

const MobileNav = ({ open }) => {
    const classes = useStyles();
    const [openNike, setOpenNike] = useState(false);
    const [openJordan, setOpenJordan] = useState(false);
    const [openAdidas, setOpenAdidas] = useState(false);
    const [openNewBalance, setOpenNewBalance] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);

    const nikeHandle = () => {
        setOpenNike(!openNike);
    };

    const jordanHandle = () => {
        setOpenJordan(!openJordan);
    };

    const adidasHandle = () => {
        setOpenAdidas(!openAdidas);
    };

    const newBalanceHandle = () => {
        setOpenNewBalance(!openNewBalance);
    };

    const moreHandle = () => {
        setOpenMore(!openMore);
    };

    const accountHandle = () => {
        setOpenAccount(!openAccount);
    };

    return (
        <Ul open={open}>
            <Link to="/trendingshoes" style={{ margin: "0 0 1.5rem 1rem", color: "black", fontSize: "1.75rem" }}>
                Browser All
            </Link>
            <Divider />
            <List>
                <ListItem button onClick={nikeHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Nike" />
                    {openNike ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openNike} timeout="auto" unmountOnExit className={classes.height}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <NikeLinks />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={jordanHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Jordan" />
                    {openJordan ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openJordan} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <JordanLinks />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={adidasHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Adidas" />
                    {openAdidas ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAdidas} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <AdidasLink />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={newBalanceHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Yeezy" />
                    {openNewBalance ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openNewBalance} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <YeezyLinks />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={moreHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="More Sneakers" />
                    {openMore ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openMore} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <MoreSneakLinks />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={accountHandle}>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Account" />
                    {openAccount ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAccount} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <SubLinks to="/account/profile">
                                <ListItemText classes={{ primary: classes.sublinktext }} primary="My Account" />
                            </SubLinks>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <SubLinks to="/account/profile">
                                <ListItemText classes={{ primary: classes.sublinktext }} primary="My Closet" />
                            </SubLinks>
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <SubLinks to="/account/profile">
                                <ListItemText classes={{ primary: classes.sublinktext }} primary="Settings" />
                            </SubLinks>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <div className="sign-in-bttn" style={{ height: "25%" }}>
                <StyledLinkBtn to="/SignUp" className="trending-btn">
                    Sign Up / Sign In
                </StyledLinkBtn>
            </div>
        </Ul>
    );
};

export default MobileNav;
