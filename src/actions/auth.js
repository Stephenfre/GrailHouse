import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./index";

import AuthService from "../features/Auth/AuthService";

export const register = (name, username, email, password, shoeSize) => (dispatch) => {
    return AuthService.register(name, username, email, password, shoeSize).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            // dispatch({
            //     type: SET_MESSAGE,
            //     payload: response.data.message,
            // });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    name: data.user.name,
                    username: data.user.username,
                    email: data.user.email,
                    closet: data.user.closet,
                    shoeSize: data.user.shoeSize,
                },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
