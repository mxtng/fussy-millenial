import { REGISTER_SUCCESS, REGISTER_FAILURE } from "../actions/types";

const initialState = {
  token: null,
  authenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload,
        authenticated: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};
