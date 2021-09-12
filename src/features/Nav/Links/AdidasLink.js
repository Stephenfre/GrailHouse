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

function AdidasLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list" style={{ height: "300px" }}>
            <ul className="all-links-list">
                <Links onClick={() => getLinkShoes("yeezy")} to="/shoe/yeezy">
                    <li className="mobile-nav-li"> Yeezy </li>
                </Links>
                <Links onClick={() => getLinkShoes("pharrell")} to="/shoe/pharrell">
                    <li className="mobile-nav-li"> Pharrell </li>
                </Links>
                <Links onClick={() => getLinkShoes("nmd")} to="/shoe/nmd">
                    <li className="mobile-nav-li"> NMD </li>
                </Links>
                <Links onClick={() => getLinkShoes("ultraboost")} to="/shoe/ultraboost">
                    <li className="mobile-nav-li"> Ultra Boost </li>
                </Links>
                <Links onClick={() => getLinkShoes("adidas")} to="/shoe/adidas">
                    <li className="mobile-nav-li"> All Adidas </li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdidasLinks));
