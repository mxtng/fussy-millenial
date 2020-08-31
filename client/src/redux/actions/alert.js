import { SHOW_ALERT, HIDE_ALERT } from "./types";

export const showAlert = (alertMsg) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: alertMsg,
  });

  setTimeout(
    () =>
      dispatch({
        type: HIDE_ALERT,
      }),
    5000
  );
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};
