import axios from 'axios';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8080/basicauth`,
            {headers: {Authorization: this.createBasicAuthToken(username, password)}}
        );
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`,
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
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser');
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
