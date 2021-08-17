import React from "react";
import { Link } from "react-router-dom";

export default function JordanLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/jordan1">
                    <li className="mobile-nav-li"> Jordan 1 </li>
                </Link>
                <Link to="/jordan2">
                    <li className="mobile-nav-li"> Jordan 2 </li>
                </Link>
                <Link to="/jordan3">
                    <li className="mobile-nav-li"> Jordan 3 </li>
                </Link>
                <Link to="/jordan4">
                    <li className="mobile-nav-li"> Jordan 4 </li>
                </Link>
                <Link to="/jordan5">
                    <li className="mobile-nav-li"> Jordan 5 </li>
                </Link>
                <Link to="/jordan6">
                    <li className="mobile-nav-li"> Jordan 6 </li>
                </Link>
                <Link to="/jordan7">
                    <li className="mobile-nav-li"> Jordan 7 </li>
                </Link>
                <Link to="/jordan8">
                    <li className="mobile-nav-li"> Jordan 8 </li>
                </Link>
                <Link to="/jordan9">
                    <li className="mobile-nav-li"> Jordan 9 </li>
                </Link>
                <Link to="/jordan10">
                    <li className="mobile-nav-li"> Jordan 10 </li>
                </Link>
                <Link to="/jordan11">
                    <li className="mobile-nav-li"> Jordan 11 </li>
                </Link>
                <Link to="/jordan">
                    <li className="mobile-nav-li"> All Jordans </li>
                </Link>
            </ul>
        </div>
    );
}
