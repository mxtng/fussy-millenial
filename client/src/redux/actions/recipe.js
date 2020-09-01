import axios from "axios";
import {
  RECIPE_REQUEST,
  RECIPE_SUCCESS,
  RECIPE_FAILURE,
  UPDATE_FAVOURITE,
  REMOVE_FAVOURITE,
} from "./types";

export const fetchRecipes = (ingredients) => async (dispatch) => {
  try {
    dispatch(recipeRequest(ingredients));

    const res = await axios.post("/api/recipes", {
      name: "test_recipes",
      ingredients,
    });
    dispatch(recipeSuccess(res.data));
  } catch (error) {
    console.error(error.message);
    dispatch(recipeFailure());
  }
};

export const recipeRequest = (data) => async (dispatch) => {
  await dispatch({
    type: RECIPE_REQUEST,
    payload: data,
  });
};

export const recipeSuccess = (recipes) => {
  return {
    type: RECIPE_SUCCESS,
    payload: recipes,
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
