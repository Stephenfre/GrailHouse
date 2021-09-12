import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { getLinkShoes } from "../../../actions";

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
function JordanLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list" style={{ height: "600px" }}>
            <ul className="all-links-list">
                <Links onClick={() => getLinkShoes("jordan1")} to="/shoe/jordan1">
                    <li className="mobile-nav-li"> Jordan 1 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan2")} to="/shoe/jordan2">
                    <li className="mobile-nav-li"> Jordan 2 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan3")} to="/shoe/jordan3">
                    <li className="mobile-nav-li"> Jordan 3 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan4")} to="/shoe/jordan4">
                    <li className="mobile-nav-li"> Jordan 4 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan5")} to="/shoe/jordan5">
                    <li className="mobile-nav-li"> Jordan 5 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan6")} to="/shoe/jordan6">
                    <li className="mobile-nav-li"> Jordan 6 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan7")} to="/shoe/jordan7">
                    <li className="mobile-nav-li"> Jordan 7 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan8")} to="/shoe/jordan8">
                    <li className="mobile-nav-li"> Jordan 8 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan9")} to="/shoe/jordan9">
                    <li className="mobile-nav-li"> Jordan 9 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan10")} to="/shoe/jordan10">
                    <li className="mobile-nav-li"> Jordan 10 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan11")} to="/shoe/jordan11">
                    <li className="mobile-nav-li"> Jordan 11 </li>
                </Links>
                <Links onClick={() => getLinkShoes("jordan")} to="/shoe/jordan">
                    <li className="mobile-nav-li"> All Jordans </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JordanLinks));
