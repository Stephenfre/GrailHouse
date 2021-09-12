import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [
        "gettingShoesError",
        "gettingShoes",
        "gettingDetailShoe",
        "gettingDetailShoeError",
        "gettingLinkShoes",
        "gettingLinkShoesError",
        "gettingLinkShoesSucces",
        "addingShoe",
        "addingShoeError",
        "removingShoe",
        "searchShoes",
        "searchShoesSuccess",
        "searchShoesError",
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const persistor = persistStore(store);

export { store, persistor };
