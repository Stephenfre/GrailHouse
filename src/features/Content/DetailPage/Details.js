import React, { useState, useEffect } from "react";
import { useParams, Link, withRouter, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
// import axios from "axios";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

import { addToCloset } from "../../../actions";
import { getDetails } from "../../../actions";
import { removeFromCloset } from "../../../actions";
import NavBar from "../../Nav/NavBar";
import DetailsSkeleton from "../Skeletons/DetailsSkeleton";
import Footer from "../../Footer/Footer";
import FlightClub from "../../../Svgs/Flightclub.svg";
import FlightClubColored from "../../../Svgs/FlightClubColored.svg";
import StockX from "../../../Svgs/StockX.svg";
import StockXColored from "../../../Svgs/StockX-colored.svg";
import Goat from "../../../Svgs/Goat.svg";
import GoatColored from "../../../Svgs/Goat-colored.svg";
import StadiumGoods from "../../../Svgs/StadiumGoods.svg";
import StadiumGoodsColored from "../../../Svgs/StadiumGoods-colored.svg";

import "./Details.css";

const StyledLinks = styled(Link)`
    padding: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    color: white;
    background: black;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    &:hover {
        background: rgb(41, 41, 41);
        color: rgb(235, 235, 235);
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

function Details({ id, shoeName, lowestPrice, thumbnail, isLoggedIn, closet, styleId, detailShoe, gettingDetailShoe }) {
    const [detailsTabActive, setDetailsTabActive] = useState(false);
    const [isDeadstock] = useState(false);
    const params = useParams();
    let style = params.styleId;

    console.log(style);

    const [stores, setStores] = useState({
        flightClub: {
            active: false,
        },
        stockX: {
            active: true,
        },
        goat: {
            active: false,
        },
        stadiumGoods: {
            active: false,
        },
    });

    const toggleMe = (store) => {
        if (store === "stockX") {
            setStores({
                flightClub: {
                    active: false,
                },
                stockX: {
                    active: true,
                },
                goat: {
                    active: false,
                },
                stadiumGoods: {
                    active: false,
                },
            });
        } else if (store === "flightClub") {
            setStores({
                flightClub: {
                    active: true,
                },
                stockX: {
                    active: false,
                },
                goat: {
                    active: false,
                },
                stadiumGoods: {
                    active: false,
                },
            });
        } else if (store === "goat") {
            setStores({
                flightClub: {
                    active: false,
                },
                stockX: {
                    active: false,
                },
                goat: {
                    active: true,
                },
                stadiumGoods: {
                    active: false,
                },
            });
        } else if (store === "stadiumGoods") {
            setStores({
                flightClub: {
                    active: false,
                },
                stockX: {
                    active: false,
                },
                goat: {
                    active: false,
                },
                stadiumGoods: {
                    active: true,
                },
            });
        }
    };

    let history = useHistory();

    const dispatch = useDispatch();

    const gotThemHandler = () => {
        if (!isLoggedIn) {
            history.push("/signin");
        }

        dispatch(
            addToCloset({
                shoeId: id,
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

    // const conditonHandler = () => {
    //     setIsDeadstock(!isDeadstock);
    // };

    useEffect(() => {
        dispatch(getDetails(style));
    }, [style]);

    useEffect(() => {
        closetId = JSON.parse(localStorage.getItem("closetId"));
    }, [closet]);

    let closetId = JSON.parse(localStorage.getItem("closetId"));

    let inCloset = closetId ? closetId.hasOwnProperty(detailShoe.shoeName) : false;
    console.log(inCloset);

    // const allShoePrices = JSON.parse(localStorage.getItem("detail prices"));
    // console.log(allShoePrices.goat["6"]);

    // const allShoeImages = JSON.parse(localStorage.getItem("detail images"));

    console.log(detailShoe);

    if (!gettingDetailShoe && detailShoe.length < 1) {
        return (
            <React.Fragment>
                <NavBar />
                <DetailsSkeleton />
                <Footer />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <NavBar />
                <div className="shoe-details-container">
                    <div className="shoe-details-content">
                        <div className="shoe-img">
                            <img src={detailShoe.thumbnail} alt="shoe pic" />
                            <Carousel variant="dark" indicator="true" controls="true" interval={10000}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={detailShoe.imageLinks[0]} alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={detailShoe.imageLinks[1]} alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={detailShoe.imageLinks[2]} alt="Third slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={detailShoe.imageLinks[3]} alt="Third slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={detailShoe.imageLinks[4]} alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="shoe-details">
                            <h2>{detailShoe.shoeName}</h2>
                            <div className="shoe-img-mobile">
                                <img src={detailShoe.thumbnail} alt="shoe pic" />
                            </div>
                            <div className="details-prices-tabs">
                                <div className="tabs">
                                    <button
                                        onClick={() => setDetailsTabActive(!detailsTabActive)}
                                        className={`details-tab ${!detailsTabActive ? "active" : ""}`}
                                    >
                                        <h5>DETAILS</h5>
                                    </button>
                                    <button
                                        onClick={() => setDetailsTabActive(!detailsTabActive)}
                                        className={`prices-tab ${detailsTabActive ? "active" : ""}`}
                                    >
                                        <h5>PRICES</h5>
                                    </button>
                                </div>
                                <div className="details-box">
                                    <div className={`details-description ${!detailsTabActive ? "active" : "inactive"}`}>
                                        <p>{detailShoe.description}</p>
                                    </div>
                                    <div className={`prices-prices ${detailsTabActive ? "active" : "inactive"}`}>
                                        <div className="prices-stores">
                                            <button
                                                onClick={() => toggleMe("stockX")}
                                                className={`stockx ${stores.stockX.active ? "active" : "inactive"}`}
                                            >
                                                <img src={stores.stockX.active ? StockXColored : StockX} alt="logo" />
                                            </button>
                                            <button
                                                onClick={() => toggleMe("goat")}
                                                className={`goat ${stores.goat.active ? "active" : "inactive"}`}
                                            >
                                                <img src={stores.goat.active ? GoatColored : Goat} alt="logo" />
                                            </button>
                                            <button
                                                onClick={() => toggleMe("flightClub")}
                                                className={`flightclub ${
                                                    stores.flightClub.active ? "active" : "inactive"
                                                }`}
                                            >
                                                <img
                                                    src={stores.flightClub.active ? FlightClubColored : FlightClub}
                                                    alt="logo"
                                                />
                                            </button>
                                            <button
                                                onClick={() => toggleMe("stadiumGoods")}
                                                className={`stadiumgoods ${
                                                    stores.stadiumGoods.active ? "active" : "inactive"
                                                }`}
                                            >
                                                <img
                                                    src={
                                                        stores.stadiumGoods.active ? StadiumGoodsColored : StadiumGoods
                                                    }
                                                    alt="logo"
                                                />
                                            </button>
                                        </div>

                                        {/* <div className={`stockx-sizes ${stores.stockX.active ? "active" : "inactive"}`}>
                                            <ul className="stockx-ul">
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["6"] === undefined ? (
                                                            <p className="details-na">6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                6 | ${allShoePrices.stockX["6"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                7 | ${allShoePrices.stockX["7"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                8 | ${allShoePrices.stockX["8"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                9 | ${allShoePrices.stockX["9"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | ${allShoePrices.stockX["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | ${allShoePrices.stockX["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | ${allShoePrices.stockX["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | ${allShoePrices.stockX["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | ${allShoePrices.stockX["14"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["15"] === undefined ? (
                                                            <p className="details-na"> 15 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                15 | ${allShoePrices.stockX["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | ${allShoePrices.stockX["16"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>
                                        <div className={`goat-sizes ${stores.goat.active ? "active" : "inactive"}`}>
                                            <ul className="goat-ul">
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["6"] === undefined ? (
                                                            <p className="details-na"> 6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">6 | ${allShoePrices.goat["6"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">7 | ${allShoePrices.goat["7"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">8 | ${allShoePrices.goat["8"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">9 | ${allShoePrices.goat["9"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | ${allShoePrices.goat["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | ${allShoePrices.goat["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | ${allShoePrices.goat["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | ${allShoePrices.goat["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | ${allShoePrices.goat["14"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["15"] === undefined ? (
                                                            <p className="details-na"> 15 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                15 | ${allShoePrices.goat["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | ${allShoePrices.goat["16"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>

                                        <div
                                            className={`flightclub-sizes ${
                                                stores.flightClub.active ? "active" : "inactive"
                                            }`}
                                        >
                                            <ul className="flightclub-ul">
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>6 | ${allShoePrices.flightClub["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>7 | ${allShoePrices.flightClub["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>8 | ${allShoePrices.flightClub["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>9 | ${allShoePrices.flightClub["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>10 | ${allShoePrices.flightClub["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="flightclub-li">
                                                        <p>11 | ${allShoePrices.flightClub["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>12 | ${allShoePrices.flightClub["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>13 | ${allShoePrices.flightClub["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>14 | ${allShoePrices.flightClub["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>15 | ${allShoePrices.flightClub["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={allShoePrices.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>16 | ${allShoePrices.flightClub["16"]}</p>
                                                    </li>
                                                </a>
                                            </ul>
                                        </div> */}

                                        {/* <div
                                            className={`stadiumgoods-sizes ${
                                                stores.stadiumGoods.active ? "active" : "inactive"
                                            }`}
                                        >
                                            <ul className="stadiumgoods-ul">
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>6 | ${allShoePrices.stadiumGoods["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>7 | ${allShoePrices.stadiumGoods["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>8 | ${allShoePrices.stadiumGoods["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>9 | ${allShoePrices.stadiumGoods["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>10 | ${allShoePrices.stadiumGoods["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>11 | ${allShoePrices.stadiumGoods["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>12 | ${allShoePrices.stadiumGoods["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>13 | ${allShoePrices.stadiumGoods["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>14 | ${allShoePrices.stadiumGoods["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>15 | ${allShoePrices.stadiumGoods["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={detailShoe.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>16 | ${allShoePrices.stadiumGoods["16"]}</p>
                                                    </li>
                                                </a>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <span
                                style={
                                    !detailsTabActive
                                        ? { fontSize: "9px", margin: "19px 140px 0 0" }
                                        : { fontSize: "9px", margin: "49px 140px 0 0" }
                                }
                            >
                                {detailShoe.styleID} | {detailShoe.colorway} | {detailShoe.releaseDate}
                            </span>
                            <div onClick={gotThemHandler} className={`add-btn ${inCloset ? "inactive " : ""}`}>
                                <StyledLinks>Add to closet</StyledLinks>
                            </div>
                            <div className={`details-got-them ${inCloset ? "active" : "inactive "}`}>
                                <button className="details-condition-btn" onClick={() => removeShoe(id)}>
                                    Remove from closet
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <SimilarShoes /> */}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        closet: state.user.closet,
        isLoggedIn: state.isLoggedIn,
        detailShoe: state.detailShoe,
        gettingDetailShoe: state.gettingDetailShoe,
    };
};

const mapDispatchToPros = {
    getDetails,
    addToCloset,
    removeFromCloset,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(Details));
