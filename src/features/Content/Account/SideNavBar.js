import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-carbon/user";
import doorOpen from "@iconify/icons-bi/door-open";
import pieChartOutlined from "@iconify/icons-ant-design/pie-chart-outlined";
import gearIcon from "@iconify/icons-bi/gear";

import "./SideNavBar.css";

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    &:hover {
        background: white;
        text-decoration: none;
        color: black;
    }
    &.${activeClassName} {
        color: white;
        background: black;
    }
`;

function myAccount({ user }) {
    return (
        <div className="side-nav">
            <div className="my-account-sidebar-nav">
                <div className="name">
                    <h1>{user.name}</h1>
                </div>
                <ul>
                    <li>
                        <StyledLink to="/account/profile">
                            <Icon icon={userIcon} style={{ height: "2rem", width: "4rem" }} />
                            <div className="account-details">
                                <h4>Profile</h4>
                                <p>Learn what's unique to you.</p>
                            </div>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/account/closet">
                            <Icon icon={doorOpen} style={{ height: "2rem", width: "4rem" }} />
                            <div className="account-details">
                                <h4>Closet</h4>
                                <p>Learn what's unique to you.</p>
                            </div>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/account/portfolio">
                            <Icon icon={pieChartOutlined} style={{ height: "2rem", width: "4rem" }} />
                            <div className="account-details">
                                <h4>Portfolio</h4>
                                <p>Learn what's unique to you.</p>
                            </div>
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/account/settings">
                            <Icon icon={gearIcon} style={{ height: "2rem", width: "4rem" }} />
                            <div className="account-details">
                                <h4>Settings</h4>
                                <p>Learn what's unique to you.</p>
                            </div>
                        </StyledLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default withRouter(connect(mapStateToProps)(myAccount));
