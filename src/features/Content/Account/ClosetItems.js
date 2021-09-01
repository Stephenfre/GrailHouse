import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { removeFromCloset } from "../../../actions";
import { selectShoe } from "../../../actions";
import WornPopUp from "../PopUps/WornPopUp";

import "../TrendingShoes/TrendingShoesCard.css";

function ClosetItems({ isViewActive, selectShoe, type, thumbnail, shoeName, id, styleId, lowestPrice }) {
    const [isDeadstock, setIsDeadstock] = useState(false);

    const dispatch = useDispatch();

    const removeShoe = (closetShoeId) => {
        dispatch(removeFromCloset(closetShoeId));
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
                        <div className="trending-got-them active">
                            <button onClick={() => removeShoe(id)} className="trending-got-them-btn active"></button>
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
        isLoggedIn: state.isLoggedIn,
    };
};

const mapDispatchToPros = {
    selectShoe,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ClosetItems));
