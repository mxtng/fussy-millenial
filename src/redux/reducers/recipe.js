import {
  INGREDIENT_SEARCH,
  RECIPE_CLEAR,
  RECIPE_REQUEST,
  RECIPE_SUCCESS,
  RECIPE_FAILURE,
  UPDATE_FAVOURITE,
  REMOVE_FAVOURITE,
} from "../actions/types";

const initialState = {
  loading: false,
  ingredients: null,
  recipes: [],
  favourites: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case INGREDIENT_SEARCH:
      return {
        ...state,
        loading: true,
        ingredients: payload,
      };
    case RECIPE_CLEAR:
      return {
        ...state,
        loading: false,
        recipes: [],
      };
    case RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
        recipes: payload,
      };
    case RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: { msg: "Recipe Error" },
      };
    case UPDATE_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((fav, index) => index !== payload),
      };
    default:
      return state;
  }
};
