import React from "react";
import styled from "styled-components";
import NikeLinks from "./Links/NikeLinks";
import JordanLinks from "./Links/JordanLinks";
import AdidasLink from "./Links/AdidasLink";
import YeezyLinks from "./Links/YeezyLinks";
import MoreSneakLinks from "./Links/MoreSneakLinks";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
        padding: 18px 10px;
    }
    @media (max-width: 600px) {
        flex-flow: column nowrap;
        background-color: #fff;
        position: fixed;
        transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        margin-top: 64px;
        transition: transform 0.3s ease-in-out;
        li {
            color: black;
        }
    }
    z-index: 9998;
`;

const MobileNav = ({ open }) => {
    return (
        <Ul open={open}>
            <li>
                <NikeLinks />
            </li>
            <li>
                <JordanLinks />
            </li>
            <li>
                <AdidasLink />
            </li>
            <li>
                <YeezyLinks />
            </li>
            <li>
                <MoreSneakLinks />
            </li>
        </Ul>
    );
};

export default MobileNav;
