import axios from 'axios'

export const GETTING_SHOES = 'GETTING_SHOES_START';
export const GETTING_SHOES_SUCCESS = 'GETTING_SHOES_SUCCESS';
export const GETTING_SHOES_FAIL = 'GETTING_SHOES_FAIL';
export const SELECTED_SHOE = 'SELECTED_SHOE';


export default function getShoes() {
    return (dispatch) => {
        dispatch({type: GETTING_SHOES})

        axios
            .get('http://localhost:5000/trending')
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GETTING_SHOES_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => {
                dispatch({
                    type: GETTING_SHOES_FAIL,
                    payload: err
                });
            });
    }
}

export function selectShoe(id) {
    return (dispatch) => {
        dispatch({
            type: SELECTED_SHOE, 
            payload: id
        })
    }
}