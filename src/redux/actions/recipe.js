import {
	RECIPE_REQUEST,
	RECIPE_SUCCESS,
	RECIPE_FAILURE,
	RECIPE_CLEAR,
	UPDATE_FAVOURITE,
	REMOVE_FAVOURITE
} from './types';

export const recipeRequest = (data) => {
	return {
		type: RECIPE_REQUEST,
		payload: data
	};
};

export const recipeSuccess = () => {
	return {
		type: RECIPE_SUCCESS
	};
};
export const recipeFailure = () => {
	return {
		type: RECIPE_FAILURE
	};
};
export const recipeClear = () => {
	return {
		type: RECIPE_CLEAR
	};
};

export const updateFavourite = (id) => {
	return {
		type: UPDATE_FAVOURITE,
		payload: id
	};
};

export const removeFavourite = (id) => {
	return {
		type: REMOVE_FAVOURITE,
		payload: id
	};
};
