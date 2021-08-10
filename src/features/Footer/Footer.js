import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Footer.css";

const Links = styled(Link)`
    text-decoration: none;
    color: #757575;
`;

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="trending-shoes-footer">
                    <ul>
                        <li style={{ paddingTop: "0", fontWeight: "bold", color: "white" }}>Trending Shoes</li>
                        <li>
                            <Links to="/airforce">Nike Air Force 1</Links>
                        </li>
                        <li>
                            <Links to="/dunks">Nike Dunks</Links>
                        </li>
                        <li>
                            <Links to="/jordan1">Jordan 1</Links>
                        </li>
                        <li>
                            <Links to="offwhite">Off-White Sneakers</Links>
                        </li>
                    </ul>
                </div>
                <div className="about-us-footer" style={{ height: "140px", margin: "0" }}>
                    <ul>
                        <li style={{ paddingTop: "10px", fontWeight: "bold", color: "white" }}>About Us</li>
                        <li>
                            <Links>Our Story</Links>
                        </li>
                        <li>
                            <Links>Instagram</Links>
                        </li>
                    </ul>
                </div>
                <div className="account-footer" style={{ height: "140px", margin: "0" }}>
                    <ul>
                        <li style={{ paddingTop: "10px", fontWeight: "bold", color: "white" }}>Account</li>
                        <li>
                            <Links to="/account/profile">My Account</Links>
                        </li>
                        <li>
                            <Links to="/account/mycloset">My Closet</Links>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <h3>&#169; 2021 Grail House Phoenix LLC. All Rights Reserved</h3>
            </div>
        </div>
    );
}
