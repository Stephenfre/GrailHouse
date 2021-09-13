import React, { useEffect, useState } from "react";
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

import "../../Content/Search/Search.css";

import "./ShoeLink.css";

const StyledLinks = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
    text-align: center;
`;

function ShoeLink({ linkShoesResults, findingLinkShoes, closet }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [shoesPerPage] = useState(16);
    const [isViewActive, setIsViewActive] = useState(false);

    const params = useParams();

    const shoeParams = params.shoeName.toUpperCase();

    //* Get Current Shoes
    const indexofLastShoe = currentPage * shoesPerPage;
    const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
    const currentShoes = linkShoesResults.slice(indexOfFirstShoe, indexofLastShoe);

    //* Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        closetId = JSON.parse(localStorage.getItem("closetId"));
    }, [closet]);

    let closetId = JSON.parse(localStorage.getItem("closetId"));

    return (
        <React.Fragment>
            <NavBar />
            <div className="cta-shoelinks-img">
                <img src={TrendingBackground} alt="cta-logo" />
            </div>
            <div className="shoelinks-content">
                <div className="shoelinks-title-details">
                    <div className="shoelinks-title-links-filters-view">
                        <div className="shoelinks-search-links-results-details">
                            <StyledLinks to="/">HOME</StyledLinks>
                            {" / "}
                            <StyledLinks to="/trendingshoes">SNEAKERS</StyledLinks>
                            {" / "}
                            <StyledLinks to={`/${params.shoeName}`}>{shoeParams}</StyledLinks>
                        </div>
                        <div className="shoelinks-options-mobile">filter</div>
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
                                className={`shoelinks-menu-list-icon ${isViewActive ? "active" : "inactive"}`}
                                style={
                                    isViewActive
                                        ? { color: "000000", width: "2rem", height: "3rem" }
                                        : { color: "CECECE", width: "2rem", height: "3rem" }
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className={`shoelinks-shoes-container ${isViewActive ? "active" : "inactive"}`}>
                    <div className="shoelinks-options">
                        <h3>FILTER</h3>
                        <SideBar />
                    </div>
                    <div className={`shoelinks-shoes-content ${isViewActive ? "active" : "inactive"}`}>
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
                                    inCloset={closetId ? closetId.hasOwnProperty(shoe.shoeName) : false}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <LinksPagination shoesPerPage={shoesPerPage} totalShoes={linkShoesResults.length} paginate={paginate} />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        linkShoesResults: state.linkShoesResults,
        findingLinkShoes: state.findingLinkShoes,
        findingLinkShoesError: state.findingLinkShoesError,
        closet: state.user.closet,
    };
};

const mapDispatchToProps = {
    getLinkShoes,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoeLink));
