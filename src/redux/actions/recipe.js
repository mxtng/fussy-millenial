import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_FAILURE } from './types';

export const recipeRequest = () => {
	return {
		type: RECIPE_REQUEST
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
