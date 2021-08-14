import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import { selectShoe } from "../../../actions";
import WornPopUp from "../PopUps/WornPopUp";
// import ConditionPopUp from "../PopUps/ConditionPopUp";
import "./TopTenShoeCards.css";

const Button = styled.button`
    text-decoration: none;
    background: black;
    color: white;
    font-size: 10px;
    padding: 0rem;
    height: 35px;
    width: 100px;
    border-radius: 5px;
    border: none;
    text-align: center;
`;

function TopTenShoeCards({ selectShoe, type, thumbnail, shoeName, id, styleId, lowestPrice }) {
    const [isActive, setIsActive] = useState(false);
    const [isDeadstock, setIsDeadstock] = useState(false);
    let history = useHistory();

    const gotThemHandler = () => {
        setIsActive(!isActive);
    };

    const conditonHandler = () => {
        setIsDeadstock(!isDeadstock);
    };

    const clickHandler = (id) => {
        selectShoe(id, type);
        history.push(`/details/${id}/${styleId}`);
    };

    return (
        <div className="topten-shoes-card">
            <div className="topten-shoes">
                <div className="topten-shoes-img" onClick={(e) => clickHandler(id)}>
                    <img src={thumbnail} alt="shoe pic" />
                </div>
                <div className="topten-shoes-wrap">
                    <div className="topten-shoes-details">
                        <p>{shoeName}</p>
                        <div className="topten-shoes-prices">
                            <p> Lowest Price</p>

                            <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${lowestPrice}</p>
                        </div>
                        <div className={`add-to-closet ${isActive ? "inactive " : "active"}`}>
                            <Button onClick={gotThemHandler}>ADD TO CLOSET</Button>
                        </div>
                        <div className={`topten-got-them ${isActive ? "active" : "inactive "}`}>
                            <button
                                onClick={gotThemHandler}
                                className={`topten-got-them-btn ${isActive ? "active" : "inactive "}`}
                            ></button>
                            <button className="condition-btn" onClick={conditonHandler}>
                                *Deadstock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`popup-box-container ${isDeadstock ? "active" : "inactive "}`}>
                <WornPopUp />
            </div>
            {/* <ConditionPopUp /> */}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shoes,
    };
};

const mapDispatchToPros = {
    selectShoe,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TopTenShoeCards));
