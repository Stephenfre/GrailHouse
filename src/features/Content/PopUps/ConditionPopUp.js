import React from "react";

import "./PopUps.css";

export default function ConditionPopUp() {
    return (
        <div className="popup-box">
            <h3>What condition is the shoe in?</h3>
            <div className="btn-case2">
                <button>Perfect</button>
                <button>Great</button>
                <button>Ok</button>
                <button>Bad</button>
            </div>
        </div>
    );
}
