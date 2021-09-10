import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getLinkShoes } from "../../../actions";

function YeezyLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link onClick={() => getLinkShoes("yeezy350")} to="/shoe/yeezy350">
                    <li className="mobile-nav-li"> Yeezy Boost 350 </li>
                </Link>
                <Link onClick={() => getLinkShoes("yeezy380")} to="/shoe/yeezy380">
                    <li className="mobile-nav-li"> Yeezy Boost 380 </li>
                </Link>
                <Link onClick={() => getLinkShoes("yeezy500")} to="/shoe/yeezy500">
                    <li className="mobile-nav-li"> Yeezy Boost 500</li>
                </Link>
                <Link onClick={() => getLinkShoes("yeezy700")} to="/shoe/yeezy700">
                    <li className="mobile-nav-li"> Yeezy Boost 700 </li>
                </Link>
                <Link onClick={() => getLinkShoes("yeezy750")} to="/shoe/yeezy750">
                    <li className="mobile-nav-li"> Yeezy Boost 750 </li>
                </Link>
                <Link onClick={() => getLinkShoes("airyeezy")} to="/shoe/airyeezy">
                    <li className="mobile-nav-li"> Air Yeezy</li>
                </Link>
                <Link onClick={() => getLinkShoes("yeezy")} to="/shoe/yeezy">
                    <li className="mobile-nav-li"> All Yeezy's </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(YeezyLinks));
