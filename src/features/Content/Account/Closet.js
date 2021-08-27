import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Closet.css";
import Footer from "../../Footer/Footer";

export default function Closet() {
    return (
        <div className="main-container">
            <NavBar />
            <div className="closet">
                <SideNavBar />
                <div className="closet-content">
                    <div className="title">
                        <h2>Closet</h2>
                    </div>
                    <div className="coming-soon-alert" style={{ marginTop: "150px" }}>
                        <h1>Coming Soon!</h1>
                        <p>Soon you'll be able to view all of your shoes that you've added to your closet.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
