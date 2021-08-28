import React from "react";
import "./SignForms.css";
import useInput from "./CustomHooks/useInput";
import { refreshTokenSetup } from "./refreshTokenSetup";
import { useGoogleLogin } from "react-google-login";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

import GrailHouseBlack from "../../Svgs/GrailHouseBlack.svg";
import GoogleIcon from "../../Svgs/GoogleIcon.svg";
import { Icon } from "@iconify/react";
import arrowIosBackFill from "@iconify/icons-eva/arrow-ios-back-fill";

const clientId = "891130030394-9nr1pjp32dhv4rohq062m57gd2b91sn6.apps.googleusercontent.com";

function SignUp({ dispatch }) {
    let history = useHistory();

    // * Google Sign Up
    const onSuccess = (res) => {
        console.log("[Login Success} currentUser", res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("[Login Failed} res:", res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: "offline",
    });

    // * Sign Up form and validation
    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes(""));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => value.includes(""));

    // eslint-disable-next-line
    var formIsValid = false;

    if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    // const headers = {
    //     "Content-Type": "application/json",
    //     Accept: "application//json",
    // };

    const formSubmit = (e) => {
        e.preventDefault();

        dispatch(register(enteredUsername, enteredEmail, enteredPassword))
            .then(() => {
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
            });

        resetEmailInput();
        resetPasswordInput();
        resetUsernameInput();
    };

    const usernameInputClasses = usernameInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";
    const emailInputClasses = emailInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";
    const passwordInputClasses = passwordInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";

    return (
        <div className="main-container">
            <div className="back-button">
                <Icon icon={arrowIosBackFill} color="black" style={{ width: "2rem", height: "2rem" }} />
                <Link to="/" style={{ fontSize: "1.25rem", textDecoration: "none", color: "black" }}>
                    Go Back
                </Link>
            </div>
            <div className="sign-up-container">
                <div className="sign-up-content">
                    <div className="sign-up-imgs">
                        <img src={GrailHouseBlack} alt="logo" />
                    </div>
                    <button onClick={signIn} className="google-btn">
                        <img src={GoogleIcon} alt="google login" className="icon" style={{ width: "8%" }} />
                        <p className="google_btn_text" style={{ margin: "0 0 0 7px" }}>
                            Continue with Google
                        </p>
                    </button>
                    <div
                        style={{
                            width: "73%",
                            height: "20px",
                            borderBottom: "1px solid #c0c0c0",
                            textAlign: "center",
                            color: "#c0c0c0",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "15px",
                                padding: "0 10px",
                                position: "relative",
                                top: "8px",
                                background: "white",
                            }}
                        >
                            OR
                        </span>
                    </div>
                    <form className="sign-up-form" onSubmit={formSubmit}>
                        <div className="sign-up-inputs-container">
                            <div className={usernameInputClasses}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={usernameChangedHandler}
                                    onBlur={usernameBlurHandler}
                                    value={enteredUsername}
                                />
                                {usernameInputHasError && <p className="error-text">Must enter Username</p>}
                            </div>
                            <div className={emailInputClasses}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={emailChangedHandler}
                                    onBlur={emailBlurHandler}
                                    value={enteredEmail}
                                />
                                {emailInputHasError && <p className="error-text">Must enter a valid Email</p>}
                            </div>
                            <div className={passwordInputClasses}>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={passwordChangedHandler}
                                    onBlur={passwordBlurHandler}
                                    value={enteredPassword}
                                />
                                {passwordInputHasError && <p className="error-text">Must enter a vaild Password</p>}
                            </div>
                            <button disabled={!formIsValid} className="sign-up-btn" type="submit">
                                Sign Up
                            </button>
                            <p>
                                Don't have an account?{" "}
                                <Link to="/signin" className="sign-in-link">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
    };
};

export default withRouter(connect(mapStateToProps)(SignUp));
