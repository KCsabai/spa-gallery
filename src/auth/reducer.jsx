import { FETCH_TYPES } from "./sign-up/actions";
import { FETCH_TYPES as LOGIN_FETCH_TYPES } from "./sign-in/actions";
import { pendingAction, failedAction, successAction } from "../common/functions";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  tokens: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case pendingAction(FETCH_TYPES.FETCH_SIGN_UP_USER):
      return {
        ...state,
        pending: true
      };
    case failedAction(FETCH_TYPES.FETCH_SIGN_UP_USER):
        action?.data?.error?.forEach(message => {
            toast.error(message);
        });

        return {
        ...state,
        pending: false,
        error: action.data.message
      };
    case successAction(FETCH_TYPES.FETCH_SIGN_UP_USER):
      toast.success('User created successfully', );
    
      return {
        ...state,
        pending: false,
        auth: action.data
      }
    case pendingAction(LOGIN_FETCH_TYPES.FETCH_SIGN_IN_USER):
      return {
        ...state,
        pending: true
      };
    case failedAction(LOGIN_FETCH_TYPES.FETCH_SIGN_IN_USER):
      action?.data?.error?.forEach(message => {
        toast.error(message);
      });

      return {
        ...state,
        pending: false,
        error: action.data.message
    };
    case successAction(LOGIN_FETCH_TYPES.FETCH_SIGN_IN_USER):
      toast.success('Successfully logged in', );
      return {
        ...state,
        pending: false,
        user: action.data?.user,
        tokens: action.data?.tokens,
      }

    default:
      return state;
  }
};
