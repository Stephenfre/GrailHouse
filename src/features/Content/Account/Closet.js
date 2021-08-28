import React, { useEffect, useState } from "react";
import axios from "axios";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Closet.css";
import Footer from "../../Footer/Footer";
import ClosetItems from "./ClosetItems";
import ShoeBoxes from "../../../Svgs/ShoeBoxes.svg";

export default function Closet() {
    const [getShoeCloset, setGetShoeCloset] = useState([]);

    const getClosetShoes = () => {
        const currentCloset = JSON.parse(localStorage.getItem("user"));

        const parsedItem = currentCloset.user._id;

        console.log(currentCloset);
        console.log(parsedItem);
        axios
            .get(`http://localhost:5001/api/closet/${parsedItem}`)
            .then((res) => {
                setGetShoeCloset(res.data);
            })
            .catch((err) => {
                console.log(err, "couldn't get data");
            });
    };

    useEffect(() => {
        getClosetShoes();
    }, []);

    const closetShoes = JSON.parse(localStorage.getItem("user"));

    if (closetShoes.user.closet.length === 0) {
        return (
            <React.Fragment>
                <NavBar />
                <div className="closet">
                    <SideNavBar />
                    <div className="closet-content">
                        <div className="title">
                            <h2>Closet</h2>
                        </div>
                        <div className="closet-shoes" style={{ marginTop: "100px" }}>
                            <img src={ShoeBoxes} alt="empty shoe boxes" />
                            <h2>Your closet is empty.</h2>
                            <p>To add shoes to your closet click the “Add To Closet” button.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <NavBar />
            <div className="closet">
                <SideNavBar />
                <div className="closet-content">
                    <div className="title">
                        <h2>Closet</h2>
                    </div>
                    <div className="closet-shoes">
                        {getShoeCloset.map((shoe, i) => (
                            <ClosetItems
                                key={i}
                                id={shoe._id}
                                thumbnail={shoe.thumbnail}
                                shoeName={shoe.shoeName}
                                lowestPrice={shoe.lowestPrice}
                                // styleId={shoe.styleID}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
