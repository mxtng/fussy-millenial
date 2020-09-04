import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./types";

export const registerUser = ({ name, email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
    // register failure
  }
};

export const loginUser = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login", {
      email,
      password,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
    // login failure
  }
};

export const logoutUser = () => ({
  type: LOGOUT,
});
