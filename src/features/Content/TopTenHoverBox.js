import React from "react";
import styled from "styled-components";

import "./HomePage/HomePage.css";

const HoverDiv = styled.div`
    width: 20%;
    height: 13%;
    zindex: 9999;
    position: absolute;
    bottom: 20.5rem;
    left: 25rem;
    background: white;
    @media only screen and (max-width: 600px) {
        width: 60%;
        height: 10%;
        bottom: 29rem;
        left: 5rem;
    }
    box-shadow: 0px 4px 5px #c7c7c7;
`;

const Paper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    text-align: center;
`;

const P = styled.p`
    font-size: 20px;
    padding: 10px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

export default function TopTenHoverBox() {
    return (
        <HoverDiv>
            <Paper>
                <P>The 'Most Popular' products are a curated collection of our best selling items.</P>
            </Paper>
        </HoverDiv>
    );
}
