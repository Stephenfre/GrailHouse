import React from "react";
import "./SignForms.css";
import useInput from "./CustomHooks/useInput";
import { refreshTokenSetup } from "./refreshTokenSetup";

import { useGoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

import GrailHouse from "../../Svgs/GrailHouse.svg";
import GoogleIcon from "../../Svgs/GoogleIcon.svg";

const clientId = "891130030394-9nr1pjp32dhv4rohq062m57gd2b91sn6.apps.googleusercontent.com";

export default function SignUp() {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => value.includes("@"));

    // * Google Sign Up (Below)
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

    // * Google Sign Up (Above)

    var formIsValid = true;

    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid || !enteredPasswordIsValid) {
            return;
        }

        resetNameInput();
        resetEmailInput();
        resetPasswordInput();
    };

    const nameInputClasses = nameInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";
    const emailInputClasses = emailInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";
    const passwordInputClasses = passwordInputHasError ? "sign-up-inputs invaild" : "sign-up-inputs";

    return (
        <div className="main-container">
            <div className="sign-up-container">
                <div className="sign-up-content">
                    <div className="sign-up-imgs">
                        <img src={GrailHouse} alt="logo" />
                    </div>
                    <button onClick={signIn} className="google-btn">
                        <img
                            src={GoogleIcon}
                            alt="google login"
                            className="icon"
                            style={{ width: "5%", padding: "0 10px" }}
                        ></img>
                        <span className="google_btn_text">Continue with Google </span>
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
                            <div className={nameInputClasses}>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={nameChangedHandler}
                                    onBlur={nameBlurHandler}
                                    value={enteredName}
                                />
                                {nameInputHasError && <p className="error-text">Must enter Username</p>}
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
                            <button className="sign-up-btn" type="submit">
                                Sign Up
                            </button>
                            <p>
                                Don't have an account?{" "}
                                <Link to="signin" className="sign-in-link">
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
