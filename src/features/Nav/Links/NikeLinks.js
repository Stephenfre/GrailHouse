import React from "react";
import { Link } from "react-router-dom";

import "./Links.css";

export default function NikeLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/shoe/airforce">
                    <li className="mobile-nav-li"> Air Force 1 </li>
                </Link>
                <Link to="/shoe/airmax">
                    <li className="mobile-nav-li"> Air Max </li>
                </Link>
                <Link to="/shoe/dunks">
                    <li className="mobile-nav-li"> Dunks </li>
                </Link>
                <Link to="/shoe/kobe">
                    <li className="mobile-nav-li"> Kobe </li>
                </Link>
                <Link to="/shoe/leborn">
                    <li className="mobile-nav-li"> LeBron </li>
                </Link>
                <Link to="/shoe/offwhite">
                    <li className="mobile-nav-li"> Off-White </li>
                </Link>
                <Link to="/shoe/kyrie">
                    <li className="mobile-nav-li"> Kyrie </li>
                </Link>
                <Link to="/shoe/nike">
                    <li className="mobile-nav-li"> All Nikes </li>
                </Link>
            </ul>
        </div>
    );
}
