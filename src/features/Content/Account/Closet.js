import React, { useEffect, useState } from "react";
import axios from "axios";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Closet.css";
import Footer from "../../Footer/Footer";
import ClosetItems from "./ClosetItems";

export default function Closet() {
    const [getShoeCloset, setGetShoeCloset] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    console.log(closetShoes.user.closet);

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
                        <div className="coming-soon-alert" style={{ marginTop: "150px" }}>
                            <h2>Add shoes to closet</h2>
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
                    <div className="coming-soon-alert" style={{ marginTop: "150px" }}>
                        {!isLoading && <div>loading...</div>}
                        {isLoading &&
                            getShoeCloset.map((shoe, i) => (
                                <ClosetItems
                                    key={i}
                                    id={shoe._id}
                                    thumbnail={shoe.thumbnail}
                                    shoeName={shoe.shoeName}
                                    // lowestPrice={shoe.lowestPrice}
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
