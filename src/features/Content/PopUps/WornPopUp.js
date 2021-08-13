import React from "react";

import "./PopUps.css";

export default function WornPopUp() {
    return (
        <div className="popup-box">
            <h3>Have these shoes be worn?</h3>
            <div className="btn-case">
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
    );
}
