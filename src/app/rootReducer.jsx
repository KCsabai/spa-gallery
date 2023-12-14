import authReducer from "../auth/reducer";
import usersReducer from "../users/reducer";
import imagesReducer from '../images/reducer';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    users: usersReducer,
    images: imagesReducer,
    auth: authReducer,
};