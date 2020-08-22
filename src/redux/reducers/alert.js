import { SHOW_ALERT, HIDE_ALERT } from '../actions/types';

const initialState = {
	alert: false,
	msg: null
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SHOW_ALERT:
			return {
				...state,
				alert: true,
				msg: payload
			};
		case HIDE_ALERT:
			return {
				...state,
				alert: false
			};
		default:
			return state;
	}
};
