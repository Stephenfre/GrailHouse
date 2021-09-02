import {
    GETTING_SHOES,
    GETTING_SHOES_SUCCESS,
    GETTING_SHOES_FAIL,
    SEARCHING_SHOE,
    SEARCHING_SHOE_SUCCESS,
    SEARCHING_SHOE_FAIL,
    GETTING_LINK_SHOES,
    GETTING_LINK_SHOES_SUCCESS,
    GETTING_LINK_SHOES_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN_FAIL,
    ADD_SHOE,
    ADD_SHOE_SUCCESS,
    ADD_SHOE_FAIL,
    REMOVE_SHOE,
    REMOVE_SHOE_SUCCESS,
    REMOVE_SHOE_FAIL,
} from "../actions";

const token = localStorage.getItem("token");

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
    addingShoe: false,
    addingShoeError: null,
    linkShoesResults: [],
    gettingLinkShoesError: null,
    token: token,
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: {
        name: "",
        email: "",
        closet: [],
    },
    closetId: {},
    shoeCloset: [],
    removingShoe: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
    // console.log(token, "token");

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

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            let dictionary = {};
            // eslint-disable-next-line
            action.payload.closet.map((shoe) => {
                dictionary[shoe.shoeName] = 0;
            });
            localStorage.setItem("closetId", JSON.stringify(dictionary));
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                closetId: dictionary,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };

        case ADD_SHOE:
            return {
                ...state,
                addingShoe: true,
            };

        case ADD_SHOE_SUCCESS:
            let newDictionary = {};
            // eslint-disable-next-line
            action.payload.map((shoe) => {
                newDictionary[shoe.shoeName] = 0;
            });
            localStorage.setItem("closetId", JSON.stringify(newDictionary));
            localStorage.setItem("closet", JSON.stringify(action.payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    closet: action.payload,
                },
                closetId: newDictionary,
            };

        case ADD_SHOE_FAIL:
            return {
                ...state,
                addingShoe: false,
            };

        case REMOVE_SHOE:
            return {
                ...state,
                removingShoe: true,
            };

        case REMOVE_SHOE_SUCCESS:
            let removeDictionary = {};
            // eslint-disable-next-line
            action.payload.map((shoe) => {
                removeDictionary[shoe.shoeName] = 0;
            });
            localStorage.setItem("closetId", JSON.stringify(removeDictionary));
            localStorage.setItem("closet", JSON.stringify(action.payload));
            return {
                ...state,
                user: {
                    ...state.user,
                    closet: action.payload,
                },
            };

        case REMOVE_SHOE_FAIL:
            return {
                ...state,
                removingShoe: false,
            };

        default:
            return state;
    }
};
