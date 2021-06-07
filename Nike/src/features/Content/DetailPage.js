import React from 'react';
import {connect} from 'react-redux';
import {withRouter, useParams} from 'react-router-dom'



function DetailPage(props) {

    let {shoeId} = useParams()

    return (
        <div>
            {/* <p>Hello {shoeId}</p> */}
            <p>{props.selectedShoe.brand}</p>
            <p>{props.selectedShoe.shoeName}</p>
            <p>{props.selectedShoe.colorway}</p>
            <p>{props.selectedShoe.description}</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        selectedShoe: state.selectedShoe
    }
}

const mapDispatchToPros = {
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToPros
    )(DetailPage)
)