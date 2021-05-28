import React from "react";
import './AllTrends.css'


export default function TrendingShoes(props) {

    return (
        <div className='alltrending'>
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