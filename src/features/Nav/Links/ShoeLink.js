import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { Icon } from "@iconify/react";
import gridIcon from "@iconify/icons-gridicons/grid";
import menuIcon from "@iconify/icons-vaadin/menu";

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

export default function ShoeLink() {
    const [searchedShoes, setSearchedShoes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [shoesPerPage] = useState(16);
    const [isViewActive, setIsViewActive] = useState(false);

    // Get Current Shoes
    const indexofLastShoe = currentPage * shoesPerPage;
    const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
    const currentShoes = searchedShoes.slice(indexOfFirstShoe, indexofLastShoe);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    let { shoeName } = useParams();

    let url = `https://grailhouse.herokuapp.com/api/search/${shoeName}`;

    useEffect(() => {
        let searchPrices = [];
        const fetchShoes = async () => {
            setIsLoading(true);
            await axios
                .get(url)
                .then((response) => {
                    console.log(response);
                    if (response.data) {
                        console.log(response.data);
                        // eslint-disable-next-line
                        response.data.map((shoe) => {
                            let arr = Object.values(shoe.lowestResellPrice);
                            let min = Math.min(...arr);
                            shoe.lowestPrice = min;
                            searchPrices.push(shoe);
                        });
                        setSearchedShoes(searchPrices);
                        setIsLoading(false);
                    } else {
                        setTimeout(() => {
                            console.log("waited", response.data);
                            // eslint-disable-next-line
                            response.data.map((shoe) => {
                                let arr = Object.values(shoe.lowestResellPrice);
                                let min = Math.min(...arr);
                                shoe.lowestPrice = min;
                                searchPrices.push(shoe);
                            });
                            setSearchedShoes(searchPrices);
                        }, 4000);
                        setIsLoading(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchShoes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="main-container">
            <NavBar />
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
                        {isLoading && <SkeletonCards />}
                        {!isLoading &&
                            currentShoes.map((shoe, i) => (
                                <ShoeLinkDetails
                                    key={i}
                                    id={shoe._id}
                                    thumbnail={shoe.thumbnail}
                                    shoeName={shoe.shoeName}
                                    lowestPrice={shoe.lowestPrice}
                                    styleId={shoe.styleID}
                                    type="trending"
                                    isViewActive={isViewActive}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <LinksPagination shoesPerPage={shoesPerPage} totalShoes={searchedShoes.length} paginate={paginate} />
            <Footer />
        </div>
    );
}
