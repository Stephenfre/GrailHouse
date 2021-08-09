import React from "react";
import "./SignForms.css";
import useInput from "./CustomHooks/useInput";
import { refreshTokenSetup } from "./refreshTokenSetup";

import { useGoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

import GrailHouse from "../../Svgs/GrailHouse.svg";
import GoogleIcon from "../../Svgs/GoogleIcon.svg";

const clientId = "891130030394-9nr1pjp32dhv4rohq062m57gd2b91sn6.apps.googleusercontent.com";

export default function SignIn() {
    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => value.includes("@"));

    // eslint-disable-next-line
    let formIsValid = false;

    if (enteredUsernameIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    const formSubmit = (e) => {
        e.preventDefault();

        if (!enteredUsernameIsValid || !enteredPasswordIsValid) {
            return;
        }

        resetUsernameInput();
        resetPasswordInput();
    };

    const usernameInputClasses = usernameInputHasError ? "sign-in-inputs invaild" : "sign-in-inputs";
    const passwordInputClasses = passwordInputHasError ? "sign-in-inputs invaild" : "sign-in-inputs";

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

    return (
        <div className="main-container">
            <div className="sign-in-container">
                <div className="sign-in-content">
                    <div className="sign-in-imgs">
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
                    <form className="sign-in-form" onSubmit={formSubmit}>
                        <div className="sign-in-inputs-container">
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
                            <button className="sign-in-btn" type="submit">
                                Sign In
                            </button>
                            <p>
                                Don't have an account?{" "}
                                <Link to="signup" className="sign-up-link">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
