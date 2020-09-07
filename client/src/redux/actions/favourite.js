import axios from "axios";
import { UPDATE_FAVOURITE, DELETE_FAVOURITE } from "./types";

export const updateFavourite = (recipe) => async (dispatch) => {
  try {
    const { id, image, title, usedIngredients, missedIngredients } = recipe;

    await axios.put("api/favourites", {
      id,
      image,
      title,
      usedIngredients,
      missedIngredients,
    });

    dispatch({
      type: UPDATE_FAVOURITE,
      payload: recipe,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteFavourite = (recipeId) => async (dispatch) => {
  try {
    await axios.delete("api/favourites", {
      recipeId,
    });

    dispatch({
      type: DELETE_FAVOURITE,
      payload: recipeId,
    });
  } catch (error) {
    console.error(error.message);
  }
};
