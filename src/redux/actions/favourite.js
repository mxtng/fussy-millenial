import { UPDATE_FAVOURITE, DELETE_FAVOURITE } from './types';

export const updateFavourite = (recipe) => {
	return {
		type: UPDATE_FAVOURITE,
		payload: recipe
	};
};

export const deleteFavourite = (id) => {
	return {
		type: DELETE_FAVOURITE,
		id: id
	};
};
