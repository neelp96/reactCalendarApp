import produce from "immer";
import {
  REQUEST_LOGIN,
  REQUEST_REGISTER,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
} from "../constants/user";

const initialState = {
  userData: [],
  loggedInUser: {},
  success: false,
  message: "",
  error: "",
  isAuthenticated: false,
};
const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SUCCESS_LOGIN:
        draft.loggedInUser = action.payload;
        draft.isAuthenticated = true;
        draft.error = "";
        break;
      case FAILED_LOGIN:
        draft.error = action.payload;
        break;
      case REQUEST_REGISTER:
        return {
          ...state,
          userData: [...state.userData, action.payload],
        };
      default:
        return state;
    }
  });

export default userReducer;
