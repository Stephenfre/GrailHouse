import React from "react";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Portfolio.css";
import Footer from "../../Footer/Footer";
import { Icon } from "@iconify/react";
import pieChart2 from "@iconify/icons-fontisto/pie-chart-2";

export default function Profile() {
    return (
        <div className="main-container">
            <NavBar />
            <div className="portfolio">
                <SideNavBar />
                <div className="portfolio-content">
                    <div className="title">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="pie-charts">
                        <Icon icon={pieChart2} style={{ width: "25rem", height: "30rem" }} color="#ddd" />
                        <Icon icon={pieChart2} style={{ width: "25rem", height: "30rem" }} color="#ddd" />
                    </div>
                    <div className="coming-soon-alert">
                        <h1>Coming Soon!</h1>
                        <p>Soon you'll be able to see your collection of shoes in a portfolio view.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
