import {
	GETTING_SHOES,
	GETTING_SHOES_SUCCESS,
	GETTING_SHOES_FAIL,
	GETTING_TEN_SHOES,
	GETTING_TEN_SHOES_SUCCESS,
	GETTING_TEN_SHOES_FAIL,
	SELECTED_SHOE,
	SEARCHING_SHOE,
	SEARCHING_SHOE_SUCCESS,
	SEARCHING_SHOE_FAIL,
} from "../actions";

const initialState = {
	shoes: [],
	trendingShoes: [],
	gettingShoes: false,
	gettingShoesError: null,
	gettingTenShoes: false,
	gettingTenShoesError: null,
	selectedShoe: null,
	searchShoes: false,
	searchShoesSuccess: false,
	searchResults: [],
	searchShoesError: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GETTING_SHOES:
			return {
				...state,
				gettingShoes: true,
			};

		case GETTING_SHOES_SUCCESS:
			let trendingShoes = [];
			action.payload.map((shoe) => {
				let arr = Object.values(shoe.lowestResellPrice);
				let min = Math.min(...arr);
				shoe.lowestPrice = min;
				trendingShoes.push(shoe);
			});
			return {
				...state,
				trendingShoes: trendingShoes,
				gettingShoes: false,
				gettingShoesError: null,
			};

		case GETTING_SHOES_FAIL:
			return {
				...state,
				gettingShoes: false,
				gettingShoesError: action.payload.message,
			};

		case SELECTED_SHOE:
			const id = action.payload;
			const shoe = state.shoes.find((shoe) => shoe._id === id);
			console.log("shoe", shoe);
			return {
				...state,
				selectedShoe: shoe,
			};

		case GETTING_TEN_SHOES:
			return {
				...state,
				gettingTenShoes: true,
			};

		case GETTING_TEN_SHOES_SUCCESS:
			let shoes = [];
			action.payload.map((shoe) => {
				let arr = Object.values(shoe.lowestResellPrice);
				let min = Math.min(...arr);
				shoe.lowestPrice = min;
				shoes.push(shoe);
			});
			return {
				...state,
				shoes: shoes,
				gettingTenShoes: false,
			};

		case GETTING_TEN_SHOES_FAIL:
			return {
				...state,
				gettingTenShoes: false,
				gettingTenShoesError: action.payload,
			};

		case SEARCHING_SHOE:
			return {
				searchShoes: true,
				searchShoesSuccess: false,
			};

		case SEARCHING_SHOE_SUCCESS:
			return {
				searchShoes: false,
				searchShoesSuccess: true,
				searchResults: action.payload,
			};

		case SEARCHING_SHOE_FAIL:
			return {
				searchShoes: false,
				searchShoesError: action.payload,
			};
		default:
			return state;
	}
};
