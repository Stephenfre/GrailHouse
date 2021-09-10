import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getLinkShoes } from "../../../actions";

function JordanLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link onClick={() => getLinkShoes("jordan1")} to="/shoe/jordan1">
                    <li className="mobile-nav-li"> Jordan 1 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan2")} to="/shoe/jordan2">
                    <li className="mobile-nav-li"> Jordan 2 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan3")} to="/shoe/jordan3">
                    <li className="mobile-nav-li"> Jordan 3 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan4")} to="/shoe/jordan4">
                    <li className="mobile-nav-li"> Jordan 4 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan5")} to="/shoe/jordan5">
                    <li className="mobile-nav-li"> Jordan 5 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan6")} to="/shoe/jordan6">
                    <li className="mobile-nav-li"> Jordan 6 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan7")} to="/shoe/jordan7">
                    <li className="mobile-nav-li"> Jordan 7 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan8")} to="/shoe/jordan8">
                    <li className="mobile-nav-li"> Jordan 8 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan9")} to="/shoe/jordan9">
                    <li className="mobile-nav-li"> Jordan 9 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan10")} to="/shoe/jordan10">
                    <li className="mobile-nav-li"> Jordan 10 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan11")} to="/shoe/jordan11">
                    <li className="mobile-nav-li"> Jordan 11 </li>
                </Link>
                <Link onClick={() => getLinkShoes("jordan")} to="/shoe/jordan">
                    <li className="mobile-nav-li"> All Jordans </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JordanLinks));
