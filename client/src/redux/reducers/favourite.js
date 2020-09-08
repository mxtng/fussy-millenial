import {
  CLEAR_FAVOURITE,
  LOAD_FAVOURITE,
  UPDATE_FAVOURITE,
  DELETE_FAVOURITE,
} from "../actions/types";

const initialState = {
  favourites: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CLEAR_FAVOURITE:
      return {
        ...state,
        favourites: [],
      };
    case LOAD_FAVOURITE:
      return {
        ...state,
        favourites: [...payload],
      };
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
    default:
      return state;
  }
};
