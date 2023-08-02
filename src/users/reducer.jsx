export const FETCH_TYPES = {
    FETCH_USER_REQUEST: "FETCH_USER_REQUEST",
};

const initialState = {
  pending: false,
  list: [],
  error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPES.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true
      };
    default:
      return {
        ...state
      };
  }
};
