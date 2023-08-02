export const fetchUsers = () => ({
    type: 'SET_VISIBILITY_FILTER',
    method: 'GET',
    url: '/users',
});