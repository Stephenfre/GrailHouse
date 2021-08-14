import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Settings.css";
import Footer from "../../Footer/Footer";

export default function Profile() {
    return (
        <div className="main-container">
            <NavBar />
            <div className="settings">
                <SideNavBar />
                <div className="settings-content">
                    <div className="title">
                        <h2>Settings</h2>
                    </div>
                    <div className="coming-soon-alert" style={{ marginTop: "150px" }}>
                        <h1>Coming Soon!</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
