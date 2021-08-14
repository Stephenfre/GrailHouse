import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinks = styled(Link)`
    padding: 10px 0px 0px 0px;
    text-decoration: none;
    font-size: 15px;
    color: black;

    &:hover {
        color: black;
        text-decoration: none;
    }
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

export default function Account() {
    return (
        <div className="account-content-container">
            <div className="account-content">
                <StyledLinks to="/account/profile">My Account</StyledLinks>
                <StyledLinks to="/account/closet">My Closet</StyledLinks>
                <StyledLinks to="/settings">Settings</StyledLinks>
            </div>
            <div className="sign-in-bttn">
                <StyledLinkBtn to="/SignUp" className="trending-btn">
                    Sign Up / Sign In
                </StyledLinkBtn>
            </div>
        </div>
    );
}
