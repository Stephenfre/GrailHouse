import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../Nav/NavBar'
import AllTrends from './AllTrends'

import './AllTrending.css'
import TrendingBackground from '../../TrendingBackground.svg'
import GrailHouse from '../../GrailHouse.svg'
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function AllTrending() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoeData, setShoeData] = useState([]);
    const classes = useStyles();


    // useEffect(() => {
    //     fetch('http://localhost:5000/trending')
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
        fetch('http://localhost:5000/trending')
        .then(res => res.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
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
                    <div className='cta-trending-img'>
                        <img src={TrendingBackground} alt='cta-logo'/>
                    </div>
                    <div className='alltrending-content'>
                        <div className='title-alltrending'>
                            <h1>Results</h1>
                        </div>
                        <div className='alltrending-shoes-container'>
                            <div className='options'></div>
                            <div className='alltrending-shoes-content'>
                            {shoeData.map(shoes => (
                                <AllTrends
                                    thumbnail={shoes.thumbnail}
                                    shoeName={shoes.shoeName}
                                    // silhoutte={shoes.silhoutte}
                                    // colorway={shoes.colorway}
                                    retailPrice={shoes.retailPrice}
                                />
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
