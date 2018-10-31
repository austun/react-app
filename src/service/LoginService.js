import axios from 'axios';

export const loginService = {
    login,
    signup
};

const LOGIN_URL = 'http://localhost:8080/user/login';
const SIGNUP_URL = 'http://localhost:8080/user/signup';

function login(username, password) {
    return axios.post(LOGIN_URL, {
        username: username,
        password: password
    })
        .then(response => {
            return response.data
        });
}

function signup(username, password) {
    return axios.post(SIGNUP_URL, {
        username: username,
        password: password
    })
        .then(response => {
            return response.data
        });
}

