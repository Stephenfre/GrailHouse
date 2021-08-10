import axios from "axios";

export const GETTING_SHOES = "GETTING_SHOES_START";
export const GETTING_SHOES_SUCCESS = "GETTING_SHOES_SUCCESS";
export const GETTING_SHOES_FAIL = "GETTING_SHOES_FAIL";
export const SELECTED_SHOE = "SELECTED_SHOE";
export const SEARCHING_SHOE = "SEARCHING_SHOE";
export const SEARCHING_SHOE_SUCCESS = "SEARCHING_SHOE_SUCCESS";
export const SEARCHING_SHOE_FAIL = "SEARCHING_SHOE_FAIL";
export const GETTING_LINK_SHOES = "GETTING_LINK_SHOES";
export const GETTING_LINK_SHOES_SUCCESS = "GETTING_LINK_SHOES_SUCCESS";
export const GETTING_LINK_SHOES_FAIL = "GETTING_LINK_SHOES_FAIL";

export function getShoes() {
    return (dispatch) => {
        dispatch({ type: GETTING_SHOES });

        return axios
            .get("http://localhost:5001/api/home")
            .then((res) => {
                console.log("get shoes", res.data);
                dispatch({
                    type: GETTING_SHOES_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GETTING_SHOES_FAIL,
                    payload: err,
                });
            });
    };
}

export function selectShoe(id, name) {
    return (dispatch) => {
        console.log(name);
        dispatch({
            type: SELECTED_SHOE,
            payload: id,
            name: name,
        });
    };
}

export function searchShoes(searchValue) {
    return (dispatch) => {
        dispatch({ type: SEARCHING_SHOE });

        return axios
            .get(`https://grailhouse.herokuapp.com/api/search/${searchValue}`)
            .then((res) => {
                console.log("search shoe", res.data);
                dispatch({
                    type: SEARCHING_SHOE_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: SEARCHING_SHOE_FAIL,
                    payload: err,
                });
            });
    };
}

export function getLinkShoes(shoeName) {
    console.log(shoeName);
    return (dispatch) => {
        dispatch({ type: GETTING_LINK_SHOES });

        return axios
            .get(`https://grailhouse.herokuapp.com/api/search/${shoeName}`)
            .then((res) => {
                if (res.data) {
                    dispatch({
                        type: GETTING_LINK_SHOES_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    setTimeout(() => {
                        dispatch(
                            {
                                type: GETTING_LINK_SHOES_SUCCESS,
                                payload: res.data,
                            },
                            4000
                        );
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GETTING_LINK_SHOES_FAIL,
                    payload: err,
                });
            });
    };
}
