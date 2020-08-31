import {
  INGREDIENT_SEARCH,
  RECIPE_CLEAR,
  RECIPE_REQUEST,
  RECIPE_SUCCESS,
  RECIPE_FAILURE,
  UPDATE_FAVOURITE,
  REMOVE_FAVOURITE,
} from "./types";

export const ingredientSearch = (ingredients) => {
  return {
    type: INGREDIENT_SEARCH,
    payload: ingredients,
  };
};

export const recipeClear = () => {
  return {
    type: RECIPE_CLEAR,
  };
};

export const recipeRequest = (data) => async (dispatch) => {
  await dispatch(recipeClear());

  await dispatch({
    type: RECIPE_REQUEST,
    payload: data,
  });
};

export const recipeSuccess = () => {
  return {
    type: RECIPE_SUCCESS,
  };
};

export const recipeFailure = () => {
  return {
    type: RECIPE_FAILURE,
  };
};

export const updateFavourite = (id) => {
  return {
    type: UPDATE_FAVOURITE,
    payload: id,
  };
};

export const removeFavourite = (id) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: id,
  };
};
