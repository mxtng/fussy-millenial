import axios from "axios";
import {
  CLEAR_FAVOURITE,
  LOAD_FAVOURITE,
  UPDATE_FAVOURITE,
  DELETE_FAVOURITE,
} from "./types";

export const loadUserFavourite = () => async (dispatch) => {
  try {
    dispatch(clearFavourite());

    if (!localStorage.token) {
      return delete axios.defaults.headers.common["token"];
    }
    axios.defaults.headers.common["token"] = localStorage.token;

    const res = await axios.get("/api/favourites");

    dispatch({
      type: LOAD_FAVOURITE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUserFavourite = (recipe) => async (dispatch) => {
  try {
    recipe.recipeId = recipe.id;
    delete recipe.id;

    await axios.put("/api/favourites", {
      ...recipe,
    });

    dispatch(updateFavourite(recipe));
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteUserFavourite = (recipeId) => async (dispatch) => {
  try {
    await axios.delete(`/api/favourites/${recipeId}`);

    dispatch(deleteFavourite(recipeId));
  } catch (error) {
    console.error(error.message);
  }
};

export const updateFavourite = (recipe) => ({
  type: UPDATE_FAVOURITE,
  payload: recipe,
});

export const deleteFavourite = (recipeId) => ({
  type: DELETE_FAVOURITE,
  payload: recipeId,
});

export const clearFavourite = () => ({
  type: CLEAR_FAVOURITE,
});
