import authReducer from "../auth/reducer";
import usersReducer from "../users/reducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    users: usersReducer,
    auth: authReducer,
};