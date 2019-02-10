import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username } = params;
        
        sessionStorage.setItem('username', username);
        return Promise.resolve();
    }

    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        sessionStorage.removeItem('username');
        return Promise.resolve();
    }

    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            sessionStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return sessionStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }

    return Promise.reject('Unknown method');
};
