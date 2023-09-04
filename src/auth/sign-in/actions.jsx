export const FETCH_TYPES = {
    FETCH_SIGN_IN_USER: 'FETCH_SIGN_IN_USER',
}

export const AUTH_ACTIONS = {
    LOGOUT: 'LOGOUT',
};

export const signInUser = (userData) => ({
    type: FETCH_TYPES.FETCH_SIGN_IN_USER,
    method: 'POST',
    url: '/auth/signin',
    data: userData,
});