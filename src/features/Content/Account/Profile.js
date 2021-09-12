import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Profile.css";
import Footer from "../../Footer/Footer";

function Profile({ user }) {
    const getStorageData = JSON.parse(localStorage.getItem("persist:root"));

    const User = JSON.parse(getStorageData.user);

    const currentUser = localStorage.getItem("id");

    const userName = User.name;
    const userEmail = User.email;

    if (!currentUser) {
        return <Redirect to="/signin" />;
    }

    return (
        <React.Fragment>
            <NavBar />
            <div className="profile">
                <SideNavBar />
                <div className="profile-content">
                    <div className="title">
                        <h2>Profile</h2>
                    </div>
                    <div className="profile-info">
                        <div className="username-shoesize">
                            <div className="profile-username">
                                Username: <br /> {userName}
                            </div>
                            <div className="profile-shoesize">
                                Shoe Size: <br /> 11.5 - 12
                            </div>
                        </div>
                        <div className="email-password">
                            <div className="profile-Email">
                                Email: <br /> {userEmail}
                            </div>
                            <div className="profile-reset-password">
                                Reset Password: <br />
                                <Link to="/">Reset Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default withRouter(connect(mapStateToProps)(Profile));
