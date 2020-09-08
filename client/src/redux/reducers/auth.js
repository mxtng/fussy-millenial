import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: null,
  authenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        token: payload,
        authenticated: true
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        token: payload,
        authenticated: true,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        authenticated: false,
        token: null,
      };
    default:
      return state;
  }
};
