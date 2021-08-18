import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import { selectShoe } from "../../../actions";
import WornPopUp from "../PopUps/WornPopUp";

import "./TrendingShoesCard.css";

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

function TrendingShoesCard({ isViewActive, selectShoe, type, thumbnail, shoeName, id, styleId, lowestPrice }) {
    const [isActive, setIsActive] = useState(false);
    const [isDeadstock, setIsDeadstock] = useState(false);
    const gotThemHandler = () => {
        setIsActive(!isActive);
    };

    const conditonHandler = () => {
        setIsDeadstock(!isDeadstock);
    };

    let history = useHistory();

    const clickHandler = (id) => {
        selectShoe(id, "trending");
        history.push(`/trendingshoes/details/id/${styleId}`);
    };

    return (
        <div className={"trending" + (isViewActive ? " active" : "")}>
            <div className={"trending-shoes" + (isViewActive ? " active" : "")}>
                <div
                    className={"trending-shoes-img" + (isViewActive ? " active" : "")}
                    onClick={(e) => clickHandler(id)}
                >
                    <img src={thumbnail} alt="shoe pic" />
                </div>
                <div className={"trending-shoes-wrap" + (isViewActive ? " active" : "")}>
                    <div className="trending-shoes-details">
                        <p>{shoeName}</p>
                        <div className={"trending-prices" + (isViewActive ? " active" : "")}>
                            <p>Lowest Price</p>
                            <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${lowestPrice}</p>
                        </div>
                        <div className={`trending-add-to-closet ${isActive ? "inactive " : "active"}`}>
                            <Button onClick={gotThemHandler}>ADD TO CLOSET</Button>
                        </div>
                        <div className={`trending-got-them ${isActive ? "active" : "inactive "}`}>
                            <button
                                onClick={gotThemHandler}
                                className={`trending-got-them-btn ${isActive ? "active" : "inactive "}`}
                            ></button>
                            <button className="trending-condition-btn" onClick={conditonHandler}>
                                *Deadstock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`trending-popup-box-container ${isDeadstock ? "active" : "inactive "}`}>
                <WornPopUp />
            </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TrendingShoesCard));
