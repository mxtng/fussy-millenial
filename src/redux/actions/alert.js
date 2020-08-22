import { SHOW_ALERT, HIDE_ALERT } from './types';

export default (alertMsg) => (dispatch) => {
	dispatch({
		type: SHOW_ALERT,
		payload: alertMsg
	});

	setTimeout(
		() =>
			dispatch({
				type: HIDE_ALERT
			}),
		3000
	);
};
