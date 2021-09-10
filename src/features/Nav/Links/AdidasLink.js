import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getLinkShoes } from "../../../actions";

function AdidasLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link onClick={() => getLinkShoes("yeezy")} to="/shoe/yeezy">
                    <li className="mobile-nav-li"> Yeezy </li>
                </Link>
                <Link onClick={() => getLinkShoes("pharrell")} to="/shoe/pharrell">
                    <li className="mobile-nav-li"> Pharrell </li>
                </Link>
                <Link onClick={() => getLinkShoes("nmd")} to="/shoe/nmd">
                    <li className="mobile-nav-li"> NMD </li>
                </Link>
                <Link onClick={() => getLinkShoes("ultraboost")} to="/shoe/ultraboost">
                    <li className="mobile-nav-li"> Ultra Boost </li>
                </Link>
                <Link onClick={() => getLinkShoes("adidas")} to="/shoe/adidas">
                    <li className="mobile-nav-li"> All Adidas </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdidasLinks));
