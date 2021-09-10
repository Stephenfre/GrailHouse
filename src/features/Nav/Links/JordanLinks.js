import React from "react";
import { Link } from "react-router-dom";

export default function JordanLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/shoe/jordan1">
                    <li className="mobile-nav-li"> Jordan 1 </li>
                </Link>
                <Link to="/shoe/jordan2">
                    <li className="mobile-nav-li"> Jordan 2 </li>
                </Link>
                <Link to="/shoe/jordan3">
                    <li className="mobile-nav-li"> Jordan 3 </li>
                </Link>
                <Link to="/shoe/jordan4">
                    <li className="mobile-nav-li"> Jordan 4 </li>
                </Link>
                <Link to="/shoe/jordan5">
                    <li className="mobile-nav-li"> Jordan 5 </li>
                </Link>
                <Link to="/shoe/jordan6">
                    <li className="mobile-nav-li"> Jordan 6 </li>
                </Link>
                <Link to="/shoe/jordan7">
                    <li className="mobile-nav-li"> Jordan 7 </li>
                </Link>
                <Link to="/shoe/jordan8">
                    <li className="mobile-nav-li"> Jordan 8 </li>
                </Link>
                <Link to="/shoe/jordan9">
                    <li className="mobile-nav-li"> Jordan 9 </li>
                </Link>
                <Link to="/shoe/jordan10">
                    <li className="mobile-nav-li"> Jordan 10 </li>
                </Link>
                <Link to="/shoe/jordan11">
                    <li className="mobile-nav-li"> Jordan 11 </li>
                </Link>
                <Link to="/shoe/jordan">
                    <li className="mobile-nav-li"> All Jordans </li>
                </Link>
            </ul>
        </div>
    );
}
