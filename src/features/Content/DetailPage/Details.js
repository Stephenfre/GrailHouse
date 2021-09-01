import React, { useState, useEffect } from "react";
import { useParams, Link, withRouter, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

import { addToCloset } from "../../../actions";
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

function Details({ id, shoeName, lowestPrice, thumbnail, isLoggedIn, closet }) {
    const [shoeDetails, setShoeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [detailsTabActive, setDetailsTabActive] = useState(false);
    const [isDeadstock] = useState(false);
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
        closetId = JSON.parse(localStorage.getItem("closetId"));
    }, [closet]);

    //* FETCH HERE
    useEffect(() => {
        axios
            .get(`http://localhost:5001/api/sneakers/id/${styleId}/prices`)
            .then((res) => {
                setIsLoading(true);
                console.log(res.data);
                if (res.data) {
                    console.log(res.data);
                    setShoeDetails(res.data);
                    localStorage.setItem("detail prices", JSON.stringify(res.data));
                } else {
                    setTimeout(() => {
                        setShoeDetails(res.data);
                    }, 30000);
                    localStorage.setItem("detail prices", JSON.stringify(res.data));
                    setIsLoading(true);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
            });
    }, [styleId]);

    let closetId = JSON.parse(localStorage.getItem("closetId"));

    let inCloset = closetId ? closetId.hasOwnProperty(shoeDetails.shoeName) : false;
    console.log(inCloset);

    // const allShoePrices = JSON.parse(localStorage.getItem("detail prices"));
    // console.log(allShoePrices);

    // const resell = allShoePrices.resellPrices;
    // console.log(resell.stockX["7"]);

    // const closetId = JSON.parse(localStorage.getItem("closetId"));

    // const inCloset = closetId ? closetId.hasOwnProperty(shoeDetails.shoeName) : false;

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

                                        {/* <div className={`stockx-sizes ${stores.stockX.active ? "active" : "inactive"}`}>
                                            <ul className="stockx-ul">
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["6"] === undefined ? (
                                                            <p className="details-na">6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                6 | $ {resell.stockX["6"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                7 | $ {resell.stockX["7"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                8 | $ {resell.stockX["8"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                9 | $ {resell.stockX["9"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | $ {resell.stockX["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | $ {resell.stockX["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | $ {resell.stockX["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | $ {resell.stockX["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | $ {resell.stockX["14"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["15"] === undefined ? (
                                                            <p className="details-na"> 15 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                15 | $ {resell.stockX["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stockX}>
                                                    <li className="stockx-li">
                                                        {resell.stockX["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | $ {resell.stockX["16"]}
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
                                                        {resell.goat["6"] === undefined ? (
                                                            <p className="details-na"> 6 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">6 | $ {resell.goat["6"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["7"] === undefined ? (
                                                            <p className="details-na"> 7 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">7 | $ {resell.goat["7"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["8"] === undefined ? (
                                                            <p className="details-na"> 8 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">8 | $ {resell.goat["8"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["9"] === undefined ? (
                                                            <p className="details-na"> 9 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">9 | $ {resell.goat["9"]}</p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["10"] === undefined ? (
                                                            <p className="details-na"> 10 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                10 | $ {resell.goat["10"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["11"] === undefined ? (
                                                            <p className="details-na"> 11 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                11 | $ {resell.goat["11"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["12"] === undefined ? (
                                                            <p className="details-na"> 12 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                12 | $ {resell.goat["12"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["13"] === undefined ? (
                                                            <p className="details-na"> 13 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                13 | $ {resell.goat["13"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["14"] === undefined ? (
                                                            <p className="details-na"> 14 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                14 | $ {resell.goat["14"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="goat-li">
                                                        {resell.goat["15"] === undefined ? (
                                                            <p className="details-na"> 15 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                15 | $ {resell.goat["15"]}
                                                            </p>
                                                        )}
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.goat}>
                                                    <li className="goat-li">
                                                        {resell.goat["16"] === undefined ? (
                                                            <p className="details-na"> 16 | N/A</p>
                                                        ) : (
                                                            <p className="details-in-stock">
                                                                16 | $ {resell.goat["16"]}
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
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>6 | ${resell.flightClub["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>7 | ${resell.flightClub["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>8 | ${resell.flightClub["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>9 | ${resell.flightClub["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>10 | ${resell.flightClub["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="flightclub-li">
                                                        <p>11 | ${resell.flightClub["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>12 | ${resell.flightClub["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>13 | ${resell.flightClub["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>14 | ${resell.flightClub["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>15 | ${resell.flightClub["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={resell.flightClub}>
                                                    <li className="flightclub-li">
                                                        <p>16 | ${resell.flightClub["16"]}</p>
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
                                                        <p>6 | ${resell.stadiumGoods["6"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>7 | ${resell.stadiumGoods["7"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>8 | ${resell.stadiumGoods["8"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>9 | ${resell.stadiumGoods["9"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>10 | ${resell.stadiumGoods["10"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>11 | ${resell.stadiumGoods["11"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>12 | ${resell.stadiumGoods["12"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>13 | ${resell.stadiumGoods["13"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>14 | ${resell.stadiumGoods["14"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>15 | ${resell.stadiumGoods["15"]}</p>
                                                    </li>
                                                </a>
                                                <a href={shoeDetails.resellLinks.stadiumGoods}>
                                                    <li className="stadiumgoods-li">
                                                        <p>16 | ${resell.stadiumGoods["16"]}</p>
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
    };
};

const mapDispatchToPros = {
    addToCloset,
    removeFromCloset,
};

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(Details));
