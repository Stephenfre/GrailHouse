import React from "react";
import { Link } from "react-router-dom";

export default function AdidasLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/shoe/yeezy">
                    <li className="mobile-nav-li"> Yeezy </li>
                </Link>
                <Link to="/shoe/pharrell">
                    <li className="mobile-nav-li"> Pharrell </li>
                </Link>
                <Link to="/shoe/nmd">
                    <li className="mobile-nav-li"> NMD </li>
                </Link>
                <Link to="/shoe/ultraboost">
                    <li className="mobile-nav-li"> Ultra Boost </li>
                </Link>
                <Link to="/shoe/adidas">
                    <li className="mobile-nav-li"> All Adidas </li>
                </Link>
            </ul>
        </div>
    );
}
