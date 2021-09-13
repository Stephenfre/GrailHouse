import axios from "axios";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GETTING_SHOES = "GETTING_SHOES_START";
export const GETTING_SHOES_SUCCESS = "GETTING_SHOES_SUCCESS";
export const GETTING_SHOES_FAIL = "GETTING_SHOES_FAIL";
export const SEARCHING_SHOE = "SEARCHING_SHOE";
export const SEARCHING_SHOE_SUCCESS = "SEARCHING_SHOE_SUCCESS";
export const SEARCHING_SHOE_FAIL = "SEARCHING_SHOE_FAIL";
export const GETTING_LINK_SHOES = "GETTING_LINK_SHOES";
export const GETTING_LINK_SHOES_SUCCESS = "GETTING_LINK_SHOES_SUCCESS";
export const GETTING_LINK_SHOES_FAIL = "GETTING_LINK_SHOES_FAIL";
export const DETAIL_SHOE = "DETAIL_SHOE";
export const DETAIL_SHOE_SUCCESS = "DETAIL_SHOE_SUCCESS";
export const DETAIL_SHOE_FAIL = "DETAIL_SHOE_FAIL";
export const ADD_SHOE = "ADD_SHOE";
export const ADD_SHOE_SUCCESS = "ADD_SHOE_SUCCESS";
export const ADD_SHOE_FAIL = "ADD_SHOE_FAIL";
export const REMOVE_SHOE = "REMOVE_SHOE";
export const REMOVE_SHOE_SUCCESS = "REMOVE_SHOE_SUCCESS";
export const REMOVE_SHOE_FAIL = "REMOVE_SHOE_FAIL";

export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export function getShoes() {
    return (dispatch) => {
        dispatch({ type: GETTING_SHOES });

        return axios
            .get("https://grailhouse.herokuapp.com/api/sneakers/home")
            .then((res) => {
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

export function searchingShoes(searchValue) {
    return (dispatch) => {
        dispatch({ type: SEARCHING_SHOE });

        return axios
            .get(`https://grailhouse.herokuapp.com/api/sneakers/search/${searchValue}`)
            .then((res) => {
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
    return (dispatch) => {
        dispatch({ type: GETTING_LINK_SHOES });

        return axios
            .get(`https://grailhouse.herokuapp.com/api/sneakers/search/${shoeName}`)
            .then((res) => {
                dispatch({
                    type: GETTING_LINK_SHOES_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GETTING_LINK_SHOES_FAIL,
                    payload: err,
                });
            });
    };
}

export function getDetails(styleId) {
    return (dispatch) => {
        dispatch({ type: DETAIL_SHOE });

        return axios
            .get(`https://grailhouse.herokuapp.com/api/sneakers/id/${styleId}/prices`)
            .then((res) => {
                dispatch({
                    type: DETAIL_SHOE_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: DETAIL_SHOE_FAIL,
                    payload: err,
                });
            });
    };
}

export function addToCloset(shoeInfo) {
    const userId = localStorage.getItem("id");

    return (dispatch) => {
        dispatch({ type: ADD_SHOE });

        return axios
            .post(`https://grailhouse.herokuapp.com/api/closet/${userId}`, shoeInfo)
            .then((res) => {
                dispatch({
                    type: ADD_SHOE_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: ADD_SHOE_FAIL,
                    payload: err,
                });
            });
    };
}

export function removeFromCloset(closetShoeId) {
    const userId = localStorage.getItem("id");

    return (dispatch) => {
        dispatch({ type: REMOVE_SHOE });

        return axios
            .delete(`https://grailhouse.herokuapp.com/api/closet/${userId}/${closetShoeId}`)
            .then((res) => {
                dispatch({
                    type: REMOVE_SHOE_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: REMOVE_SHOE_FAIL,
                    payload: err,
                });
            });
    };
}
