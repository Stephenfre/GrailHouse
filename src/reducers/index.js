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
    GETTING_USER,
    GETTING_USER_SUCCESS,
    GETTING_USER_FAIL,
    UPDATING_USER,
    UPDATING_USER_SUCCESS,
    UPDATING_USER_FAIL,
    ADD_SHOE,
    ADD_SHOE_SUCCESS,
    ADD_SHOE_FAIL,
    REMOVE_SHOE,
    REMOVE_SHOE_SUCCESS,
    REMOVE_SHOE_FAIL,
    DETAIL_SHOE,
    DETAIL_SHOE_SUCCESS,
    DETAIL_SHOE_FAIL,
} from "../actions";

const initialState = {
    shoes: [],
    gettingShoes: false,
    gettingShoesError: null,
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
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
    user: {
        name: "",
        username: "",
        email: "",
        shoeSize: null,
        closet: [],
    },
    closetId: {},
    shoeCloset: [],
    removingShoe: false,
    gettingDetailShoe: false,
    gettingDetailShoeError: null,
    detailShoe: {},
    gettingUser: false,
    gettingUserError: false,
    updatingUser: false,
    updatingUserSucces: false,
    updatingUserError: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
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
                // closetId: dictionary,
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
                shoes: [],
                gettingShoes: false,
                gettingShoesError: null,
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
                token: localStorage.getItem("token"),
                // eslint-disable-next-line
                isLoggedIn: localStorage.getItem("token") ? true : false,
                user: {
                    name: "",
                    username: "",
                    email: "",
                    shoeSize: "",
                    closet: [],
                },
                closetId: {},
                shoeCloset: [],
                removingShoe: false,
                gettingDetailShoe: false,
                gettingDetailShoeError: null,
                detailShoe: {},
                gettingUser: false,
                gettingUserError: false,
                updatingUser: false,
                updatingUserSucces: false,
                updatingUserError: null,
            };

        case GETTING_USER:
            return {
                ...state,
                gettingUser: true,
            };

        case GETTING_USER_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                user: action.payload,
            };

        case GETTING_USER_FAIL:
            return {
                ...state,
                gettingUser: false,
                gettingUserError: action.payload,
            };

        case UPDATING_USER:
            return {
                ...state,
                updatingUser: true,
            };

        case UPDATING_USER_SUCCESS:
            return {
                ...state,
                updatingUser: false,
                user: action.payload,
            };

        case UPDATING_USER_FAIL:
            return {
                ...state,
                updatingUser: false,
                updatingUserError: action.payload,
            };

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
            // localStorage.setItem("search results", JSON.stringify(searchResults));

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
            // localStorage.setItem("link shoes", JSON.stringify(linkShoesResults));
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

        case DETAIL_SHOE:
            return {
                ...state,
                gettingDetailShoe: true,
            };

        case DETAIL_SHOE_SUCCESS:
            return {
                ...state,
                gettingDetailShoe: false,
                detailShoe: action.payload,
            };

        case DETAIL_SHOE_FAIL:
            return {
                ...state,
                gettingDetailShoe: false,
                gettingDetailShoeError: action.payload,
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
