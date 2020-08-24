import { UPDATE_FAVOURITE, DELETE_FAVOURITE } from '../actions/types';

const initialState = {
	loading: false,
	favouriteRecipes: []
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case UPDATE_FAVOURITE:
			return {
				...state
				// add/update favourite recipe
			};
		case DELETE_FAVOURITE:
			return {
				...state
				// delete favourtie recipe using id to filtered out recipe
			};
		default:
			return state;
	}
};
