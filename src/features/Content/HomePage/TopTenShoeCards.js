import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory, withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { addToCloset } from "../../../actions";
import { removeFromCloset } from "../../../actions";
// import WornPopUp from "../PopUps/WornPopUp";
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
    cursor: pointer;
    @media (max-width: 500px) {
        width: 23%;
        height: 9%;
        border-radius: 13px;
        background-color: white;
        padding: 0px;
        border: 1px solid black;
    }
`;

function TopTenShoeCards({ thumbnail, shoeName, id, styleId, lowestPrice, inCloset, isLoggedIn }) {
    const [isDeadstock, setIsDeadstock] = useState(false);
    let history = useHistory();

    const dispatch = useDispatch();

    console.log("styleId", styleId);

    const addShoeToCloset = () => {
        if (!isLoggedIn) {
            history.push("/signin");
        }

        dispatch(
            addToCloset({
                shoeId: id,
                styleId: styleId,
                shoeName: shoeName,
                lowestPrice: lowestPrice,
                thumbnail: thumbnail,
                deadstock: isDeadstock,
            })
        );
    };

    const removeShoe = (closetShoeId) => {
        dispatch(removeFromCloset(closetShoeId));
    };

    const conditonHandler = () => {
        setIsDeadstock(!isDeadstock);
    };

    return (
        <div className="topten-shoes-card">
            <div className="topten-shoes">
                <Link to={`details/${id}/${styleId}`} className="topten-shoes-img">
                    <img src={thumbnail} alt="shoe pic" />
                </Link>
                <div className="topten-shoes-wrap">
                    <div className="topten-shoes-details">
                        <p>{shoeName}</p>
                        <div className="topten-shoes-prices">
                            <p> Lowest Price</p>

                            <p style={{ fontSize: "25px", fontWeight: "600", marginTop: "0", color: "black" }}>
                                ${lowestPrice}
                            </p>
                        </div>
                        <div className={`add-to-closet ${inCloset ? "inactive " : "active"}`}>
                            <Button onClick={addShoeToCloset}>ADD TO CLOSET</Button>
                        </div>
                        <div className={`add-to-closet-mobile ${inCloset ? "inactive " : "active"}`}>
                            <Button onClick={addShoeToCloset}></Button>
                        </div>
                        <div className={`topten-got-them ${inCloset ? "active" : "inactive "}`}>
                            <button
                                onClick={() => removeShoe(id)}
                                className={`topten-got-them-btn ${inCloset ? "active" : "inactive "}`}
                            ></button>
                            <button className="condition-btn" onClick={conditonHandler}>
                                Deadstock
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`popup-box-container ${isDeadstock ? "active" : "inactive "}`}>{/* <WornPopUp /> */}</div>
            {/* <ConditionPopUp /> */}
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
    addToCloset,
    removeFromCloset,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(TopTenShoeCards));
