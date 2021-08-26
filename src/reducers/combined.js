import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import index from "./index";

export default combineReducers({
    auth,
    message,
    index,
});
