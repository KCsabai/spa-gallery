export const FETCH_TYPES = {
    FETCH_SIGN_UP_USER: 'FETCH_SIGN_UP_USER',
}

export const fetchSignUpUser = (userData) => ({
    type: FETCH_TYPES.FETCH_SIGN_UP_USER,
    method: 'POST',
    url: '/users',
    data: userData,
});