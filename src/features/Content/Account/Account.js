import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../../actions/auth";
import { connect, useDispatch } from "react-redux";

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

function Account() {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(logout(window.location.reload()));
    };

    return (
        <div className="account-content-container">
            <div className="account-content">
                <StyledLinks to="/account/profile">My Account</StyledLinks>
                <StyledLinks to="/account/closet">My Closet</StyledLinks>
                <StyledLinks to="/settings">Settings</StyledLinks>
            </div>
            <div className="sign-in-bttn">
                {/* <StyledLinkBtn to="/signup" className="trending-btn">
                    Sign Up / Sign In
                </StyledLinkBtn> */}
                <StyledLinkBtn onClick={logOut} to="/" className="trending-btn">
                    Logout
                </StyledLinkBtn>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default withRouter(connect(mapStateToProps)(Account));
