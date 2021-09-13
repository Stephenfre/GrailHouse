import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Profile.css";
import Footer from "../../Footer/Footer";

function Profile({ user }) {
    const [updateActive, setUpdateActive] = useState(false);
    const [nameValue, setNameValue] = useState("");
    const [usernameValue, setUsernameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [shoeSizeValue, setShoeSizeValue] = useState("");

    const changeInfo = () => {
        setUpdateActive(!updateActive);
    };

    const handleUsernameInputChanges = (e) => {
        setUsernameValue(e.target.value);
    };
    const handleNameInputChanges = (e) => {
        setNameValue(e.target.value);
    };
    const handleEmailInputChanges = (e) => {
        setEmailValue(e.target.value);
    };
    const handleShoeSizeInputChanges = (e) => {
        setShoeSizeValue(e.target.value);
    };

    const resetInputField = () => {
        setUsernameValue("");
    };
    console.log("username", user.username);

    const currentUser = localStorage.getItem("id");

    if (!currentUser) {
        return <Redirect to="/" />;
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
                    <div className={`profile-info ${!updateActive ? "" : "inactive"}`}>
                        <div className="username-shoesize">
                            <div className="profile-username">
                                Username: <br /> {user.username}
                            </div>
                            <div className="profile-shoesize">
                                Shoe Size: <br /> {user.shoeSize}
                            </div>
                        </div>
                        <div className="email-password">
                            <div className="profile-Email">
                                Email: <br /> {user.email}
                            </div>
                            <div className="profile-reset-password">
                                Reset Password: <br />
                                <Link to="/">Reset Password</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`profile-info-forms ${!updateActive ? "inactive" : "active"}`}>
                        <div className="edit-container">
                            <form className="edit-form" noValidate autoComplete>
                                <input
                                    className="name-input"
                                    value={nameValue}
                                    onChange={handleNameInputChanges}
                                    type="text"
                                    placeholder={user.name}
                                />
                                <input
                                    className="username-input"
                                    value={usernameValue}
                                    onChange={handleUsernameInputChanges}
                                    type="text"
                                    placeholder={user.username}
                                />
                                <input
                                    className="email-input"
                                    value={emailValue}
                                    onChange={handleEmailInputChanges}
                                    type="text"
                                    placeholder={user.email}
                                />
                                <input
                                    className="shoeSize-input"
                                    value={shoeSizeValue}
                                    onChange={handleShoeSizeInputChanges}
                                    type="text"
                                    placeholder={user.shoeSize}
                                />
                                <div className="edit-buttons">
                                    <button className="edit-submit-button" type="submit">
                                        Submit
                                    </button>
                                    <button className="edit-cancel-button" onClick={changeInfo}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className={`edit-button ${!updateActive ? "" : "inactive"}`} onClick={changeInfo}>
                        Edit
                    </button>
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
