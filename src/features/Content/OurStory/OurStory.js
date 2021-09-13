import React from "react";

import Navbar from "../../Nav/NavBar";
import Footer from "../../Footer/Footer";
import "./Story.css";
import SneakerOnShelf from "../../../Svgs/Sneakersonshelf.svg";

export default function OurStory() {
    return (
        <React.Fragment>
            <Navbar />
            <div className="ourstory">
                <div className="ourstory-content">
                    <h3>Our Story</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lobortis nulla, quis pretium
                        nunc. Sed leo sem, pellentesque in interdum at, commodo ac arcu. Etiam ut turpis nec est
                        tincidunt ullamcorper. Etiam elementum placerat lacus non condimentum. Nam et mauris augue.
                        Pellentesque tellus mauris, vulputate sed molestie sed, ultricies quis velit. Etiam euismod
                        mauris ut aliquam dapibus. Donec ligula metus, suscipit in interdum posuere, luctus nec ex. Duis
                        tincidunt posuere quam, ac rutrum elit porta vitae. Vestibulum ac consequat arcu, quis
                        consectetur erat. Cras placerat arcu id massa vulputate pellentesque. Nullam maximus elit ut
                        nisi porttitor tempor.
                    </p>
                </div>
                <div className="ourstory-image">
                    <img src={SneakerOnShelf} alt="sneakers on a shelf" />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}
