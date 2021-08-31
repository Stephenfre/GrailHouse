import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

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

export default function Details(props) {
    const [shoeDetails, setShoeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [detailsTabActive, setDetailsTabActive] = useState(false);
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
    let { styleId } = useParams();

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

    //* FETCH HERE
    useEffect(() => {
        axios
            .get(`https://grailhouse.herokuapp.com/api/sneakers/id/${styleId}/prices`)
            .then((res) => {
                setIsLoading(true);
                if (res.data) {
                    setShoeDetails(res.data);
                    localStorage.setItem("detail prices", JSON.stringify(res.data.resellPrices));
                } else {
                    setTimeout(() => {
                        setShoeDetails(res.data);
                    }, 30000);
                    setIsLoading(true);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, [styleId]);

    const allShoePrices = JSON.parse(localStorage.getItem("detail prices"));

    const closetId = JSON.parse(localStorage.getItem("closetId"));

    const inCloset = closetId ? closetId.hasOwnProperty(shoeDetails.shoeName) : false;

    if (isLoading && shoeDetails.length < 1) {
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
                            <Carousel variant="dark" indicator="true" controls="true" interval={10000}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={shoeDetails.imageLinks[0]} alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={shoeDetails.imageLinks[1]} alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={shoeDetails.imageLinks[2]} alt="Third slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={shoeDetails.imageLinks[3]} alt="Third slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={shoeDetails.imageLinks[4]} alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="shoe-details">
                            <h2>{shoeDetails.shoeName}</h2>
                            <div className="shoe-img-mobile">
                                <img src={shoeDetails.thumbnail} alt="shoe pic" />
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
                                        <p>{shoeDetails.description}</p>
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

                                        <div className={`stockx-sizes ${stores.stockX.active ? "active" : "inactive"}`}>
                                            <ul className="stockx-ul">
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["6"] === undefined ? (
                                                            <p className="details-na">6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                6 | $ {allShoePrices.stockX["6"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                7 | $ {allShoePrices.stockX["7"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                8 | $ {allShoePrices.stockX["8"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                9 | $ {allShoePrices.stockX["9"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | $ {allShoePrices.stockX["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | $ {allShoePrices.stockX["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | $ {allShoePrices.stockX["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | $ {allShoePrices.stockX["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | $ {allShoePrices.stockX["14"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["15"] === undefined ? (
                                                            <p className="details-na"> 15 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                15 | $ {allShoePrices.stockX["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {allShoePrices.stockX["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | $ {allShoePrices.stockX["16"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>
                                        <div className={`goat-sizes ${stores.goat.active ? "active" : "inactive"}`}>
                                            <ul className="goat-ul">
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["6"] === undefined ? (
                                                            <p className="details-na"> 6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                6 | $ {allShoePrices.goat["6"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                7 | $ {allShoePrices.goat["7"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                8 | $ {allShoePrices.goat["8"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                9 | $ {allShoePrices.goat["9"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | $ {allShoePrices.goat["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | $ {allShoePrices.goat["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | $ {allShoePrices.goat["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | $ {allShoePrices.goat["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | $ {allShoePrices.goat["14"]}
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
                                                                15 | $ {allShoePrices.goat["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {allShoePrices.goat["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | $ {allShoePrices.goat["16"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>

                                        {/* <div
                                            className={`flightclub-sizes ${
                                                stores.flightClub.active ? "active" : "inactive"
                                            }`}
                                        >
                                            <ul className="flightclub-ul">
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>6 | ${allShoePrices.flightClub["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>7 | ${allShoePrices.flightClub["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>8 | ${allShoePrices.flightClub["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>9 | ${allShoePrices.flightClub["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>10 | ${allShoePrices.flightClub["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="flightclub-li">
                                                        <p>11 | ${allShoePrices.flightClub["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>12 | ${allShoePrices.flightClub["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>13 | ${allShoePrices.flightClub["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>14 | ${allShoePrices.flightClub["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>15 | ${allShoePrices.flightClub["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.flightClub}>
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
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>6 | ${allShoePrices.stadiumGoods["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>7 | ${allShoePrices.stadiumGoods["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>8 | ${allShoePrices.stadiumGoods["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>9 | ${allShoePrices.stadiumGoods["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>10 | ${allShoePrices.stadiumGoods["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>11 | ${allShoePrices.stadiumGoods["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>12 | ${allShoePrices.stadiumGoods["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>13 | ${allShoePrices.stadiumGoods["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>14 | ${allShoePrices.stadiumGoods["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>15 | ${allShoePrices.stadiumGoods["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
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
                                {shoeDetails.styleID} | {shoeDetails.colorway} | {shoeDetails.releaseDate}
                            </span>
                            <div className={`add-btn ${inCloset ? "inactive " : ""}`}>
                                <StyledLinks>Add to closet</StyledLinks>
                            </div>
                            <div className={`details-got-them ${inCloset ? "active" : "inactive "}`}>
                                <button
                                    className="details-condition-btn"
                                    // onClick={conditonHandler}
                                >
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
