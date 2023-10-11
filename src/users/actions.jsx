export const FETCH_TYPES = {
    FETCH_USER_LIST: 'FETCH_USER_LIST',
    FETCH_USER: 'FETCH_USER',
    FETCH_USER_UPDATE: 'FETCH_USER_UPDATE',
    FETCH_USER_DELETE: 'FETCH_USER_DELETE',
}

export const USER_ACTIONS = {
    SELECT_USER: 'SELECT_USER',
    UPDATE_SELECTED: 'UPDATE_SELECTED',
};

export const fetchUsers = () => ({
    type: FETCH_TYPES.FETCH_USER_LIST,
    method: 'GET',
    url: '/users',
});

export const fetchUser = (id) => ({
    type: FETCH_TYPES.FETCH_USER,
    method: 'GET',
    url: `/users/${id}`,
});

export const selectUser = (userId) => ({
    type: USER_ACTIONS.SELECT_USER,
    data: userId,
});

export const updateSelected = (data) => ({
    type: USER_ACTIONS.UPDATE_SELECTED,
    data,
});

export const userUpdate = (data) => ({
    type: FETCH_TYPES.FETCH_USER_UPDATE,
    method: 'PATCH',
    url: `/users/${data.id}`,
    data,
});

export const userDelete = (data) => ({
    type: FETCH_TYPES.FETCH_USER_DELETE,
    method: 'DELETE',
    url: `/users/${data.id}`,
    data,
});