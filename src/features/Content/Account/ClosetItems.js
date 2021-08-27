import React from "react";

export default function ClosetItems(props) {
    return (
        <div>
            <img src={props.thumbnail} alt="shoe pic" />
            <p>{props.shoeName}</p>
            <p>Lowset Price</p>
        </div>
    );
}
