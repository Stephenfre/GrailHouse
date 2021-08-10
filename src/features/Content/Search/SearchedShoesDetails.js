import React from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

import { selectShoe } from "../../../actions";

import "./Search.css";

function SearchedShoesDetails({ isViewActive, selectShoe, type, thumbnail, shoeName, id, styleId, lowestPrice }) {
    let history = useHistory();

    const clickHandler = (id) => {
        selectShoe(id, "search");
        history.push(`/details/${id}/${styleId}`);
    };
    return (
        <div className="searched-shoes" onClick={(e) => clickHandler(id)}>
            <div className="searched-shoes-details">
                <div className="searched-shoes-details-img">
                    <img src={thumbnail} alt="shoe pic" />
                </div>
                <div className="searched-shoes-details-wrap">
                    <div className="searched-shoes-details-details">
                        <p>{shoeName}</p>
                        <div className="prices">
                            <p>Lowest Price</p>
                            <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${lowestPrice}</p>
                        </div>
                        <div className="got-them"></div>
                    </div>
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(SearchedShoesDetails));
