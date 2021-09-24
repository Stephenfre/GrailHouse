import React from "react";
import styled from "styled-components";

import "./HomePage/HomePage.css";

const HoverDiv = styled.div`
    width: 19%;
    height: 11%;
    z-index: 9999;
    position: absolute;
    bottom: 41%;
    left: 17%;
    background: white;

    @media only screen and (max-width: 500px) {
        width: 60%;
        height: 10%;
        bottom: 50%;
        left: 13%;
    }
    @media only screen and (min-width: 1920px) {
        width: 15%;
        height: 9%;
        bottom: 31%;
        left: 18%;
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
    @media (max-width: 600px) {
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
