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

function YeezyLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list" style={{ height: "400px" }}>
            <ul className="all-links-list">
                <Links onClick={() => getLinkShoes("yeezy350")} to="/shoe/yeezy350">
                    <li className="mobile-nav-li"> Yeezy Boost 350 </li>
                </Links>
                <Links onClick={() => getLinkShoes("yeezy380")} to="/shoe/yeezy380">
                    <li className="mobile-nav-li"> Yeezy Boost 380 </li>
                </Links>
                <Links onClick={() => getLinkShoes("yeezy500")} to="/shoe/yeezy500">
                    <li className="mobile-nav-li"> Yeezy Boost 500</li>
                </Links>
                <Links onClick={() => getLinkShoes("yeezy700")} to="/shoe/yeezy700">
                    <li className="mobile-nav-li"> Yeezy Boost 700 </li>
                </Links>
                <Links onClick={() => getLinkShoes("yeezy750")} to="/shoe/yeezy750">
                    <li className="mobile-nav-li"> Yeezy Boost 750 </li>
                </Links>
                <Links onClick={() => getLinkShoes("airyeezy")} to="/shoe/airyeezy">
                    <li className="mobile-nav-li"> Air Yeezy</li>
                </Links>
                <Links onClick={() => getLinkShoes("yeezy")} to="/shoe/yeezy">
                    <li className="mobile-nav-li"> All Yeezy's </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(YeezyLinks));
