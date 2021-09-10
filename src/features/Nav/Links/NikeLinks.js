import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getLinkShoes } from "../../../actions";

import "./Links.css";

function NikeLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link onClick={() => getLinkShoes("airforce")} to="/shoe/airforce">
                    <li className="mobile-nav-li"> Air Force 1 </li>
                </Link>
                <Link onClick={() => getLinkShoes("airmax")} to="/shoe/airmax">
                    <li className="mobile-nav-li"> Air Max </li>
                </Link>
                <Link onClick={() => getLinkShoes("dunks")} to="/shoe/dunks">
                    <li className="mobile-nav-li"> Dunks </li>
                </Link>
                <Link onClick={() => getLinkShoes("kobe")} to="/shoe/kobe">
                    <li className="mobile-nav-li"> Kobe </li>
                </Link>
                <Link onClick={() => getLinkShoes("leborn")} to="/shoe/leborn">
                    <li className="mobile-nav-li"> LeBron </li>
                </Link>
                <Link onClick={() => getLinkShoes("offwhite")} to="/shoe/offwhite">
                    <li className="mobile-nav-li"> Off-White </li>
                </Link>
                <Link onClick={() => getLinkShoes("kyrie")} to="/shoe/kyrie">
                    <li className="mobile-nav-li"> Kyrie </li>
                </Link>
                <Link onClick={() => getLinkShoes("nike")} to="/shoe/nike">
                    <li className="mobile-nav-li"> All Nikes </li>
                </Link>
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
