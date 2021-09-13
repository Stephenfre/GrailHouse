import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

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
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const persistor = persistStore(store);

export { store, persistor };
