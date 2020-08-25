import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_FAILURE, RECIPE_CLEAR } from './types';

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
