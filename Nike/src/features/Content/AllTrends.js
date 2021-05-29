import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


import selectShoe from '../../actions/index.js'
import './AllTrends.css'


function TrendingShoes(props) {

    const clickHandler = (e, id) => {
        e.preventDefault
        props.selectShoe(id)
    }

    return (
        <div className='alltrending' onClick={clickHandler(props.id)}>
                <div className='alltrending-shoes'>
                <div className='alltrending-shoes-img'>
                    <img src={props.thumbnail} alt='shoe pic'/>
                </div>
                <div className='alltrending-shoes-wrap'>
                    <div className='alltrending-shoes-details'>
                        <p>{props.shoeName}</p>
                        <div className='prices'>
                            <p>Lowest Price</p>
                            <p style={{fontSize: '25px', fontWeight: '600' , marginTop: '0'}}>${props.retailPrice}</p>
                        </div>
                        <div className='got-them'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shoes,
    }
}

const mapDispatchToPros = {
    selectShoe
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToPros
    )(TrendingShoes)
)