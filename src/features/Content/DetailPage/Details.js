import React, { useState, useEffect, Suspense } from "react";
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
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

export default function Details(props) {
    const [shoeDetails, setShoeDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [detailsTabActive, setDetailsTabActive] = useState(false);
    const [stores, setStores] = useState({
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
    let { styleId } = useParams();

    const toggleMe = (store) => {
        if (store === "flightClub") {
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
        } else if (store === "stockX") {
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
            .get(`https://grailhouse.herokuapp.com/api/id/${styleId}/prices`)
            .then((response) => {
                console.log("", response);
                setIsLoading(true);
                if (response.data) {
                    console.log(response.data);
                    setShoeDetails(response.data);
                } else {
                    setTimeout(() => {
                        console.log("waited", response.data);
                        setShoeDetails(response.data);
                    }, 30000);
                    setIsLoading(true);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [styleId]);

    if (isLoading && shoeDetails.length < 1) {
        return (
            <div className="main-container">
                <NavBar />
                <DetailsSkeleton />
                <Footer />
            </div>
        );
    } else {
        return (
            // <Suspense
            //     fallback={
            //         <div className="main-container">
            //             <NavBar />
            //             <DetailsSkeleton />
            //             <Footer />
            //         </div>
            //     }
            // >
            <div className="main-container">
                <NavBar />
                <div className="shoe-details-container" style={{ marginTop: "200px" }}>
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
                                        {/* <Suspense fallback={<h1>Loading prices...</h1>}>
                      <Suspense fallback={<h1>Loading prices...</h1>}>
                        <div className={`flightclub-sizes ${stores.flightClub.active ? "active" : "inactive"}`}>
                          <ul className="flightclub-ul">
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>6 | ${shoeDetails.resellPrices.flightClub["6"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>7 | ${shoeDetails.resellPrices.flightClub["7"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>8 | ${shoeDetails.resellPrices.flightClub["8"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>9 | ${shoeDetails.resellPrices.flightClub["9"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>10 | ${shoeDetails.resellPrices.flightClub["10"]}</p>
                              </li>
                            </a>
                            <a href="">
                              <li className="flightclub-li">
                                <p>11 | ${shoeDetails.resellPrices.flightClub["11"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>12 | ${shoeDetails.resellPrices.flightClub["12"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>13 | ${shoeDetails.resellPrices.flightClub["13"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>14 | ${shoeDetails.resellPrices.flightClub["14"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>15 | ${shoeDetails.resellPrices.flightClub["15"]}</p>
                              </li>
                            </a>
                            <a href={shoeDetails.resellLinks.flightClub}>
                              <li className="flightclub-li">
                                <p>16 | ${shoeDetails.resellPrices.flightClub["16"]}</p>
                              </li>
                            </a>
                          </ul>
                        </div>
                      </Suspense>
                      <div className={`stockx-sizes ${stores.stockX.active ? "active" : "inactive"}`}>
                        <ul className="stockx-ul">
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>6 | ${shoeDetails.resellPrices.stockX["6"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>7 | ${shoeDetails.resellPrices.stockX["7"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>8 | ${shoeDetails.resellPrices.stockX["8"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>9 | ${shoeDetails.resellPrices.stockX["9"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>10 | ${shoeDetails.resellPrices.stockX["10"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>11 | ${shoeDetails.resellPrices.stockX["11"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>12 | ${shoeDetails.resellPrices.stockX["12"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>13 | ${shoeDetails.resellPrices.stockX["13"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>14 | ${shoeDetails.resellPrices.stockX["14"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>15 | ${shoeDetails.resellPrices.stockX["15"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stockX}>
                            <li className="stockx-li">
                              <p>16 | ${shoeDetails.resellPrices.stockX["16"]}</p>
                            </li>
                          </a>
                        </ul>
                      </div>
                      <div className={`goat-sizes ${stores.goat.active ? "active" : "inactive"}`}>
                        <ul className="goat-ul">
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>6 | ${shoeDetails.resellPrices.goat["6"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>7 | ${shoeDetails.resellPrices.goat["7"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>8 | ${shoeDetails.resellPrices.goat["8"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>9 | ${shoeDetails.resellPrices.goat["9"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>10 | ${shoeDetails.resellPrices.goat["10"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>11 | ${shoeDetails.resellPrices.goat["11"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>12 | ${shoeDetails.resellPrices.goat["12"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>13 | ${shoeDetails.resellPrices.goat["13"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>14 | ${shoeDetails.resellPrices.goat["14"]}</p>
                            </li>
                          </a>
                          <a href="">
                            <li className="goat-li">
                              <p>15 | ${shoeDetails.resellPrices.goat["15"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.goat}>
                            <li className="goat-li">
                              <p>16 | ${shoeDetails.resellPrices.goat["16"]}</p>
                            </li>
                          </a>
                        </ul>
                      </div>

                      <div className={`stadiumgoods-sizes ${stores.stadiumGoods.active ? "active" : "inactive"}`}>
                        <ul className="stadiumgoods-ul">
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>6 | ${shoeDetails.resellPrices.stadiumGoods["6"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>7 | ${shoeDetails.resellPrices.stadiumGoods["7"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>8 | ${shoeDetails.resellPrices.stadiumGoods["8"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>9 | ${shoeDetails.resellPrices.stadiumGoods["9"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>10 | ${shoeDetails.resellPrices.stadiumGoods["10"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>11 | ${shoeDetails.resellPrices.stadiumGoods["11"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>12 | ${shoeDetails.resellPrices.stadiumGoods["12"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>13 | ${shoeDetails.resellPrices.stadiumGoods["13"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>14 | ${shoeDetails.resellPrices.stadiumGoods["14"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>15 | ${shoeDetails.resellPrices.stadiumGoods["15"]}</p>
                            </li>
                          </a>
                          <a href={shoeDetails.resellLinks.stadiumGoods}>
                            <li className="stadiumgoods-li">
                              <p>16 | ${shoeDetails.resellPrices.stadiumGoods["16"]}</p>
                            </li>
                          </a>
                        </ul>
                      </div>
                    </Suspense> */}
                                    </div>
                                </div>
                            </div>
                            <span
                                style={
                                    !detailsTabActive
                                        ? { fontSize: "9px", margin: "19px 210px 0 0" }
                                        : { fontSize: "9px", margin: "49px 210px 0 0" }
                                }
                            >
                                {shoeDetails.styleID} | {shoeDetails.colorway} | {shoeDetails.releaseDate}
                            </span>
                            <div
                                className="add-btn"
                                style={{
                                    width: "70%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                <StyledLinks>Add to closet</StyledLinks>
                            </div>
                        </div>
                    </div>
                    {/* <SimilarShoes /> */}
                </div>
                <Footer />
            </div>
            // </Suspense>
        );
    }
}
