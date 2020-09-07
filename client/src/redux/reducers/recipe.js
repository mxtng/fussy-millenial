import {
  RECIPE_REQUEST,
  RECIPE_SUCCESS,
  RECIPE_FAILURE,
} from "../actions/types";

const initialState = {
  loading: false,
  ingredients: null,
  recipes: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
        ingredients: payload,
        recipes: [],
      };

    case RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: [payload],
        ingredients: null,
      };

    case RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: { msg: "Recipe Error." },
      };
    default:
      return state;
  }
};
