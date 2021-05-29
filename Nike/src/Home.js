import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './features/Nav/NavBar'
import Cta from './features/Cta/Cta'
import TrendingShoes from './features/Content/TrendingShoes';

import './App.css'
import GrailHouse from './GrailHouse.svg'
import styled from "styled-components";
import LinearProgress from '@material-ui/core/LinearProgress';


const StyledLinks = styled(Link)`
    text-decoration: none;
    background: black;
    color: white;
    font-size: 18px;
    padding: 1rem;
    width: 11%;
    border-radius: 5px;
    border: none;
    text-align: center;

    &:hover {
        background: rgb(41, 41, 41);
        color: rgb(235, 235, 235);
    }
`;


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoeData, setShoeData] = useState([]);
    const classes = useStyles();


    // useEffect(() => {
    //     fetch('http://localhost:5000/')
    //     .then(res => res.json())
    //     .then(
    //         (results) => 
    //             (
    //                 setIsLoaded(true),
    //                 setShoeData(results),
    //                 console.log('shoeData', shoeData)
    //             )
    //         ,
    //         (error) => 
    //             (
    //                 setIsLoaded(true),
    //                 setError(error)
    //             )
            
    //     )
    // },[])
    
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(jsonResponse => {
            setShoeData(jsonResponse)
            setIsLoaded(true)
        });
    },[]);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='loader-container'>
                    <div className='loader'>
                        <div className='loader-logo'>
                            <img src={GrailHouse} alt='logo' />
                        </div>
                    <div className={classes.root}>
                        <LinearProgress color="secondary" />
                    </div>
                    </div>
                </div>;
    } else {
        return (
            <div className="app">
                <div className='container'>
                    <NavBar />
                    <Cta />
                    <div className='content'>
                        <div className='title-trending'>
                            <h1>Trending</h1>
                        </div>
                        <div className='trending-shoes-container'>
                            {shoeData.map(shoes => (
                                <TrendingShoes
                                    thumbnail={shoes.thumbnail}
                                    shoeName={shoes.shoeName}
                                    retailPrice={shoes.retailPrice}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{width: '100%', height: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <StyledLinks to='alltrending' className='trending-btn'>All Trending Shoes</StyledLinks>
                            </div>
                    </div>
            </div>
        );
    }
};
