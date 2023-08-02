export const FETCH_TYPES = {
    FETCH_USER_LIST: 'FETCH_USER_LIST',
}

export const fetchUsers = () => ({
    type: FETCH_TYPES.FETCH_USER_LIST,
    method: 'GET',
    url: '/users',
});