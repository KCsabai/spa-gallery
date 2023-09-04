import { toast } from "react-toastify";
import { FETCH_TYPES, USER_ACTIONS } from "./actions";
import { pendingAction, failedAction, successAction } from "../common/functions";

const initialState = {
  pending: false,
  list: [],
  selected: null,
  error: null,
  success: null,
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
    case pendingAction(FETCH_TYPES.FETCH_USER):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_USER):
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_USER):
      return {
        ...state,
        pending: false,
        selected: action.data,
        success: null,
      };
    case USER_ACTIONS.SELECT_USER:
      return {
        ...state,
        selected: action.data
      };
    case USER_ACTIONS.UPDATE_SELECTED:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.data,
        },
      };
    case pendingAction(FETCH_TYPES.FETCH_USER_UPDATE):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_USER_UPDATE):
      if (Array.isArray(action?.data?.error)) {
        action?.data?.error?.forEach(message => {
          toast.error(message);
        });
      } else {
        toast.error(action?.data?.error);
      }
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_USER_UPDATE):
      toast.success('User updated successfully', );
      return {
        ...state,
        pending: false,
        selected: null,
        success: true,
      };
    case pendingAction(FETCH_TYPES.FETCH_USER_DELETE):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_USER_DELETE):
      toast.error(action.data?.error);
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_USER_DELETE):
      toast.success('User deleted successfully');
      return {
        ...state,
        pending: false,
        selected: null,
        success: null,
        list: state.list.filter(user => user.id !== action.data.id),
      };
    default:
      return {
        ...state
      };
  }
};
