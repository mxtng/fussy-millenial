import { SAVE_FAVOURITE, REMOVE_FAVOURITE } from "../actions/types";

const initialState = {
  favourite: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_FAVOURITE:
      return {
        ...state,
        favourite: [payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
