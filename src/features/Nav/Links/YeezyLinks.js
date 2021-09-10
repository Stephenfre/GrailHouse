import React from "react";
import { Link } from "react-router-dom";

export default function YeezyLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/shoe/yeezy350">
                    <li className="mobile-nav-li"> Yeezy Boost 350 </li>
                </Link>
                <Link to="/shoe/yeezy380">
                    <li className="mobile-nav-li"> Yeezy Boost 380 </li>
                </Link>
                <Link to="/shoe/yeezy500">
                    <li className="mobile-nav-li"> Yeezy Boost 500</li>
                </Link>
                <Link to="/shoe/yeezy700">
                    <li className="mobile-nav-li"> Yeezy Boost 700 </li>
                </Link>
                <Link to="/shoe/yeezy750">
                    <li className="mobile-nav-li"> Yeezy Boost 750 </li>
                </Link>
                <Link to="/shoe/airyeezy">
                    <li className="mobile-nav-li"> Air Yeezy</li>
                </Link>
                <Link to="/shoe/yeezy">
                    <li className="mobile-nav-li"> All Yeezy's </li>
                </Link>
            </ul>
        </div>
    );
}
