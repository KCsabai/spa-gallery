import { toast } from "react-toastify";
import { FETCH_TYPES, IMAGE_ACTIONS } from "./actions";
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
    case pendingAction(FETCH_TYPES.FETCH_IMAGE_UPLOAD):
      return {
        ...state,
        pending: true
      };
    case failedAction(FETCH_TYPES.FETCH_IMAGE_UPLOAD):
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_IMAGE_UPLOAD):
      toast.success('Image uploaded successfully', );
      return {
        ...state,
        pending: false,
        list: [...state.list, ...action.data]
      }

    case pendingAction(FETCH_TYPES.FETCH_IMAGE_LIST):
      return {
        ...state,
        pending: true
      };
    case failedAction(FETCH_TYPES.FETCH_IMAGE_LIST):
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_IMAGE_LIST):
      return {
        ...state,
        pending: false,
        list: action.data
      }
    case pendingAction(FETCH_TYPES.FETCH_IMAGE):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_IMAGE):
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_IMAGE):
      return {
        ...state,
        pending: false,
        selected: action.data,
        success: null,
      };
    case pendingAction(FETCH_TYPES.FETCH_IMAGE_UPDATE):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_IMAGE_UPDATE):
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
    case successAction(FETCH_TYPES.FETCH_IMAGE_UPDATE):
      toast.success('Image updated successfully', );
      return {
        ...state,
        pending: false,
        selected: null,
        success: true,
      };

    case pendingAction(FETCH_TYPES.FETCH_IMAGE_DELETE):
      return {
        ...state,
        pending: true,
      };
    case failedAction(FETCH_TYPES.FETCH_IMAGE_DELETE):
      toast.error(action.data?.error);
      return {
        ...state,
        pending: false,
        error: action.data.error
      };
    case successAction(FETCH_TYPES.FETCH_IMAGE_DELETE):
      toast.success('User deleted successfully');
      return {
        ...state,
        pending: false,
        selected: null,
        success: null,
        list: state.list.filter(img => img.id !== action.data.id),
      };

    default:
      return {
        ...state
      };
  }
};
