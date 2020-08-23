import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_FAILURE } from '../actions/types';

const initialState = {
	loading: false,
	recipe: [],
	error: {}
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECIPE_REQUEST:
			return {
				...state,
				loading: true
			};
		case RECIPE_SUCCESS:
			return {
				...state,
				loading: false,
				recipe: payload
			};
		case RECIPE_FAILURE:
			return {
				...state,
				loading: false,
				error: { msg: 'Recipe Error' }
			};
		default:
			return state;
	}
};
