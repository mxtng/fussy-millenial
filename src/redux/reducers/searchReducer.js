import { SEARCH_INGREDIENTS } from '../actions/types';

const initialState = {
	loading: false,
	ingredients: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SEARCH_INGREDIENTS:
			return {
				...state,
				loading: true,
				ingredients: payload
			};
		default:
			return state;
	}
};
