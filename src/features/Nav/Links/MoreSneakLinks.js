import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getLinkShoes } from "../../../actions";

function MoreSneakLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list">
            <ul component="all-links-list" style={{ width: "50%" }}>
                <Link onClick={() => getLinkShoes("asics")} to="/shoe/asics">
                    <li className="mobile-nav-li"> Asics </li>
                </Link>
                <Link onClick={() => getLinkShoes("newbalance")} to="/shoe/newbalance">
                    <li className="mobile-nav-li"> New Balance </li>
                </Link>
                <Link onClick={() => getLinkShoes("reebok")} to="/shoe/reebok">
                    <li className="mobile-nav-li"> Reebok </li>
                </Link>
                <Link onClick={() => getLinkShoes("vans")} to="/shoe/vans">
                    <li className="mobile-nav-li"> Vans </li>
                </Link>
                <Link onClick={() => getLinkShoes("abathingape")} to="/shoe/abathingape">
                    <li className="mobile-nav-li"> A Bathing Ape </li>
                </Link>
                <Link onClick={() => getLinkShoes("converse")} to="/shoe/converse">
                    <li className="mobile-nav-li"> Converse </li>
                </Link>
                <Link onClick={() => getLinkShoes("puma")} to="/shoe/puma">
                    <li className="mobile-nav-li"> Puma </li>
                </Link>
                <Link onClick={() => getLinkShoes("kyrie")} to="/shoe/kyrie">
                    <li className="mobile-nav-li"> All More Sneakers</li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoreSneakLinks));
