import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { getLinkShoes } from "../../../actions";

import "./Links.css";

const Links = styled(Link)`
    height: 100%;
    border-bottom: 2px solid #efefef;
    display: flex;
    align-items: center;
    padding-left: 10px;
    text-decoration: none;
    &:hover {
        background: #efefef;
    }
`;

function NikeLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list" style={{ height: "400px" }}>
            <ul className="all-links-list">
                <Links onClick={() => getLinkShoes("airforce")} to="/shoe/airforce">
                    <li className="mobile-nav-li"> Air Force 1 </li>
                </Links>
                <Links onClick={() => getLinkShoes("airmax")} to="/shoe/airmax">
                    <li className="mobile-nav-li"> Air Max </li>
                </Links>
                <Links onClick={() => getLinkShoes("dunks")} to="/shoe/dunks">
                    <li className="mobile-nav-li"> Dunks </li>
                </Links>
                <Links onClick={() => getLinkShoes("kobe")} to="/shoe/kobe">
                    <li className="mobile-nav-li"> Kobe </li>
                </Links>
                <Links onClick={() => getLinkShoes("leborn")} to="/shoe/leborn">
                    <li className="mobile-nav-li"> LeBron </li>
                </Links>
                <Links onClick={() => getLinkShoes("offwhite")} to="/shoe/offwhite">
                    <li className="mobile-nav-li"> Off-White </li>
                </Links>
                <Links onClick={() => getLinkShoes("kyrie")} to="/shoe/kyrie">
                    <li className="mobile-nav-li"> Kyrie </li>
                </Links>
                <Links onClick={() => getLinkShoes("nike")} to="/shoe/nike">
                    <li className="mobile-nav-li"> All Nikes </li>
                </Links>
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        linkShoeResults: state.linkShoeResults,
    };
};

const mapDispatchToProps = {
    getLinkShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NikeLinks));
