import axios from "axios";
import { SAVE_FAVOURITE, REMOVE_FAVOURITE } from "./types";

export const saveRecipe = (recipe) => async (dispatch) => {
  try {
    dispatch({
      type: SAVE_FAVOURITE,
      payload: recipe,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const removeRecipe = (recipeId) => async (dispatch) => {
  try {
  } catch (error) {
    console.error(error.message);
  }
};

// favourite
// save to db
// 