export const FETCH_TYPES = {
    FETCH_SIGN_UP_USER: 'FETCH_SIGN_UP_USER',
}

export const signUpUser = (userData) => ({
    type: FETCH_TYPES.FETCH_SIGN_UP_USER,
    method: 'POST',
    url: '/auth/signup',
    data: userData,
});