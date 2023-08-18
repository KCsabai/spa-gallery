import { FETCH_TYPES } from "./actions";
import { pendingAction, failedAction, successAction } from "../common/functions";

const initialState = {
  pending: false,
  list: [],
  error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case pendingAction(FETCH_TYPES.FETCH_USER_LIST):
      return {
        ...state,
        pending: true
      };
    case failedAction(FETCH_TYPES.FETCH_USER_LIST):
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_USER_LIST):
      return {
        ...state,
        pending: false,
        list: action.data
      }
    default:
      return {
        ...state
      };
  }
};
