import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = "https://grailhouse.herokuapp.com/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + "sneakers/home");
    }

    getUserCloset() {
        return axios.get(API_URL + "closet", { headers: AuthHeader() });
    }
}

export default new UserService();
