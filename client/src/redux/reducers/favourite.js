import {
  UPDATE_FAVOURITE,
  DELETE_FAVOURITE,
  CLEAR_FAVOURITE,
} from "../actions/types";

const initialState = {
  favourites: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.some(({ id }) => id === payload.id)
          ? state.favourites
          : [...state.favourites, payload],
      };
    case DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(({ id }) => id !== payload),
      };
    case CLEAR_FAVOURITE:
      return {
        ...state,
        favourites: [],
      };
    default:
      return state;
  }
};
