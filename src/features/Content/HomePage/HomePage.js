import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import questionMarkCircle from "@iconify/icons-majesticons/question-mark-circle";

import { getShoes } from "../../../actions";
import NavBar from "../../Nav/NavBar";
import Cta from "../../Cta/Cta";
import TopTenShoeCards from "./TopTenShoeCards";
import TopTenHoverBox from "../TopTenHoverBox";
import HomeSkeletonCards from "../Skeletons/HomeSkeletonCards";
import Footer from "../../Footer/Footer";
import "./HomePage.css";

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 17px;
    width: 100%;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;
    }
    &:hover {
        color: black;
        text-decoration: none;
    }
`;

function HomePage({ getShoes, shoes, gettingShoes }) {
    const [hover, setHover] = useState(false);
    const [iconClicked, setIconClicked] = useState(false);
    const [currentPage] = useState(1);
    const [shoesPerPage] = useState(8);

    //* Get Current Shoes
    const indexofLastShoe = currentPage * shoesPerPage;
    const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
    const homeCurrentShoes = shoes.slice(indexOfFirstShoe, indexofLastShoe);

    const closetId = JSON.parse(localStorage.getItem("closetId"));

    useEffect(() => {
        getShoes();
    }, [getShoes]);

    return (
        <React.Fragment>
            <NavBar />
            <Cta />
            <div className="content">
                <div className="title-topten">
                    <div className="title-hover-icon">
                        <h1>Most Popular</h1>

                        <Icon
                            icon={questionMarkCircle}
                            style={{ width: "1.5rem", height: "4rem", marginBottom: " 0.4rem" }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        {hover && <TopTenHoverBox />}
                    </div>
                    <div className="title-hover-icon-mobile">
                        <h1>Most Popular</h1>

                        <Icon
                            icon={questionMarkCircle}
                            style={{ width: "1.5rem", height: "4rem", marginBottom: " 0.4rem" }}
                            onClick={() => setIconClicked(!iconClicked)}
                        />
                        <div className={`hover-icon-mobile ${!iconClicked ? "inactive" : ""}`}>
                            <TopTenHoverBox />
                        </div>
                    </div>
                    <div className="topten-link-con">
                        <StyledLinks to="trendingshoes" className="trending-btn">
                            SEE ALL
                        </StyledLinks>
                    </div>
                </div>
                <div className="topten-shoes-container">
                    {gettingShoes && <HomeSkeletonCards />}
                    {!gettingShoes &&
                        homeCurrentShoes.map((shoe, i) => (
                            <TopTenShoeCards
                                key={i}
                                id={shoe._id}
                                styleId={shoe.styleID}
                                thumbnail={shoe.thumbnail}
                                shoeName={shoe.shoeName}
                                lowestPrice={shoe.lowestPrice}
                                type="shoes"
                                inCloset={closetId ? closetId.hasOwnProperty(shoe.shoeName) : false}
                            />
                        ))}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shoes,
        gettingShoes: state.gettingShoes,
        gettingShoesError: state.gettingShoesError,
    };
};

const mapDispatchToPros = {
    getShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(HomePage));
