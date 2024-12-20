import axios from 'axios';
import { API_URL } from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            {headers: {Authorization: this.createBasicAuthToken(username, password)}}
        );
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`,
            {username, password}
        );
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + btoa(username + ":" + password);
    }

    createJwtToken(token) {
        return 'Bearer ' + token;
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user;
    }

    setupAxiosInterceptors(authHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = authHeader;
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();
