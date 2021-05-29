import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import NavBar from '../Nav/NavBar'
import AllTrends from './AllTrends'

import './AllTrending.css'
import TrendingBackground from '../../TrendingBackground.svg'
import GrailHouse from '../../GrailHouse.svg'
import LinearProgress from '@material-ui/core/LinearProgress';
import getShoes from '../../actions/index.js'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



function AllTrending(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shoeData, setShoeData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
            props.getShoes();
    },[props.shoes]);

    if (props.gettingShoesError) {
        return <div>Error: {props.gettingShoesError}</div>;
    } else if (!props.gettingShoesSuccess) {
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
                            {props.shoes.map(shoes => (
                                <AllTrends
                                    id={shoes._id}
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

const mapStateToProps = (state) => {
    return {
        shoes: state.shoes,
        gettingShoesSuccess: state.gettingShoesSuccess,
        gettingShoesError: state.gettingShoesError
    }
}

const mapDispatchToPros = {
    getShoes
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToPros
    )(AllTrending)
)
