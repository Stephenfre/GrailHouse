import React, { useEffect, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import JordanLinks from "./Links/JordanLinks";
import NikeLinks from "./Links/NikeLinks";
import AdidasLinks from "./Links/AdidasLink";
import YeezyLinks from "./Links/YeezyLinks";
import MoreSneakLinks from "./Links/MoreSneakLinks";
import Account from "../Content/Account/Account";
import Burger from "./Burger";
import SearchForm from "../Content/Search/SearchForm";
import "./NavBar.css";

import { Icon } from "@iconify/react";
import magnifyIcon from "@iconify/icons-mdi/magnify";
import circleX from "@iconify/icons-akar-icons/circle-x";
import GrailHouse from "../../Svgs/GrailHouse.svg";

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledLi = styled.li`
    float: left;
`;

const Dropbtn = styled(Link)`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
        color: white;
        text-decoration: none;
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 60%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 4;
    right: 270px;
`;

const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

const StyledLinkBtn = styled(Link)`
    text-decoration: none;
    background: white;
    color: black;
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

function NavBar(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    const menuClicked = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        // If the item is active (ie open) then listen for clicks
        if (isActive) {
            window.addEventListener("click", pageClickEvent);
        }

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive]);

    return (
        <div className="nav-container">
            <div className="nav-bar">
                {/* MOBILE HTML LINE 110 - 123 */}
                <div
                    className={`nav-icon-magnify-mobile ${!openSearch ? "active" : "inactive"}`}
                    onClick={() => setOpenSearch(!openSearch)}
                >
                    <Icon icon={magnifyIcon} style={{ height: "2.5rem", width: "2.2rem", color: "white" }} />
                </div>
                <div
                    className={`nav-icon-x-mobile ${openSearch ? "active" : "inactive"}`}
                    onClick={() => setOpenSearch(!openSearch)}
                >
                    <Icon icon={circleX} color="white" style={{ height: "2rem", width: "2rem", color: "white" }} />
                </div>
                <div className="search-bar-mobile">{openSearch && <SearchForm search={SearchForm} />}</div>
                <div className={`nav-logo ${!openSearch ? "" : "inactive"}`}>
                    <Link to="/">
                        <img src={GrailHouse} alt="logo" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <StyledUl className="nav-list-ul">
                        <DropDownLi className="nav-list-li">
                            <Dropbtn to={"/nike"}>Nike</Dropbtn>
                            <DropDownContent className="dropdown-content">
                                <NikeLinks />
                            </DropDownContent>
                        </DropDownLi>
                        <DropDownLi className="nav-list-li">
                            <Dropbtn to={"/jordan"}>Jordan</Dropbtn>
                            <DropDownContent className="dropdown-content">
                                <JordanLinks />
                            </DropDownContent>
                        </DropDownLi>
                        <DropDownLi className="nav-list-li">
                            <Dropbtn to={"/adidas"}>Adidas</Dropbtn>
                            <DropDownContent className="dropdown-content">
                                <AdidasLinks />
                            </DropDownContent>
                        </DropDownLi>
                        <DropDownLi className="nav-list-li">
                            <Dropbtn to={"/yeezy"}>Yeezy</Dropbtn>
                            <DropDownContent className="dropdown-content">
                                <YeezyLinks />
                            </DropDownContent>
                        </DropDownLi>
                        <DropDownLi className="nav-list-li">
                            <Dropbtn>More Sneakers</Dropbtn>
                            <DropDownContent className="dropdown-content">
                                <MoreSneakLinks />
                            </DropDownContent>
                        </DropDownLi>
                    </StyledUl>
                </div>
                <div className="nav-links-container-mobile">
                    <Burger />
                </div>
                <div className="other-content">
                    <StyledLinkBtn to="/signup" className={`trending-btn ${!props.isLoggedIn ? "" : "inactive"}`}>
                        Sign Up / Sign In
                    </StyledLinkBtn>
                    <Dropbtn onClick={menuClicked} className={`menu-trigger ${props.isLoggedIn ? "" : "inactive"}`}>
                        Account
                    </Dropbtn>
                    <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                        <Account />
                    </nav>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
    };
};

export default withRouter(connect(mapStateToProps)(NavBar));
