import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";





const StyledLinks = styled(Link)`
    padding: 10px 0px 0px 0px;
    text-decoration: none;
    font-size: 15px;
    color: black;

    &:hover {
        color: grey
    }
`;

export default function Account() {
    
    
    return (
        <div className='account-content-container'>
            <div className='account-content'>
                <StyledLinks to=''>
                    My Account
                </StyledLinks>
                <StyledLinks to=''>
                    My Closet
                </StyledLinks>
                <StyledLinks to=''>
                    Track Changes
                </StyledLinks>
            </div>
            <div className='sign-in-bttn'>
                <button> Sign In / Register</button>
            </div>
        </div>
    )
}