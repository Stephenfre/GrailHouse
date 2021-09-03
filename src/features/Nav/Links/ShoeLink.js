import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

import { getLinkShoes } from "../../../actions";
import NavBar from "../NavBar";
import SkeletonCards from "../../Content/Skeletons/SkeletonCards";
import TrendingBackground from "../../../Svgs/TrendingBackground.svg";
import ShoeLinkDetails from "./ShoeLinkDetails";
import SearchResultsForm from "../../Content/Search/SearchResultsForm";
import LinksPagination from "./LinksPagination";
import SideBar from "../../Content/SideBar/SideBar";
import Footer from "../../Footer/Footer";

import "../../Content/TrendingShoes/TrendingShoes.css";
import "../../Content/Search/Search.css";

import "./ShoeLink.css";

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
    text-align: center;
`;

function ShoeLink({ getLinkShoes, linkShoesResults, findingLinkShoes }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [shoesPerPage] = useState(16);
    const [isViewActive, setIsViewActive] = useState(false);
    const { shoeName } = useParams();

    const params = useParams();

    const shoeParams = params.shoeName.toUpperCase();

    useEffect(() => {
        getLinkShoes(shoeName);
    }, [shoeName]);

    //* Get Current Shoes
    const indexofLastShoe = currentPage * shoesPerPage;
    const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
    const currentShoes = linkShoesResults.slice(indexOfFirstShoe, indexofLastShoe);

    //* Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            {/* <NavBar />
            <div className="cta-trending-img">
                <img src={TrendingBackground} alt="cta-logo" />
            </div>
            <div className="trending-content">
                <div className="title-details">
                    <div className="title-links-filters-view">
                        <div className="search-links-results-details">
                            <StyledLinks to="/">HOME</StyledLinks>
                            {" / "}
                            <StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
                            {" / "}
                            <StyledLinks to={`/${params.shoeName}`}>{shoeParams}</StyledLinks>
                        </div>
                        <div className="options-mobile">filter</div>
                        <div className="search-bar-details">
                            <SearchResultsForm search={SearchResultsForm} />
                            <Icon
                                icon={gridIcon}
                                onClick={() => setIsViewActive(!isViewActive)}
                                style={
                                    isViewActive
                                        ? { color: "CECECE", width: "2.5rem", height: "2.5rem" }
                                        : { color: "000000", width: "2.5rem", height: "2.5rem" }
                                }
                            />
                            <Icon
                                icon={menuIcon}
                                onClick={() => setIsViewActive(!isViewActive)}
                                className={`menu-list-icon ${isViewActive ? "active" : "inactive"}`}
                                style={
                                    isViewActive
                                        ? { color: "000000", width: "2rem", height: "3rem" }
                                        : { color: "CECECE", width: "2rem", height: "3rem" }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={`trending-shoes-container ${isViewActive ? "active" : "inactive"}`}>
                    <div className="options">
                        <h3>FILTER</h3>
                        <SideBar />
                    </div>
                    <div className={`trending-shoes-content ${isViewActive ? "active" : "inactive"}`}>
                        {findingLinkShoes && <SkeletonCards />}
                        {!findingLinkShoes &&
                            currentShoes.map((shoe, i) => (
                                <ShoeLinkDetails
                                    key={i}
                                    id={shoe._id}
                                    thumbnail={shoe.thumbnail}
                                    shoeName={shoe.shoeName}
                                    lowestPrice={shoe.lowestPrice}
                                    styleId={shoe.styleID}
                                    type="shoeLinks"
                                    isViewActive={isViewActive}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <LinksPagination shoesPerPage={shoesPerPage} totalShoes={linkShoesResults.length} paginate={paginate} />
            <Footer /> */}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        linkShoesResults: state.linkShoesResults,
        findingLinkShoes: state.findingLinkShoes,
        findingLinkShoesError: state.findingLinkShoesError,
    };
};

const mapDispatchToProps = {
    getLinkShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoeLink));
