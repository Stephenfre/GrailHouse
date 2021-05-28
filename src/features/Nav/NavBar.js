import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

import JordanLinks from './JordanLinks'
import NikeLinks from './NikeLinks'
import AdidasLinks from './AdidasLink'
import YeezyLinks from './YeezyLinks'
import MoreSneakLinks from './MoreSneakLinks'
import Account from '../Content/Account/Account';
import SearchPage from '../Content/Search/SearchPage';

import GrailHouse from '../../GrailHouse.svg'
import './NavBar.css'


const StyledLinks = styled(Link)`
    padding: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: black;

    &:hover {
        border-bottom: black solid 1px; 
    }
`;

export default function NavBar() {

    const [accountClick, setAccountClick] = useState(false);

    
        return (
        <div className='nav-container'>
           <div className='nav-bar'>
                <div className='nav-logo'>
                    <Link to='/'>
                        <img src={GrailHouse} alt='logo' />
                    </Link>
                </div>
            <div className='nav-links-container'>
                <ul className='top-nav'>
                    <li> 
                        <StyledLinks to=''>Jordan </StyledLinks> 
                            <ul class="sub-nav">
                                 <JordanLinks />
                            </ul>
                    </li>

                    <li> 
                        <StyledLinks to=''>Nike</StyledLinks>
                            <ul class="sub-nav">
                                <NikeLinks /> 
                            </ul>
                    </li>

                    <li> 
                        <StyledLinks to=''>Adidas</StyledLinks>
                            <ul class="sub-nav">
                                <AdidasLinks /> 
                            </ul>
                    </li>

                    <li> 
                        <StyledLinks to=''>Yeezy</StyledLinks>
                            <ul class="sub-nav">
                                <YeezyLinks /> 
                            </ul>
                    </li>

                    <li> 
                        <StyledLinks to=''>More Sneakers</StyledLinks>
                            <ul class="sub-nav">
                                <MoreSneakLinks /> 
                            </ul>
                    </li>

                    <li> 
                        <StyledLinks to=''>New Release</StyledLinks></li>
                </ul>
            </div>
            <div className='other-content'>
                {/* <SearchPage /> */}
                <StyledLinks
                onClick={() => setAccountClick(!accountClick)}
                >
                Account
                </StyledLinks>
            </div>
            <div className='account'>
                {accountClick && (
                <Account />
            )}
            </div>
           </div>
        </div>
    )
}

