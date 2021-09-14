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

function MoreSneakLinks({ getLinkShoes }) {
    return (
        <div className="shoe-links-mobile-list" style={{ height: "400px" }}>
            <ul className="all-links-list">
                <Links onClick={() => getLinkShoes("asics")} to="/shoe/asics">
                    <li className="mobile-nav-li"> Asics </li>
                </Links>
                <Links onClick={() => getLinkShoes("newbalance")} to="/shoe/newbalance">
                    <li className="mobile-nav-li"> New Balance </li>
                </Links>
                <Links onClick={() => getLinkShoes("reebok")} to="/shoe/reebok">
                    <li className="mobile-nav-li"> Reebok </li>
                </Links>
                <Links onClick={() => getLinkShoes("vans")} to="/shoe/vans">
                    <li className="mobile-nav-li"> Vans </li>
                </Links>
                <Links onClick={() => getLinkShoes("abathingape")} to="/shoe/abathingape">
                    <li className="mobile-nav-li"> A Bathing Ape </li>
                </Links>
                <Links onClick={() => getLinkShoes("converse")} to="/shoe/converse">
                    <li className="mobile-nav-li"> Converse </li>
                </Links>
                <Links onClick={() => getLinkShoes("puma")} to="/shoe/puma">
                    <li className="mobile-nav-li"> Puma </li>
                </Links>
                {/* <Links onClick={() => getLinkShoes("kyrie")} to="/shoe/kyrie">
                    <li className="mobile-nav-li"> All More Sneakers</li>
                </Links> */}
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
