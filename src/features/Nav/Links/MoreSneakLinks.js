import React from "react";
import { Link } from "react-router-dom";

export default function MoreSneakLinks() {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link to="/asics">
                    <li className="mobile-nav-li"> Asics </li>
                </Link>
                <Link to="/newbalance">
                    <li className="mobile-nav-li"> New Balance </li>
                </Link>
                <Link to="/reebok">
                    <li className="mobile-nav-li"> Reebok </li>
                </Link>
                <Link to="/vans">
                    <li className="mobile-nav-li"> Vans </li>
                </Link>
                <Link to="/abathingape">
                    <li className="mobile-nav-li"> A Bathing Ape </li>
                </Link>
                <Link to="/converse">
                    <li className="mobile-nav-li"> Converse </li>
                </Link>
                <Link to="/puma">
                    <li className="mobile-nav-li"> Puma </li>
                </Link>
                <Link to="/kyrie">
                    <li className="mobile-nav-li"> All More Sneakers</li>
                </Link>
            </ul>
        </div>
    );
}
