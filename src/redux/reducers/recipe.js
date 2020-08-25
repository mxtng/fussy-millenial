import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_FAILURE, RECIPE_CLEAR } from '../actions/types';

const initialState = {
	loading: false,
	recipes: [],
	error: {}
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECIPE_CLEAR:
			return {
				...state,
				loading: false,
				recipes: []
			};
		case RECIPE_REQUEST:
			return {
				...state,
				loading: true,
				recipes: payload
			};
		case RECIPE_SUCCESS:
			return {
				...state,
				loading: false
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
