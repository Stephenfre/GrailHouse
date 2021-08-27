import axios from "axios";

const API_URL = "http://localhost:5001/api/";

class AuthService {
    login(email, password) {
        return axios.post(API_URL + "login", { email, password }).then((res) => {
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("token", res.data.token);
            }

            return res.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    register(name, email, password) {
        return axios
            .post(API_URL + "register", {
                name,
                email,
                password,
            })
            .then((res) => {
                if (res.data.token) {
                    localStorage.setItem("new user", JSON.stringify(res.data));
                }

                return res.data;
            });
    }
}

export default new AuthService();
