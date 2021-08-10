import React from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import { selectShoe } from "../../../actions";

import "../../Content/TrendingShoes/TrendingShoesCard.css";

const Button = styled.button`
    text-decoration: none;
    background: black;
    color: white;
    font-size: 10px;
    padding: 0rem;
    height: 70%;
    width: 100%;
    border-radius: 5px;
    border: none;
    text-align: center;
`;

function ShoeLinkDetails({ isViewActive, selectShoe, type, thumbnail, shoeName, id, styleId, lowestPrice }) {
    let history = useHistory();

    const clickHandler = (id) => {
        selectShoe(id, "shoeLinks");
        history.push(`/details/id/${styleId}`);
    };

    return (
        <div className={"trending" + (isViewActive ? " active" : "")} onClick={(e) => clickHandler(id)}>
            <div className={"trending-shoes" + (isViewActive ? " active" : "")}>
                <div className={"trending-shoes-img" + (isViewActive ? " active" : "")}>
                    <img src={thumbnail} alt="shoe pic" />
                </div>
                <div className={"trending-shoes-wrap" + (isViewActive ? " active" : "")}>
                    <div className="trending-shoes-details">
                        <p>{shoeName}</p>
                        <div className={"prices" + (isViewActive ? " active" : "")}>
                            <p>Lowest Price</p>
                            <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0" }}>${lowestPrice}</p>
                        </div>
                        <div className={"add-to-closet" + (isViewActive ? " active" : "")}>
                            <Button>ADD TO CLOSET</Button>
                        </div>
                        {/* <div className="got-them"></div> */}
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

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ShoeLinkDetails));
