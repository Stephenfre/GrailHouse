import {
    GETTING_SHOES,
    GETTING_SHOES_SUCCESS,
    GETTING_SHOES_FAIL,
    SELECTED_SHOE,
    SEARCHING_SHOE,
    SEARCHING_SHOE_SUCCESS,
    SEARCHING_SHOE_FAIL,
    GETTING_LINK_SHOES,
    GETTING_LINK_SHOES_SUCCESS,
    GETTING_LINK_SHOES_FAIL,
} from "../actions";

const initialState = {
    shoes: [],
    gettingShoes: false,
    gettingShoesError: null,
    selectedShoe: null,
    searchShoes: false,
    searchShoesSuccess: false,
    searchResults: [],
    searchShoesError: null,
    gettingLinkShoes: false,
    gettingLinkShoesSucces: false,
    linkShoesResults: [],
    gettingLinkShoesError: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case GETTING_SHOES:
            return {
                ...state,
                gettingShoes: true,
            };

        case GETTING_SHOES_SUCCESS:
            let shoes = [];
            // eslint-disable-next-line
            action.payload.map((shoe) => {
                let arr = Object.values(shoe.lowestResellPrice);
                let min = Math.min(...arr);
                shoe.lowestPrice = min;
                shoes.push(shoe);
            });
            return {
                ...state,
                shoes: shoes,
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
            let shoe;
            const id = action.payload;

            if (action.name === "trending") {
                shoe = state.trendingShoes.find((shoe) => shoe._id === id);
            } else if (action.name === "search") {
                shoe = state.searchResults.find((shoe) => shoe._id === id);
            } else if (action.name === "shoeLinks") {
                shoe = state.linkShoesResults.find((shoe) => shoe._id === id);
            } else {
                shoe = state.shoes.find((shoe) => shoe._id === id);
            }

            localStorage.setItem("selectedShoe", action.payload);
            localStorage.setItem("selectedThumbnail", shoe.thumbnail);
            localStorage.setItem("selectedShoeName", shoe.shoeName);
            localStorage.setItem("selectedDescription", shoe.description);
            localStorage.setItem("selectedLowestResellPrice", shoe.lowestResellPrice.stockX);
            localStorage.setItem("selectedStyleID", shoe.styleID);
            localStorage.setItem("selectedColorway", shoe.colorway);
            localStorage.setItem("selectedReleaseDate", shoe.releaseDate);
            return {
                ...state,
                selectedShoe: shoe,
            };

        case SEARCHING_SHOE:
            return {
                ...state,
                searchShoes: true,
                searchShoesSuccess: false,
            };

        case SEARCHING_SHOE_SUCCESS:
            let searchResults = [];
            // eslint-disable-next-line
            action.payload.map((shoe) => {
                let arr = Object.values(shoe.lowestResellPrice);
                let min = Math.min(...arr);
                shoe.lowestPrice = min;
                searchResults.push(shoe);
            });
            return {
                ...state,
                searchShoes: false,
                searchResults: searchResults,
            };

        case SEARCHING_SHOE_FAIL:
            return {
                ...state,
                searchShoes: false,
                searchShoesError: action.payload,
            };

        case GETTING_LINK_SHOES:
            return {
                ...state,
                gettingLinkShoes: true,
            };

        case GETTING_LINK_SHOES_SUCCESS:
            let linkShoesResults = [];
            // eslint-disable-next-line
            action.payload.map((shoe) => {
                let arr = Object.values(shoe.lowestResellPrice);
                let min = Math.min(...arr);
                shoe.lowestPrice = min;
                linkShoesResults.push(shoe);
            });
            return {
                ...state,
                gettingLinkShoes: false,
                linkShoesResults: linkShoesResults,
            };

        case GETTING_LINK_SHOES_FAIL:
            return {
                ...state,
                gettingLinkShoes: false,
                gettingLinkShoesError: action.payload.message,
            };

        default:
            return state;
    }
};
