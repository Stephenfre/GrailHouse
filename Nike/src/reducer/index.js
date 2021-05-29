import {
    GETTING_SHOES,
    GETTING_SHOES_SUCCESS,
    GETTING_SHOES_FAIL,
    SELECTED_SHOE
} from "../actions";

const initialState = {
    isLoading: false,
    shoes: null,
    gettingShoes: false,
    gettingShoesError: '',
    gettingShoesFail: false,
    gettingShoesSuccess: false,
    selectedShoe: null,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_SHOES: {
            return {
                ...state,
                gettingShoes: true
            }
        }

        case GETTING_SHOES_SUCCESS:
            return{
                ...state,
                shoes: action.payload,
                gettingShoes: false,
                gettingShoesSuccess: true
            }

        case GETTING_SHOES_FAIL:
            return {
                ...state,
                gettingShoes: false,
                gettingShoesFail: true,
                gettingShoesError: action.payload
            }

        case SELECTED_SHOE:
            const id = action.payload
            const shoe = state.shoes.find(shoe => shoe._id === id)
            console.log('shoe', shoe)
            return {
                ...state,
                selectedShoe: shoe
            }

        default:
            return state;
    }
};

export default reducers