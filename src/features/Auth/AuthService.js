import axios from "axios";

const API_URL = "https://grailhouse.herokuapp.com/api/";

class AuthService {
    register(name, username, email, password, shoeSize) {
        return axios
            .post(API_URL + "register", {
                name,
                username,
                email,
                password,
                shoeSize,
            })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("id", res.data.user._id);
                }

                return res.data;
            });
    }

    login(email, password) {
        return axios.post(API_URL + "login", { email, password }).then((res) => {
            if (res.data.token) {
                localStorage.setItem("id", res.data.user._id);
                localStorage.setItem("token", res.data.token);
                // localStorage.setItem("closet", JSON.stringify(res.data.user.closet));
                // localStorage.setItem("name", JSON.stringify(res.data.user.name));
                // localStorage.setItem("email", JSON.stringify(res.data.user.email));
            }

            return res.data;
        });
    }

    logout() {
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        // localStorage.removeItem("closet");
        localStorage.removeItem("closetId");
        localStorage.clear("persist:root");
    }
}

export default new AuthService();
