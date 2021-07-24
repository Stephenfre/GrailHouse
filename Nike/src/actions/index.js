import axios from "axios";

export const GETTING_SHOES = "GETTING_SHOES_START";
export const GETTING_SHOES_SUCCESS = "GETTING_SHOES_SUCCESS";
export const GETTING_SHOES_FAIL = "GETTING_SHOES_FAIL";
export const GETTING_TEN_SHOES = "GETTING_TEN_SHOES_START";
export const GETTING_TEN_SHOES_SUCCESS = "GETTING_TEN_SHOES_SUCCESS";
export const GETTING_TEN_SHOES_FAIL = "GETTING_TEN_SHOES_FAIL";
export const SELECTED_SHOE = "SELECTED_SHOE";
export const SEARCHING_SHOE = "SEARCHING_SHOE";
export const SEARCHING_SHOE_SUCCESS = "SEARCHING_SHOE_SUCCESS";
export const SEARCHING_SHOE_FAIL = "SEARCHING_SHOE_FAIL";

export function getShoes() {
	return (dispatch) => {
		dispatch({ type: GETTING_SHOES });

		return axios
			.get("http://localhost:5000/")
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
		dispatch({
			type: SELECTED_SHOE,
			payload: id,
			name: name,
		});
	};
}

export function getTenShoes() {
	return (dispatch) => {
		dispatch({ type: GETTING_TEN_SHOES });

		return axios
			.get("http://localhost:5000/")
			.then((res) => {
				console.log("get ten shoes", res.data);
				dispatch({
					type: GETTING_TEN_SHOES_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: GETTING_TEN_SHOES_FAIL,
					payload: err,
				});
			});
	};
}

export function searchShoes(searchValue) {
	return (dispatch) => {
		dispatch({ type: SEARCHING_SHOE });

		return axios
			.get(`http://localhost:5000/search/${searchValue}`)
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
