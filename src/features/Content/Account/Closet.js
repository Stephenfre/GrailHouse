import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SideNavBar from "./SideNavBar";
import NavBar from "../../Nav/NavBar";
import "./Closet.css";
import Footer from "../../Footer/Footer";
import ClosetItems from "./ClosetItems";
// import ClosetPagination from "./ClosetPagination";
import ShoeBoxes from "../../../Svgs/ShoeBoxes.svg";

function Closet({ closet }) {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [shoesPerPage] = useState(8);

    console.log(closet);

    let closetId = JSON.parse(localStorage.getItem("closetId"));

    //* Get Current Shoes
    // const indexofLastShoe = currentPage * shoesPerPage;
    // const indexOfFirstShoe = indexofLastShoe - shoesPerPage;
    // const currentShoes = closet.slice(indexOfFirstShoe, indexofLastShoe);

    //* Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        closetId = JSON.parse(localStorage.getItem("closetId"));
    }, [closet]);

    if (closet.length === 0 || undefined || null) {
        return (
            <React.Fragment>
                <NavBar />
                <div className="closet">
                    <SideNavBar />
                    <div className="closet-content">
                        <div className="title">
                            <h2>Closet</h2>
                        </div>
                        <div className="closet-empty-shoes" style={{ marginTop: "100px" }}>
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
                        {closet.map((shoe, i) => (
                            <ClosetItems
                                key={i}
                                id={shoe._id}
                                styleId={shoe.styleId}
                                thumbnail={shoe.thumbnail}
                                shoeName={shoe.shoeName}
                                lowestPrice={shoe.lowestPrice}
                                deadstock={shoe.deadstock}
                                inCloset={closetId ? closetId.hasOwnProperty(shoe.shoeName) : false}
                            />
                        ))}
                        {/* <ClosetPagination shoesPerPage={shoesPerPage} totalShoes={closet.length} paginate={paginate} /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        closet: state.user.closet,
    };
};

export default withRouter(connect(mapStateToProps)(Closet));
